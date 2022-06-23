const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "public/scripts"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 9000
    }
}