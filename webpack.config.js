import { VueLoaderPlugin } from "vue-loader";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(dirname, "docs"),
  },
  devServer: {
    port: 9000,
    static: {
      directory: ".",
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
      BASE_URL: process.env.BASE_URL,
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(dirname, "index.html"),
    }),
  ],
};
