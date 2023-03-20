/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-20 15:08:04
 * @LastEditTime: 2023-03-20 15:30:36
 * @LastEditors: wsy
 */
const { transformFromAstSync } = require('@babel/core');
const  parser = require('@babel/parser');
const typeCheckerPlugin = require('./plugin/type-checker2');

const sourceCode = `
    let name: string = 111;
`;

const ast = parser.parse(sourceCode, {
    sourceType: 'unambiguous',
    plugins: ['typescript']
});

const { code } = transformFromAstSync(ast, sourceCode, {
    plugins: [[typeCheckerPlugin, {
        fix: true
    }]],
    comments: true
});

// console.log(code);

