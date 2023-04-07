/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-07 17:15:04
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
import a from 'bar';
console.log(a)
`;


transform(code, {
  plugins: [
    {
      visitor: {
        Program(path) {
          path.visit()
          console.log('1----------->')
          path.skip()
          // path.traverse({
          //   Identifier(path) {
          //     console.log(path.getSource())
          //   }
          // })
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
