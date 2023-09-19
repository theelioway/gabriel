import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import buble from "rollup-plugin-buble"
import image from "@rollup/plugin-image"
import json from "@rollup/plugin-json"
import xml from "rollup-plugin-xml"
import pkg from "./package.json"

export default [
  {
    input: "src/main.js",
    output: [
      {
        name: "FuntyperBase",
        file: pkg.exports.require,
        format: "umd",
        globals: { phaser: "Phaser", "date-fns": "dateFns" },
      },
      {
        file: pkg.exports.import,
        format: "es",
      },
    ],
    external: ["date-fns", "lodash-es", "phaser"],
    plugins: [
      resolve(),
      image(),
      json(),
      xml({ format: "compact" }), // "compact"|"non-compact"|"XMLDocument"
      commonjs(),
      buble({ exclude: ["node_modules/**"], objectAssign: "Object.assign" }),
    ],
  },
  {
    input: "test/suites/phaser3Suite.js",
    output: [
      {
        name: "phaser3Suite",
        file: "rollup/umd/phaser3-test-suite.umd.js",
        format: "umd",
        globals: { phaser: "Phaser" },
      },
      {
        file: "rollup/esm/phaser3-test-suite.esm.js",
        format: "es",
      },
    ],
    external: ["date-fns", "lodash-es", "phaser"],
    plugins: [
      resolve(),
      image(),
      json(),
      xml({ format: "compact" }), // "XMLDocument"|"non-compact"|"XMLDocument"
      commonjs(),
      buble({ exclude: ["node_modules/**"], objectAssign: "Object.assign" }),
    ],
  },
]
