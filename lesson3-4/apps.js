for (let i = 0; i < 2; i++) {
    // 変数resultを用意し、文字列(String)で初期化する。
    // ※後で値を変える(再代入する)場合はletを使用する。(Let x, y be 2, 3 : (数学で)x,yをそれぞれ2,3としてみよう という文のletという説が有力)
    let result = '大吉';
  
    // 変数randomを用意し、0～1の乱数を取得・代入する。
    // 後の処理で値を変更しないので、`const`を使用する。
    const random = Math.random();
  
    if (random < 0.3) {
      result = '大吉'; // 変数に大吉を代入する。
    } else if (random < 0.9) {
      result = '中吉';
    } else {
      result = '凶';
    }
  
    console.log('今日の運勢は...');
    console.log(result); // 変数の中身をコンソールに出力(表示)する。
    console.log('です');
  }
