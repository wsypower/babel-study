/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-20 16:45:04
 * @LastEditTime: 2023-04-20 20:52:11
 * @LastEditors: wsy
 */
const { transformSync } = require('@babel/core');
const t = require('@babel/types');

const binaryExpressionToFunctionCall = (path) => {
  const { node } = path;
  const { left, operator, right } = node;
  path.skip();
  const callee = t.identifier('myFunction');
  const argument1 = left;
  const argument2 = right;

  const callExpression = t.callExpression(
    callee,
    [t.argumentPlaceholder(), argument1, t.stringLiteral(operator), argument2]
  );

  path.replaceWith(callExpression);
};

const code = `
const result = 1 + 2;
const a = 2
const c = 3
`;

const result = transformSync(code, {
  plugins: [
    {
      visitor: {
        BinaryExpression(path) {
          console.log(path.hub.addHelper('n'))
        }
      },
    },
  ],
});

console.log(result.code);
