let webpack = require('webpack')

module.exports = {
    devtool:'eval-source-map',
    entry: {
        index:__dirname+'/src/index.js'
    },
    output: {
        filename:'bundle.js',
        path:__dirname+'/dist'
    },
    devServer: {
        contentBase:__dirname+'/dist',
        port:12306,
        inline:true,
        historyApiFallback:true,
    },
    module: {
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['react','env','stage-0']
                    }
                },
                exclude:/node_modules/
            },
        ]
    },
    plugins: [],
}