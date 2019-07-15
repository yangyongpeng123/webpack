const path = require('path');
const webpack=require('webpack');
const htmlwebpackplugin=require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(png|jpg|gif)$/,use:'url-loader?limit=15735&name=[hash:8]-[name].[ext]'},
            // { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ },
            {test:/\.vue$/,use:'vue-load'}
        ]
    },
    devServer:{
        open:true,
        port:3000,
        contentBase:'src',
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlwebpackplugin({
            template:path.join(__dirname,'./hello.html'),
            filename:'index.html'
        }),
    ]
};
