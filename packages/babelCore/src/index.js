/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-08 14:38:23
 * @LastEditTime: 2023-02-09 15:10:45
 * @LastEditors: wsy
 */
import core from '@babel/core'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const code = require.resolve('./origin.js')

const ast = core.transformFileSync(code, {
  // plugins: [
  //   [
  //     "@babel/plugin-transform-runtime", {
  //       "corejs": "3",
  //     }
  //   ],
  // ],
  presets: [
    ["@babel/preset-env", {
      // "browserslistEnv": "dd",
      "useBuiltIns": "usage",
      "corejs": "3.22",
      "debug": true
    }]
  ]
});

console.log(ast.code)
