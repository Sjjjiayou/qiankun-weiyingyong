// webpack.dev.ts
import path from "path";
import webpack from "webpack";
import { merge } from "webpack-merge"; // 引入webpack-merge功能模块
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
import Common from "./common"; // 引入webpack.common.ts

module.exports = merge(Common, {
  // 将webpack.common.ts合并到当前文件
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    port: 7101,
    open: true,
    historyApiFallback: true,
    liveReload: false,
    client: {
      overlay: false,
      logging: "none",
    },
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      include: /src/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
  ],
});
