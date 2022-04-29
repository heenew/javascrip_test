const path = require("path");

module.exports = {
    mode: "production",  // production, devalopment, none
    entry: "./src/app.js", // 번들링 할 폴더
    output: {  // 번들링 결과의 위치와 파일명
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}