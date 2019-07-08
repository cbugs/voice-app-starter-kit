'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const {App} = require('jovo-framework');
const {Alexa} = require('jovo-platform-alexa');
const {GoogleAssistant} = require('jovo-platform-googleassistant');
const {JovoDebugger} = require('jovo-plugin-debugger');
const {FileDb} = require('jovo-db-filedb');


const app = new App();
const requestPromise = require('request-promise-native');

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        this.toIntent('WelcomeIntent');
    },

    async WelcomeIntent() {
        const quote = await getInvocationResponse();
        this.ask(quote);
    },
    
    MyNameIsIntent() {
        this.tell('Hey ' + this.$inputs.name.value + ', nice to meet you!');
    },
});


async function getInvocationResponse() {
    const options = {
        uri: 'http://localhost:1337/invocations',
        json: true // Automatically parses the JSON string in the response
    };
    const data = await requestPromise(options);
    const quote = data[0].Response;

    return quote;
}



module.exports.app = app;
