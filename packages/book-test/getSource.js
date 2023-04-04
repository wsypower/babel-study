/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-04 20:56:48
 * @LastEditTime: 2023-04-04 20:56:53
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
        Identifier(path) {
          console.log(path.getSource())
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
