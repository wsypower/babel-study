/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-29 14:35:26
 * @LastEditTime: 2022-12-16 14:55:42
 * @LastEditors: wsy
 */
// const parser = require('@babel/parser');
// const traverse = require('@babel/traverse').default;
// const generate = require('@babel/generator').default;
// const template = require('@babel/template').default;
// const t = require('@babel/types');
// const { codeFrameColumns } = require("@babel/code-frame");
const { transform } = require("@babel/core");

const code = 'const x = 1;';
const transformed = transform(code, {
  presets: ['@babel/preset-env'],
  plugins: ['jsx']
});

console.log(transformed.code);
