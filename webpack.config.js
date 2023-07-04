const path = require('path');

const stylesHandler = 'style-loader';

const config = {
    entry: './vendors/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [],
    mode: 'production',
    optimization: {
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.(svg|woff|woff2|png|jpg)$/i,
                type: 'asset',
            },
        ],
    },
};

module.exports = () => {
    return config;
};
