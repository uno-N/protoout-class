'use strict';

const express = require('express');
const line = require('@line/bot-sdk');
const PORT = process.env.PORT || 3000;

const config = {
    channelSecret: '81763fa68bd0624b01d27de2647cb9fe',
    channelAccessToken: 'XAmJacp9CIqBRWRNMpfsNncrryoYaWxmaDnJqWlwNVMTYtx0KPY1NqAUKmDmJJDmFxNDrK3/7p5fDtvBSJj/q+h2E0eYwZWpJY2SVV/xXDH74DI6KKtKxK+dnIkkTz1iazSgyeBphf2Y8wATkweYowdB04t89/1O/w1cDnyilFU='
};

const app = express();

app.get('/', (req, res) => res.send('3000つながった')); //ブラウザ確認用(無くても問題ない)
app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events);

    //ここのif分はdeveloper consoleの"接続確認"用なので削除して問題ないです。
    if(req.body.events[0].replyToken === '00000000000000000000000000000000' && req.body.events[1].replyToken === 'ffffffffffffffffffffffffffffffff'){
        res.send('Hello LINE BOT!(POST)');
        console.log('疎通確認用');
        return; 
    }

    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

const client = new line.Client(config);

async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text //実際に返信の言葉を入れる箇所
  });
}

app.listen(PORT);
console.log(`Server running at ${PORT}`);