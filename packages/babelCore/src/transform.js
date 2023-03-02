/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-09 15:42:16
 * @LastEditTime: 2023-02-22 16:48:43
 * @LastEditors: wsy
 */
import babel from '@babel/core'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const filePath = require.resolve('./origin.js')

const code = readFileSync(filePath, 'utf-8')

const res = babel.loadPartialConfig({
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "3.22",
        "debug": true
      }
    ],
  ],
})

// const res = babel.loadOptions({
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         "useBuiltIns": "usage",
//         "corejs": "3.22",
//         "debug": true
//       }
//     ],
//   ],
// })

console.log(res)

// babel.parse(code,
//   {
//     presets: [
//       [
//         "@babel/preset-env",
//         {
//           "useBuiltIns": "usage",
//           "corejs": "3.22",
//           "debug": true
//         }
//       ],
//     ],
//   },
//   function (err, result) {
//     console.log('result------------->',result)
//   }
// );
