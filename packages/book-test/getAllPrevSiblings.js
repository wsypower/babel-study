/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-12 16:06:35
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function foo() {
  const a = 3
  const b = 1
  const c = 1
  const e = 1
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        VariableDeclaration(path, state) {
          path.set('key', 2)
        }
      }
    }
  ]
},
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('\n\r')
      console.log('------- code -------')
      console.log('\n\r')
      console.log(result.code);
    }
  })
