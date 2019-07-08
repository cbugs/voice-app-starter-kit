'use strict';
const { App, Util } = require('jovo-framework');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { Alexa } = require('jovo-platform-alexa');

jest.setTimeout(500);

for (const p of [new Alexa(), new GoogleAssistant()]) {
    const testSuite = p.makeTestSuite();

    describe(`PLATFORM: ${p.constructor.name} INTENTS`, () => {

        // test('START TONE', async () => {
        //     const conversation = testSuite.conversation();

        //     const launchRequest = await testSuite.requestBuilder.launch();
        //     const responseLaunchRequest = await conversation.send(launchRequest);
        //     expect(
        //         responseLaunchRequest.isTell('Start Tone')
        //     ).toBe(true);

        // });

        test('WELCOME TEXT', async () => {
            const conversation = testSuite.conversation();
            const launchRequest = await testSuite.requestBuilder.launch();
            const responseLaunchRequest = await conversation.send(launchRequest);

            expect(
                responseLaunchRequest.isAsk('Welcome to the Mobil 1 Minute, your weekly motorsports news Roundup.')
            ).toBe(true);
        });
    });
}