const readline = require('readline');
const OpenAI = require('openai');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your OpenAI API key: ', (apiKey) => {
    const openai = new OpenAI({
        apiKey: apiKey,
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
                content: 'You are a helpful general knowledge expert.'
            },
            {
                role: 'user',
                content: 'Who invented the television?'
            }
        ];

        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: messages
        });

        console.log(response.choices[0].message.content);
    }

    getResponse();
    rl.close();
});