const trainingDataRepositories = ['https://github.com/fancy-flashcard/wirtschaftsinformatik']

const checkForNewDataEachXSeconds = 1 // shall be much higher after development

setInterval(() => {
    for (const repo of trainingDataRepositories) {
        console.log(`training the chatbot with training data from: ${repo}`)
        // tbd

        
    }
}, checkForNewDataEachXSeconds * 1000)