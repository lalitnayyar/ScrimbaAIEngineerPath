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

console.log(response)

const obj = {role: "assistant", content: "The invention of television was the work of many individuals in the late 19th century and early 20th century. However, Scottish engineer John Logie Baird is often associated with creating the first mechanical television. He demonstrated his working device in January 1926 in London. Concurrently in the United States, Philo Farnsworth is credited with inventing the first fully electronic television in the late 1920s."}


// {id: "chatcmpl-8Go69bvmGWV8JHvZ9uxYXSUAimEb8", object: "chat.completion", created: 1699016517, model: "gpt-4-0613", choices: [{index: 0, message: {role: "assistant", content: "The invention of television was the work of many individuals in the late 19th century and early 20th century. However, Scottish engineer John Logie Baird is often associated with creating the first mechanical television. He demonstrated his working device in January 1926 in London. Concurrently in the United States, Philo Farnsworth is credited with inventing the first fully electronic television in the late 1920s."}, finish_reason: "stop"}], usage: {prompt_tokens: 24, completion_tokens: 86, total_tokens: 110}}