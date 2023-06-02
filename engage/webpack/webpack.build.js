import { merge } from "webpack-merge"
import common from "./webpack.common.js"
import path from "path"

export default merge(common, {
  entry: {
    app: "./src/main.js",
  },
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "bundle"),
  },
})
