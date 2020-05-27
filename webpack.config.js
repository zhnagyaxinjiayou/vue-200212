const path = require("path");
//打包带着html文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 每次打包自动清理dist文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // 绝对路径
  //   entry: path.resolve(__dirname, "src/index.js"), //入口
  //1.入口:指示以哪个文件开始打包，以入口文件为起点，构造依赖关系图，将所有依赖的文件全部打包进来
  entry: "./src/index.js",
  //2.输出：output打包资源输出到哪里去
  output: {
    //   path对象
    path: path.resolve(__dirname, "dist"), //打包完成后的文件夹放在dist文件夹会自动创建好
    // 打包完成后在这个文件加下的名字叫什么
    filename: "main.js",
  },
  //3.配置各种loaderc：加载器，webpack工具本身只能打包js、json资源，其他资源打包不了，需要借助loader解析其它资源，webpack才能打包这些资源
  module: {
    rules: [
      //解析ES6语法，转为ES5语法
      {
        // 以js结尾的都会解析
        test: /\.js$/,
        // 除去些文件不解析
        exclude: /(node_modules|bower_components)/,
        // 用哪个loader
        use: {
          // 本身并不能解析ES6语法，它依赖的是["@babel/preset-env"]去解析的
          // babel/preset-env包含了ES6语法解析的插件,每个插件对应一个ES6语法
          // babel-loader它就是依靠这些插件去解析的
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // 打包css
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"], //使用loader的时候是有顺序的，从后往前
      },
      // 打包图片。会使用到file-loader
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader", //内部会使用到file-loader
            options: {
              limit: 8192 * 100, //如果图片小于这个值，会被base64编码为一个字符串，提高效率，减少请求
              name: "[hash:8].[ext]", //取打包后的图片名字，截取哈希值的前八位
            },
          },
        ],
      },
      //配置loader处理vue文件
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  //   是一个数组（带S的代表多个，是一个数组）
  // 4.插件：配置插件完成其它搞不定的问题。执行更加强大的任务
  plugins: [
    new HtmlWebpackPlugin({
      // 找配置的html模板
      template: "./src/public/index.html",
    }),
    // 清除dist中的无的无用文件
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(), //vue相关插件
    new CopyPlugin([
      //为了把public下除了index.html文件外的其余所有，给dist目录下拷贝一份
      {
        from: path.resolve(__dirname, "src/public"),
        to: path.resolve(__dirname, "dist"),
        ignore: ["index.html"],
      },
    ]),
  ],
  // 5.模式 开发模式，生产模式
  mode: "development",
  // 6.自动打包
  devServer: {
    // 服务启动的端口
    port: 9000,
    open: true, //是否自动打开浏览器
    quiet: true, //输出少量的提示信息
  },
  // 7.配置devtool定位错误位置
  devtool: "cheap-module-eval-source-map", //定位出错的原始代码行

  resolve: {
    extensions: [".js", ".json", ".vue"], //8.解决省略后缀名称问题
    alias: {
      //给路径取别名,以后导入vue的时候，默认是在找'vue/dist/vue.esm.js'
      // 'vue$':'vue/dist/vue.esm.js',
      "@": path.resolve(__dirname, "src"), //取别名，让@代替根路径下的src  '/src'
    },
  },
};
