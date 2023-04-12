/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-12 15:47:11
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
          if (path.key > 0) {
            console.log(path.key)
            console.log(path.node.declarations[0].id.name)
            console.log(path.getSibling(2).node.declarations[0].id.name)
            path.stop()
          }

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
