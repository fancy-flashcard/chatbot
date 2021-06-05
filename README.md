# Chatbot

You can access the [FFC Chatbot](https://fancy-flashcard.github.io/chatbot/) and train it with your educational [FFC Decks](https://github.com/fancy-flashcard/wirtschaftsinformatik).

## How it works for Developers

1. start the server 
```sh
cd backend
npm i
node fancy-nlp-server.js 3010
```
3. Send the training request see _train.REST file 

4. Create a folder named operational-data and create a file named messages.json
```sh
mkdir operational-data
cd operational-data
echo "[]" > messages.json
```

5. open http://localhost:3010 or https://fancy-flashcard.github.io/chatbot/ and start chatting with your bot
