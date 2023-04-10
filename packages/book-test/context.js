/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-10 15:15:14
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
        Program(path, state) {
          path.context
        },
        Identifier(path, state) {
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
