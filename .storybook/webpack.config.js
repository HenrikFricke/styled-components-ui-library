const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new StyleLintPlugin({
            files: 'src/components/**/*.tsx'
        }),
    ],
}