/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-04 20:17:47
 * @LastEditTime: 2023-04-04 20:19:11
 * @LastEditors: wsy
 */
const { transformSync } = require('@babel/core');

const code = `
function foo() {
  const x = 1;
  const y = 2;
}
`;

const plugin = ({ types }) => ({
  visitor: {
    VariableDeclaration(path) {
      console.log(path.parent);
    },
  },
});

const result = transformSync(code, {
  plugins: [plugin],
});

console.log(result.code);
