/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-10 08:30:49
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function transform(code, options, callback) {
  console.log(1)
}
transform()
`;

transform(code, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration(path) {
          path.context.foo = 'bar'
        },
        Identifier(path,) {
          console.log(`"${path.node.name}",--------`, path.context.foo);
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
