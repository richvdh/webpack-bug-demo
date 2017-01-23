module.exports = {
    entry: './main.js',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        chunkFilename: '[hash]/[name].js',
    },
};
