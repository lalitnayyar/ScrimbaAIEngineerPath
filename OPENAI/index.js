const fs = require('fs');
const OpenAI = require('openai');

fs.readFile('api.key', 'utf8', (err, apiKey) => {
    if (err) {
        console.error('Error reading API key from file:', err);
        return;
    }

    const openai = new OpenAI({
        apiKey: apiKey.trim(),
        dangerouslyAllowBrowser: true
    });

/**
 * Challenge:
 * 1. Ask OpenAI to explain something complicated 
 *    to you. For example Quantum Computing.
 * 
 * Prompt Engineering Stretch Goals
 * - See if you can control the level of complexity of 
 *   the generated content, for example is this for 
 *   10-year-olds or college kids?
 * - See if you can control the length of the output.
 * **/ 

    async function getResponse() {
        const messages = [
            {
                role: 'system',
        content: 'You are a helpful assistant that explains things in language a 10-year-old can understand. Your answers are always less than 100 words.'
            },
            {
                role: 'user',
                content: 'What is Quantum Computing?'
            }
        ];

        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: messages
        });

        console.log(response.choices[0].message.content);
    }

    getResponse();
});