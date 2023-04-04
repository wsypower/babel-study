/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-03 18:04:01
 * @LastEditTime: 2023-04-03 19:47:10
 * @LastEditors: wsy
 */
const { transform, types } = require('@babel/core')
const code = `
const b = 42;
`;


transform(code, {
  plugins: [
    {
      visitor: {
        Identifier(path) {
          console.log(path.isStatic()) // true
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
