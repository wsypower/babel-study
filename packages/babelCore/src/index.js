/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-08 14:38:23
 * @LastEditTime: 2023-02-08 15:19:03
 * @LastEditors: wsy
 */
import core from '@babel/core'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const code = require.resolve('./origin.js')

const ast = core.transformFileSync(code, {
  plugins: [],
  presets: ["@babel/preset-env"]
});

console.log(ast.code)
