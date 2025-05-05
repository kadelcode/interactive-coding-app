import { useEffect } from 'react';

interface TestCase {
    input: string;
    expected: string;
}

interface JavaScriptRunnerProps {
    code: string;
    testCases: TestCase[]
    functionName: string;
    onResults: (results: string[]) => void;

}

const JavaScriptRunner: React.FC<JavaScriptRunnerProps> = ({ code, testCases, functionName, onResults }) => {
    useEffect(() => {
        const runTests = () => {
            const results: string[] = []; // Store the results of the tests
            
            if (!code) {
                results.push('Error: No code provided to run tests on.');
                onResults(results); // Pass the error to the parent component
                return;
            }

            try {
                // Dynamically create the function from the user's code
                const fullCode = `${code}; return ${functionName};`;
                const userFunc = new Function(fullCode)();

                if (typeof userFunc !== 'function') {
                    results.push(`Error: ${functionName} is not defined or is not a function`);
                } else {
                    testCases.forEach(({ input, expected }, index) => {
                        try {
                            const parsedInput = JSON.parse(input); // Parse the input string to a JavaScript object

                            // Call the function with the parsed input
                            const result = Array.isArray(parsedInput) ? userFunc(...parsedInput) : userFunc(parsedInput);

                            const pass = JSON.stringify(result) === expected; // Compare the result with the expected output
                        
                            results.push(`Test case ${index + 1}: ${pass ? '✅ Passed' : `Failed (expected ${expected}, got ${JSON.stringify(result)})`}`);
                        } catch (error) {
                            if (error instanceof Error) {
                                results.push(`❌ Test case ${index + 1}: Error - ${error.message}`);
                            } else {
                                results.push(`❌ Test case ${index + 1}: Unknown error occurred`);
                            }
                        }
                    });
                }
            } catch (error) {
                if (error instanceof Error) {
                    results.push(`Error: ${error.message}`);
                }
                else {
                    results.push(`Error: Unknown error occurred`);
                }
            }
            onResults(results); // Pass the results to the parent component
        };

        runTests(); // Run the tests when the component mounts or when the code changes
    }, [code, testCases, functionName, onResults]); // Dependencies for useEffect

    return null; // Return null since this component does not render any UI
};

export default JavaScriptRunner;