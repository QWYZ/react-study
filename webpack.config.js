const path = require("path");  //node环境当前路径
const HtmlWebpackPlugin = require("html-webpack-plugin");  //模板文件插件，能够自动将打包的css和js加入到模板文件中

module.exports = {
    entry: {
        app: "./src/index.js" //找到咱们刚才在src下面的入口文件
    },
    output: {
        path: path.resolve(__dirname, "dist"), //打包文件输出的地址
        clean: true //webpack5新增的，每次打包前删除旧的dist包文件
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/, //处理图片文件打包
                type: "asset", //webpack5新增的处理静态资源的loader，替换之前的url-loder、file-loader,具体的可以官方文档
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024 //最大100kb的文件会被转成base64，大于100kb的文件会转成图片文件
                    }
                },
                generator: {
                    filename: "static/images/[name]_[contenthash:8][ext]" //最终图片文件输出的路径
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", //找到咱们刚才创建的模板文件
            minify: { //压缩html
                collapseWhitespace: true, //移除空格
                removeComments: true // 移除注释
            }
        })
    ]
}
