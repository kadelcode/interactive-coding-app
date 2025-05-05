"use client";

import { useParams } from "next/navigation"; // Import useRouter and useParams from next/navigation
import { challenges } from "@/lib/challenges";
import { useEffect, useState } from "react";

import { Editor } from "@monaco-editor/react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
// import { java } from "@codemirror/lang-java";
// import CodeRunner from "@/components/CodeRunner"; // Import CodeRunner component


// Function to get the appropriate CodeMirror extension based on the language
const getCodeMirrorExtension = (lang: string) => {
    // This function returns the appropriate CodeMirror extension based on the selected language
    switch (lang) {
        case "javascript":
        case "typescript":
            return javascript({ jsx: true }); // Use JavaScript extension for JavaScript and TypeScript
        case "python":
            return python();
        // Add more languages as needed
        default:
            return javascript({ jsx: true });
    }
}

interface TestCase {
    input: string;
    expected: string;
}

// Function to run JavaScript code and return test results
interface RunJavascriptCodeParams {
    userCode: string;
    tests: TestCase[];
    functionName: string;
}

function runJavascriptCode({ userCode, tests, functionName }: RunJavascriptCodeParams): string[] {
    // This function takes user code, test cases, and function name as parameters
    const results = tests.map(({ input, expected }: TestCase) => {
        try {
            const fullCode = `
                ${userCode} 
                return ${functionName}(${input});
            `; // Create a full code string by combining user code and test case input

            const result = new Function(fullCode)(); // Create a function dynamically and execute it
            const passed = JSON.stringify(result) === (expected); // Check if the result matches the expected output
            return passed
                ? `✅ Test passed for input ${input}` // Return success message if test passed
                : `❌ Failed: Test failed for input ${input}. Expected ${expected}, but got ${result}`; // Return error message if test failed
        } catch (error) {
            return `❌ Error: ${error instanceof Error ? error.message : "An unknown error occurred"}`; // Return error message if any error occurs
        }
    });
    return results; // Return the array of test results
}

const ChallengeDetails = () => {
    const { id } = useParams(); // Get the challenge ID from the URL using useParams
    const challenge = challenges.find((c) => c.id === id); // Find the challenge by ID

    const [userCode, setUserCode] = useState(challenge?.startCode || ""); // State to manage user code
    const [testResults, setTestResults ] = useState<string[]>([]); // State to manage test results setTestResults

    const [language, setLanguage] = useState("javascript"); // State to manage the selected language
    const [theme, setTheme] = useState("vs-dark"); // State to manage the selected theme

    const [isMobile, setIsMobile] = useState(false); // State to manage mobile view

    useEffect(() => { // Effect to check if the user is on mobile view
        // Function to check if the window width is less than or equal to 768px
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Check if the window width is less than or equal to 768px
        };
        checkMobile(); // Call the function to check mobile view
        window.addEventListener("resize", checkMobile); // Add event listener to check on resize
        return () => window.removeEventListener("resize", checkMobile); // Clean up the event listener on unmount
    }, []);

    // Update userCode when the language changes
    useEffect(() => {
        const defaultCode = challenge?.startCode[language as keyof typeof challenge.startCode] || ""; // Get the default code for the selected language
        setUserCode(defaultCode); // Update userCode with the default code
    }, [language, challenge]); // Run this effect when language or challenge changes


    if (!challenge) {
        return <div>Challenge not found</div>; // Show error message if challenge is not found
    }

    return (
        <section className="container min-w-full bg-gray-900 mx-auto">
            <div className="max-w-4xl min-h-screen bg-gray-900 text-white mx-auto py-10 px-4">
                <h1 className="text-2xl font-bold mb-4">{challenge.title}</h1>
                <p className="mb-6">{challenge.description}</p>

                <div>
                        <div className="flex items-center justify-between mb-4"> 
                            <div className="inline-block text-sm">
                                <label htmlFor="language" className="block">Select Language:</label>
                                <select
                                    id="language"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)} // Update language on change
                                    className="w-full p-2 border border-gray-300 bg-gray-900 rounded"
                                >
                                    <option value="javascript">JavaScript</option>
                                    <option value="python">Python</option>
                                </select>
                            </div>

                            <div className="inline-block text-sm">
                                <label htmlFor="theme" className="block">Select Theme:</label>
                                <select
                                    id="theme"
                                    value={theme}
                                    onChange={(e) => setTheme(e.target.value)} // Update theme on change
                                    className="w-full p-2 border border-gray-300 bg-gray-900 rounded text-sm"
                                >
                                    <option value="vs-dark">Dark</option>
                                    <option value="light">Light</option>
                                    <option value="hc-black">High Contrast</option>
                                </select>
                            </div>
                        </div>
                </div>

                {isMobile ? (
                    <ReactCodeMirror // Use ReactCodeMirror editor for mobile view
                        value={typeof userCode === "string" ? userCode : ""} // Ensure userCode is a string
                        height="400px" // Set the height of the editor
                        extensions={[getCodeMirrorExtension(language)]} // Set the language extensions for CodeMirror
                        onChange={(value) => setUserCode(value)} // Update user code on change
                        theme={theme === "vs-dark" ? "dark" : theme === "light" ? "light" : "none"} // Map theme to allowed values
                        className="mb-4" // Add margin bottom for spacing
                    />
                    ) : (
                    <div className="mb-4"> {/* Add margin bottom for spacing */}
                        {/* Use Monaco Editor for desktop view */}
                        <Editor
                            height="400px" // Set the height of the editor
                            language={language} // Set the current language of the editor
                            value={typeof userCode === "string" ? userCode : ""} // Ensure userCode is a string
                            onChange={(value) => setUserCode(value || "")} // Update user code on change
                            theme={theme} // Set the theme of the editor
                            options={{
                                fontSize: 16, // Set the font size of the editor
                                lineNumbers: "on", // Show line numbers
                                minimap: { enabled: false }, // Disable minimap
                                automaticLayout: true, // Enable automatic layout
                                scrollBeyondLastLine: false, // Disable scrolling beyond last line
                                wordWrap: "on", // Enable word wrap
                                wrappingIndent: "same", // Set wrapping indent to same
                            }}
                        />
                    </div>
                )}

                {/*<CodeRunner code={typeof userCode === "string" ? userCode : ""} language={language} /> {/* Render CodeRunner component */}  

                <button
                    onClick={() => {
                        const codeToRun = typeof userCode === "string" ? userCode : userCode[language as keyof typeof userCode] || ""; // Ensure userCode is a string
                        const { testCases, functionName } = challenge; // Destructure testCases and functionName from challenge
                        const results = runJavascriptCode({ userCode: codeToRun || "", tests: testCases, functionName: functionName || "" }); // Pass them correctly
                        setTestResults(results); // Update test results state with the results  
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4" // Style the button
                >
                    Run Tests   {/* Button to run tests */}
                </button>
                {testResults && (
                    <pre className="mt-4 p-4 bg-gray-800 text-white rounded">
                        {testResults.join("\n")} {/* Display test results */}
                    </pre> // Display test results
                )}

            </div>
        </section>
    )

}

export default ChallengeDetails;