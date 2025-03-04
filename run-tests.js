require('dotenv').config();
const newman = require('newman');

newman.run({
    collection: require('./TrelloAPICollection.json'),
    environment: require('./postman.json'),
    reporters: 'cli',
    envVar: [
        { key: 'TRELLO_KEY', value: process.env.TRELLO_KEY },
        { key: 'TRELLO_TOKEN', value: process.env.TRELLO_TOKEN }
    ]
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});