import { VueLoaderPlugin } from "vue-loader";

export default {
  entry: "./src/main.js",
  devServer: {
    static: {
      directory: ".",
    },
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      }
    ],
  },
};
