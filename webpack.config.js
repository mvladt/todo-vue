import { VueLoaderPlugin } from "vue-loader";
import webpack from "webpack";
import dotenv from "dotenv";

dotenv.config();

export default {
  entry: "./src/main.js",
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
  ],
};
