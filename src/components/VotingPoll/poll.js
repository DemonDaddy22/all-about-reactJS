const INITIAL_COUNT = 1000;

export const poll = {
    title: `What is the name of Thor's Hammer?`,
    options: [
        {
            id: 1,
            label: 'Vanir',
            count: Math.floor(Math.random() * INITIAL_COUNT)
        },
        {
            id: 2,
            label: 'Mjolnir',
            count: Math.floor(Math.random() * INITIAL_COUNT)
        },
        {
            id: 3,
            label: 'Aesir',
            count: Math.floor(Math.random() * INITIAL_COUNT)
        },
        {
            id: 4,
            label: 'Norn',
            count: Math.floor(Math.random() * INITIAL_COUNT)
        }
    ]
};