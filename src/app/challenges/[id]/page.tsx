"use client";

import { useParams } from "next/navigation"; // Import useRouter and useParams from next/navigation
import { challenges } from "@/lib/challenges";
import { useState } from "react";

import { Editor } from "@monaco-editor/react";

const ChallengeDetails = () => {
    const { id } = useParams(); // Get the challenge ID from the URL using useParams
    const challenge = challenges.find((c) => c.id === id); // Find the challenge by ID

    const [userCode, setUserCode] = useState(challenge?.startCode || ""); // State to manage user code
    const [testResults, setTestResults] = useState<string[]>([]); // State to manage test results

    if (!challenge) {
        return <div>Loading...</div>; // Show loading state if challenge is not found
    };

    const runTests = () => {
        try {
            // Create a function dynamically
            const func = new Function(`${userCode}; return reverseString;`); // Assuming the function name is reverseString
            const solution = func(); // Get the function from the created function

            // Test the first test case for simplicity
            const testCase = challenge.testCases[0].replace(/"/g, "").split(" should return ");
            const output = solution(testCase[0]); // Call the function with the test case input
            setTestResults([`Input: ${testCase[0]}, Output: ${output}, Expected: ${testCase[1]}`]); // Set the test results
        } catch (error) {
            setTestResults([`Error: ${error instanceof Error ? error.message : "An unknown error occurred"}`]); // Set error message if any error occurs
        }
    }

    return (
        <div className="max-w-4xl min-h-screen bg-gray-900 text-white mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-4">{challenge.title}</h1>
            <p className="mb-6">{challenge.description}</p>

            {/*<textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)} // Update user code on change
              rows={10}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Write your code here..."
            />*/}
            <Editor
                height="400px" // Set the height of the editor
                defaultLanguage="javascript" // Set the default language to JavaScript
                defaultValue={userCode} // Set the initial code in the editor
                onChange={(value) => setUserCode(value || "")} // Update user code on change
                theme="vs-dark" // Set the theme of the editor to dark mode
            />

            <button
              onClick={runTests} // Run tests when button is clicked
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
                Run Tests
            </button>

            {testResults && (
                <pre className="mt-4 p-4 bg-gray-800 text-white rounded">{testResults}</pre> // Display test results
            )}

        </div>
    )

}

export default ChallengeDetails;