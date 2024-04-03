# Bootstrapで見た目をリッチに

## 1. CSSフレームワークとは

JSやプログラミング言語だけでなく、Webにおける装飾を記述するCSSにも「フレームワーク」が存在します。CSSフレームワークを使うと簡単に見栄えを良くしたり、複雑なユーザーインターフェイスが一発で作成できたりというメリットがあります。

[2020年版：おすすめの人気CSSフレームワークと特徴の総まとめ | Web Design Trends](https://webdesign-trends.net/entry/11473)

さまざまなCSSフレームワークが存在しますが、その中でもとくに人気なのが「Bootstrap」です。  
ボタンやアラートといった特徴的なUIを持っているので、一目見れば「これどこかで見たことあるデザインだな」とわかるかもしれません。

## 2. Bootstrapについて

[Bootstrap · The most popular HTML, CSS, and JS library in the world.](https://getbootstrap.com)

Webデザイン界隈では言わずと知れた超有名CSSフレームワークです。  
開発元はみなさんも使っているTwitter社です。  

## 3. CodePenでBootstrapを利用する設定

Bootstrapを読み込むためのURLを追加します。  
ただし、Bootstrapは **CSS** ですので、CSSのタブからCDNを指定します。

![gyazoImg1.png](https://i.gyazo.com/f277a774b3f8a27197acd81510f45f5e.png)

Bootstrapが追加できたら、そのままJSタブのほうに移り、  
検索を同じように利用して「jQuery」と「twitter-bootstrap」を追加してください。  

<a href="https://gyazo.com/7287578c0f7e50ad193666cf2b862f48"><img src="https://i.gyazo.com/7287578c0f7e50ad193666cf2b862f48.png" alt="Image from Gyazo" width="778"/></a>

ここまで設定できれば、下記ペンのようにBootstrapのコンポーネントを利用できるようになっています。。

- [Bootstrap sample](https://codepen.io/tmitsuoka0423/pen/NWvQQRb)

## 4. Bootstrapのコンポーネント紹介

- [Containers (コンテナ) · Bootstrap v5.0](https://getbootstrap.jp/docs/5.0/layout/containers/)
  - 画面幅に合わせて余白をいい感じに設定してくれる。
- [Grid system (グリッドシステム) · Bootstrap v5.0](https://getbootstrap.jp/docs/5.0/layout/grid/)
  - 画面を12列に分割して、どこに要素を配置するか決められる。
  - レスポンシブ対応
- [Alerts (アラート) · Bootstrap v5.0](https://getbootstrap.jp/docs/5.0/components/alerts/)
  - テキストを目立たせたいときに使う
- [Buttons (ボタン) · Bootstrap v5.0](https://getbootstrap.jp/docs/5.0/components/buttons/)
  - カッコいいボタン
- [Cards (カード) · Bootstrap v5.0](https://getbootstrap.jp/docs/5.0/components/card/)
  - 画像・テキスト・ボタンが1セットにまとめられる
- などなど

詳しい使い方は、公式ドキュメントやYouTubeの解説動画を参照してください。

- [はじめに · Bootstrap v5.0](https://getbootstrap.jp/docs/5.0/getting-started/introduction/)
- [Bootstrap 4入門 #01：コンテナとスペーシング - YouTube](https://www.youtube.com/watch?v=FtkRIuWTf0E)

## 目次へ

一度[トップページ](README.md)に戻って次の資料へ
