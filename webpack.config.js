import { VueLoaderPlugin } from "vue-loader";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import CopyPlugin from "copy-webpack-plugin";

dotenv.config();

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(dirname, "docs"),
    publicPath: "/todo-vue/",
  },
  devServer: {
    port: 3001,
    static: {
      publicPath: "/todo-vue/",
    },
    proxy: {
      "/": `http://localhost:${3001}/${process.env.BASE_URL}/`,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.EnvironmentPlugin({
      API_BASE_URL: process.env.API_BASE_URL,
      BASE_URL: process.env.BASE_URL,
      VAPID_PUBLIC_KEY: process.env.VAPID_PUBLIC_KEY,
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(dirname, "public", "index.html"),
      favicon: path.join(dirname, "assets", "icon.svg"),
    }),

    // Копирует файлы в папку сборки / дев-сервер
    new CopyPlugin({
      patterns: [
        path.join(dirname, "public", "service-worker.js"),
        path.join(dirname, "manifest.json"),
        { from: path.join(dirname, "assets", "icons"), to: "icons" },
      ],
    }),
  ],
};
