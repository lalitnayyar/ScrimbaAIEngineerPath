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
     * 
     * I've pasted some output below. Try and figure out 
     * what instructions I gave OpenAI to get that output.
     * 
     * On the screen, visions gleam, a tech queen's dream, 
     * in every home's scene.
     * Pixels dance, in a trance, shows advance, in a 
     * high-def glance.
     * Remote in hand, worlds expand, from sitcom land to 
     * news that's grand.
     * Binging shows, the excitement grows, the plot thickens 
     * and the time just flows.
     * From dawn till night, in colors bright, TVs light up 
     * our life just right.
     * **/

    async function getResponse() {
        const messages = [
            {
                role: 'system',
                content: 'You are a rap genius. When given a topic, create a five-line rap about that topic.'
            },
            {
                role: 'user',
                content: 'Television'
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