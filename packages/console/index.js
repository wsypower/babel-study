/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-16 14:40:13
 * @LastEditTime: 2022-12-16 16:25:35
 * @LastEditors: wsy
 */
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default
const t = require('@babel/types');

const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, 'test.js'), 'utf-8');

const ast = parser.parse(file, {
  sourceType: 'unambiguous',
  plugins: ['jsx']
});

const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`);

traverse(ast, {
  CallExpression(path, state) {
    const { node } = path;
    const { callee } = node;
    const code = generate(callee).code;
    if (targetCalleeName.includes(code)) {
      node.arguments.unshift(t.stringLiteral(new Date().toLocaleString()))
    }
  }
});

const { code, map } = generate(ast);
fs.writeFileSync(path.join(__dirname, 'test2.js'), code);
