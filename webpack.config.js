import { VueLoaderPlugin } from "vue-loader";

export default {
  entry: "./src/main.js",
  devServer: {
    port: 9000,
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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
};
