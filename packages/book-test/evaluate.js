/*
 * @Author: wsy
 * @Date: 2023-04-03 14:46:51
 * @LastEditTime: 2023-04-03 15:10:23
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
const x = 1 + 2 * 3;
const y = (x > 5) && true;
`;


transform(code, {
  plugins: [
    {
      visitor: {
        VariableDeclarator(path) {
          const init = path.get('init')
          if (init.isExpression()) {
            console.log("isBinaryExpression", init.evaluate())
          }
        }
      }
    }
  ]
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('\n\r')
    console.log('------- code -------')
    console.log('\n\r')
    console.log(result.code);
  }
})

