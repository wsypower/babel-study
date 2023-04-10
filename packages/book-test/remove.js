/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-10 16:57:55
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
const a = 1
function test(x){
  console.log(x)
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        Identifier(path, state) {
          if (path.node.name === 'a') {
            path.parentPath.remove()
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
