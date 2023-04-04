/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-04 15:41:43
 * @LastEditTime: 2023-04-04 17:02:48
 * @LastEditors: wsy
 */
const { transform, types } = require('@babel/core')
const code = `
function test(){
  const a = 1
  return a
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration(path) {
        },
        Identifier(path) {
          console.log(path.isNodeType('Identifier'))
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
