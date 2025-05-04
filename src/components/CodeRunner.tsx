"use client";

import { useState } from "react";

declare global { // Declare global types for Pyodide
    // This is to avoid TypeScript errors when using Pyodide in the browser
    interface Window {
        loadPyodide: () => Promise<any>;
    }
}

const CodeRunner = ({ code, language }: { code: string; language: string }) => {
    const [output, setOutput] = useState<string | null>(null); // State to manage output
    const [error, setError] = useState<string | null>(null); // State to manage error messages

    const runJS = () => {
        try {
            const result = new Function(code)(); // Create a function dynamically and execute it
            setOutput(result); // Set the output state with the result 
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred"); // Set error message if any error occurs
        }
    };

    const runPython = async () => {
        const pyodide = await window.loadPyodide(); // Load Pyodide
        const result = await pyodide.runPythonAsync(code); // Run Python code
        setOutput(result); // Set the output state with the result
    };

    const handleRun = () => {
        if (language === "javascript") {
            runJS(); // Run JavaScript code
        } else if (language === "python") {
            runPython(); // Run Python code
        }
    }

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <button onClick={handleRun} className="bg-blue-500 text-white px-4 py-2 rounded">Run Code</button>
            {output && <pre className="mt-4 bg-gray-700 p-2 rounded">{output}</pre>} {/* Display output */}
            {error && <pre className="mt-4 bg-red-700 p-2 rounded">{error}</pre>} {/* Display error message */}
        </div>
    );
}

export default CodeRunner; // Export the CodeRunner component