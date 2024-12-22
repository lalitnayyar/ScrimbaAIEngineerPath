import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role: 'system',
        content: 'You are a helpful general knowledge expert.'
    },
    {
        role: 'user',
        content: 'Who invented the television?'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages
})

console.log(response.choices[0].message.content)