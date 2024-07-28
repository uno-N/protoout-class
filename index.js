const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const LINE_ACCESS_TOKEN = 'XAmJacp9CIqBRWRNMpfsNncrryoYaWxmaDnJqWlwNVMTYtx0KPY1NqAUKmDmJJDmFxNDrK3/7p5fDtvBSJj/q+h2E0eYwZWpJY2SVV/xXDH74DI6KKtKxK+dnIkkTz1iazSgyeBphf2Y8wATkweYowdB04t89/1O/w1cDnyilFU=';
const TARGET_USER_ID = 'U907777f773af1f25c09554dbfe29e89c';

app.use(cors());  // CORSを有効化
app.use(bodyParser.json());

app.post('/save-angle', (req, res) => {
    console.log('受信したリクエストボディ:', req.body);
    const { angle } = req.body;
    console.log('抽出された角度:', angle);
    let message;

    if (angle === undefined) {
        return res.status(400).json({ success: false, message: '角度データが必要です' });
    } else if(angle < 50){
        message = "もう少し頑張りましょう";

    } else {
        message = "すごい！"
    }

    //const message = `加速度センサーのデータ\n角度: ${angle} 度`;

    console.log('送信するメッセージ:', message);

    axios.post('https://api.line.me/v2/bot/message/push', {
        to: TARGET_USER_ID,
        messages: [
            {
                type: 'text',
                text: message
            }
        ]
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINE_ACCESS_TOKEN}`
        }
    })
    .then(response => {
        console.log('LINE API レスポンス:', response.status, response.statusText);
        if (response.status === 200) {
            res.json({ success: true });
        } else {
            res.status(500).json({ success: false, message: 'LINEメッセージ送信に失敗しました' });
        }
    })
    .catch(error => {
        console.error('エラー:', error);
        if (error.response) {
            console.error('エラーレスポンス:', error.response.status, error.response.data);
        }
        res.status(500).json({ 
            success: false, 
            message: 'サーバーエラーが発生しました', 
            error: error.message,
            details: error.response ? error.response.data : null
        });
    });
});
app.use(express.static('public'));//publicの中のファイルを公開する
app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました`);
});