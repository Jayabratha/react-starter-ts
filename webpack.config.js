module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    mode: 'production',
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.js$/, loader: "source-map-loader", enforce: "pre" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}