const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//APIKEY:d97a58b356ac61526108429eaf7c2788abf71fe152f592b72fb29292cd01b86b
// Set your app credentials
const credentials = {
    apiKey: 'd97a58b356ac61526108429eaf7c2788abf71fe152f592b72fb29292cd01b86b',
    username: 'sandbox',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage() {
    app.post('/users', (req, res, next) => {
        const {name, phone, comment} = req.body;
        res.status(201).json(body);
        console.log(body);

        const options = {
            // Set the numbers you want to send to in international format
            to: [phone],
            // Set your message
            message: comment,
            // Set your shortCode or senderId
            from: name
        }
        sms.send(options)
            .then(res.status(200).json(options))
            .catch(console.log); 

      });

    // That’s it, hit send and we’ll take care of the rest
    // sms.send(options)
    //     .then(console.log)
    //     .catch(console.log);
    
          
}


sendMessage();


app.listen(8000, () => {
    console.log('server running');
})

