export type Challenge = {
    id: string; // Unique identifier for the challenge
    title: string; // Title of the challenge
    description: string; // Brief description of the challenge
    startCode: string; // Initial code provided to the user
    testCases: string[]; // Array of test cases to validate the solution
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
        startCode: 'function reverseString(str) {\n  // Your code here\n}',
        testCases: [
            '"hello" should return "olleh"',
            '"world" should return "dlrow"',
            '"DevDrill" should return "lliDveD"'
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
        startCode: 'function fibonacci(n) {\n  // Your code here\n}',
        testCases: [
            'fibonacci(0) should return 0',
            'fibonacci(1) should return 1',
            'fibonacci(5) should return 5'
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
        startCode: 'function sortArray(arr) {\n  // Your code here\n}',
        testCases: [
            '[3, 1, 2] should return [1, 2, 3]',
            '[5, 4, 3, 2, 1] should return [1, 2, 3, 4, 5]',
            '[10, -1, 0] should return [-1, 0, 10]'
        ],
        difficulty: 'medium',
        tags: ['sorting', 'algorithm'],
        createdAt: new Date('2023-03-01'),
        updatedAt: new Date('2023-03-02')
    },
]