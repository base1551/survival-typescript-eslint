module.exports = {
    root: true,//eslintコマンドを実行したディレクトリを起点に、ディレクトリをさかのぼって設定ファイルを探す
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",//JavaScriptコードがスクリプトorモジュールどちらのモードで書かれるかを指定するオプション
    },
    //以下、規約制定
    rules: {
        "no-console": "error",//console.logを残していたらエラー
        camelcase: ["error", { properties: "never" }],
    },
};