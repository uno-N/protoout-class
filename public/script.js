let lockedYValue = null;

function permission() {
    const accY = document.getElementById('accY');

    if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
        console.log('iOS (13+) Safari');

        DeviceMotionEvent.requestPermission().then(response => {
            if (response === 'granted') {
                window.addEventListener('deviceorientation', handleOrientationEvent);
            } else {
                alert('パーミッションエラー: 加速度取得不可');
            }
        }).catch(console.error);
    } else {
        window.addEventListener('deviceorientation', handleOrientationEvent);
    }
}

function handleOrientationEvent(e) {
    const accY = document.getElementById('accY');
    if (lockedYValue === null) {
        accY.textContent = e.beta.toFixed(2);
        console.log('Current accY value:', accY.textContent);
    }
}

function lockY() {
    const accY = document.getElementById('accY');
    lockedYValue = accY.textContent;
    alert(`角度の値が確定されました: ${lockedYValue}`);
    sendToServer();
}

function sendToServer() {
    const accY = lockedYValue !== null ? lockedYValue : document.getElementById('accY').textContent;
    fetch('https://improved-space-goldfish-69g564gr6xr9frr4x-3000.app.github.dev/save-angle', {  // ここをCodespaceの公開URLに変更
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ angle: accY })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('サーバーに送信されました');
        } else {
            alert('送信に失敗しました: ' + data.message);
        }
    })
    .catch(error => {
        console.error('エラー:', error);
        alert('送信中にエラーが発生しました。コンソールを確認してください。');
    });
}