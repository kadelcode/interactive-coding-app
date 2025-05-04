"use client";

import { useParams } from "next/navigation"; // Import useRouter and useParams from next/navigation
import { challenges } from "@/lib/challenges";
import { useEffect, useState } from "react";

import { Editor } from "@monaco-editor/react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
// import { java } from "@codemirror/lang-java";
import CodeRunner from "@/components/CodeRunner"; // Import CodeRunner component

const ChallengeDetails = () => {
    const { id } = useParams(); // Get the challenge ID from the URL using useParams
    const challenge = challenges.find((c) => c.id === id); // Find the challenge by ID

    const [userCode, setUserCode] = useState(challenge?.startCode || ""); // State to manage user code
    const [testResults, setTestResults] = useState<string[]>([]); // State to manage test results

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


    if (!challenge) {
        return <div>Challenge not found</div>; // Show error message if challenge is not found
    }

    return (
        <section className="container min-w-full bg-gray-900 mx-auto">
            <div className="max-w-4xl min-h-screen bg-gray-900 text-white mx-auto py-10 px-4">
                <h1 className="text-2xl font-bold mb-4">{challenge.title}</h1>
                <p className="mb-6">{challenge.description}</p>

                {isMobile ? (
                    <ReactCodeMirror // Use ReactCodeMirror editor for mobile view
                        value={userCode} // Set the initial code in the editor
                        height="400px" // Set the height of the editor
                        extensions={[javascript({ jsx: true }), python()]} // Set the language extensions for CodeMirror
                        onChange={(value) => setUserCode(value)} // Update user code on change
                        theme="dark" // Set the theme of the editor
                        className="mb-4" // Add margin bottom for spacing
                    />
                    ) : (
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-4"> 
                            <div className="inline-block text-sm">
                                <label htmlFor="language" className="block mb-2">Select Language:</label>
                                <select
                                    id="language"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)} // Update language on change
                                    className="w-full p-2 border border-gray-300 bg-gray-900 rounded"
                                >
                                    <option value="javascript">JavaScript</option>
                                    <option value="python">Python</option>
                                    <option value="java">Java</option>
                                    <option value="csharp">C#</option>
                                    <option value="ruby">Ruby</option>
                                    <option value="go">Go</option>
                                    <option value="php">PHP</option>
                                    <option value="typescript">TypeScript</option>
                                    <option value="html">HTML</option>
                                    <option value="css">CSS</option>
                                    <option value="swift">Swift</option>
                                    <option value="kotlin">Kotlin</option>
                                    <option value="rust">Rust</option>
                                    <option value="r">R</option>
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
                                    <option value="vs">Visual Studio</option>
                                    <option value="hc-light">High Contrast Light</option>
                                </select>
                            </div>
                        </div>
                        <Editor
                            height="400px" // Set the height of the editor
                            defaultLanguage={language} // Set the default language of the editor
                            language={language} // Set the current language of the editor
                            defaultValue={userCode} // Set the initial code in the editor
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

                <CodeRunner code={userCode} language={language} /> {/* Render CodeRunner component */}  

                {testResults && (
                    <pre className="mt-4 p-4 bg-gray-800 text-white rounded">{testResults}</pre> // Display test results
                )}

            </div>
        </section>
    )

}

export default ChallengeDetails;