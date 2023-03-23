/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-29 14:35:26
 * @LastEditTime: 2023-03-23 15:43:25
 * @LastEditors: wsy
 */
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const babel = require('@babel/core');
// console.log('hello guangguang');

const source = `
function add(a, b) {
  return a + b;
}
`;



// const ast = parser.parse(source);

babel.transform(source, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration: (path) => {
          console.log(path.hub); // 打印 hub 信息
          console.log(path.hub); // 打印 hub 信息
          console.log(path.hub.getCode())
        },
      },
    },
  ],
});

// console.log(code);
