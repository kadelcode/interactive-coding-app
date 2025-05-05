export type Challenge = {
    id: string; // Unique identifier for the challenge
    title: string; // Title of the challenge
    description: string; // Brief description of the challenge
    startCode: {
        javascript: string,
        python: string,
    }
    testCases: { input: string; expected: string }[]; // Array of test cases to validate the solution
    functionName?: string; // Name of the function to be implemented (optional)
    functionNamePython?: string; // Name of the function to be implemented in Python (optional)
    difficulty: 'easy' | 'medium' | 'hard'; // Difficulty level of the challenge
    tags: string[]; // Tags associated with the challenge (e.g., 'string', 'algorithm')
    createdAt: Date; // Date when the challenge was created
    updatedAt: Date; // Date when the challenge was last updated
};

export const challenges: Challenge[] = [
    {
        id: '1',
        title: 'Reverse a String',
        description: 'Write a function that reverses a given string.',
        startCode: {
            javascript: 'function reverseString(str) {\n  // Your code here\n}',
            python: 'def reverse_string(s):\n    # Your code here\n'

        },
        functionName: 'reverseString',
        functionNamePython: 'reverse_string',
        testCases: [
            { input: '"hello"', expected: '"olleh"' },
            { input: '"world"', expected: '"dlrow"' },
        ],
        difficulty: 'easy',
        tags: ['string', 'algorithm'],
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-02')
    },
    {
        id: '2',
        title: 'Fibonacci Sequence',
        description: 'Write a function that returns the nth Fibonacci number.',
        startCode: {
            javascript: 'function fibonacci(n) {\n  // Your code here\n}',
            python: 'def fibonacci(n):\n    # Your code here\n'
        },
        functionName: 'fibonacci',
        functionNamePython: 'fibonacci',
        testCases: [
            { input: '0', expected: '0' },
            { input: '1', expected: '1' },
            { input: '2', expected: '1' },
            { input: '3', expected: '2' },
            { input: '4', expected: '3' },
            { input: '5', expected: '5' },
            { input: '10', expected: '55' },
        ],
        difficulty: 'medium',
        tags: ['recursion', 'dynamic programming'],
        createdAt: new Date('2023-02-01'),
        updatedAt: new Date('2023-02-02')
    },
    {
        id: '3',
        title: 'Sort an Array',
        description: 'Write a function that sorts an array of numbers in ascending order.',
        startCode: {
            javascript: 'function sortArray(arr) {\n  // Your code here\n}',
            python: 'def sort_array(arr):\n    # Your code here\n'
        },
        functionName: 'sortArray',
        functionNamePython: 'sort_array',
        testCases: [
            { input: '[3, 1, 4, 1, 5]', expected: '[1, 1, 3, 4, 5]' },
            { input: '[10, -2, 0, 5]', expected: '[-2, 0, 5, 10]' },
            { input: '[]', expected: '[]' },    
        ],
        difficulty: 'medium',
        tags: ['sorting', 'algorithm'],
        createdAt: new Date('2023-03-01'),
        updatedAt: new Date('2023-03-02')
    },
]