'use strict';

const line = require('@line/bot-sdk');

const config = {
    channelSecret: '81763fa68bd0624b01d27de2647cb9fe',
    channelAccessToken: 'XAmJacp9CIqBRWRNMpfsNncrryoYaWxmaDnJqWlwNVMTYtx0KPY1NqAUKmDmJJDmFxNDrK3/7p5fDtvBSJj/q+h2E0eYwZWpJY2SVV/xXDH74DI6KKtKxK+dnIkkTz1iazSgyeBphf2Y8wATkweYowdB04t89/1O/w1cDnyilFU='
};
const client = new line.Client(config);


const main = async () => {

    const messages = [{
        type: 'text',
        text: 'いっせい送信です！'
    }];

    try {
        const res = await client.broadcast(messages);
        console.log(res);        
    } catch (error) {
        console.log(`エラー: ${error.statusMessage}`);
        console.log(error.originalError.response.data);
    }
}

main();