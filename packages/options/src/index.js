/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-29 14:35:26
 * @LastEditTime: 2022-11-29 15:12:55
 * @LastEditors: wsy
 */
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;


const source = `
    (async function() {
        console.log('hello guangguang');
    })();
`;

const ast = parser.parse(source);

traverse(ast, {
  StringLiteral(path) {
    path.node.value = path.node.value.replace('guangguang', 'dongdong')
  }
});

const { code, map } = generate(ast, {
  sourceMaps: true
});

console.log(code);
