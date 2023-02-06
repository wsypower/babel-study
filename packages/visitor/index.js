/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-03 14:31:12
 * @LastEditTime: 2023-02-06 16:00:44
 * @LastEditors: wsy
 */
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

// console.log('hello guangguang');

const source = `
    (async function() {
      console.log('hello guangguang');
    })();
`;

const ast = parser.parse(source);

traverse(ast, {
  StringLiteral(path) {
    console.log(path.scope.bindings);
  }
});

const { code, map } = generate(ast, {
  sourceMaps: true
});

// console.log(code);
