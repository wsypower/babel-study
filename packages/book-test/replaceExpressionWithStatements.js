/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-30 16:55:50
 * @LastEditTime: 2023-03-30 20:57:16
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
const x = 1
`;

transform(code, {
  plugins: [
    {
      visitor: {
        NumericLiteral(path) {
          path.replaceWithMultiple([t.numericLiteral(1), t.numericLiteral(1)])
          path.skip()
        }
      }
    }
  ]
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result.code);
  }
});
