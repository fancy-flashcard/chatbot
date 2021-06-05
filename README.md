# Chatbot


## How it works for Developers

1. start the server 
```sh
cd backend
npm i
node fancy-nlp-server.js 3010
```
3. Send the training request see _train.REST file and copy the client ID from the response

4. Replace the client ID whereever you request a chatbot response

5. Create a folder named operational-data and create a file named messages.json
```sh
mkdir operational-data
cd operational-data
echo "[]" > messages.json
````

6. open http://localhost:3010 and start chatting with your bot
