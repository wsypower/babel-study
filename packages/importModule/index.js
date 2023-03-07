/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-02 15:37:34
 * @LastEditTime: 2023-03-06 16:36:56
 * @LastEditors: wsy
 */

const { transformFromAstSync } = require('@babel/core');
const parser = require('@babel/parser');
const test = require('./src/test');
const fs = require('node:fs');
const path = require('node:path');

const sourceCode = fs.readFileSync(path.join(__dirname, './src/sourceCode.js'), {
  encoding: 'utf-8'
});

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous'
});

const { code } = transformFromAstSync(ast, sourceCode, {
  plugins: [
    [
      test,
      {
        trackerPath: 'tracker'
      }
    ]
  ]
});

console.log(code);

