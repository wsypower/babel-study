/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-03 18:04:01
 * @LastEditTime: 2023-04-04 15:35:23
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
          console.log(path.is('body'))
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
