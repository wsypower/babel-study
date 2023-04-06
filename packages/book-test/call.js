/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:29:30
 * @LastEditTime: 2023-04-06 14:45:28
 * @LastEditors: wsy
 */
const { transform, types } = require('@babel/core')
const code = `
function foo() {
  let x = '1';
  let y = 2.2;
  function bar(a,b) {
    console.log(z);
  }
  function zar(a,b) {
    console.log(z);
  }
  bar();
  
}
foo();
`;


transform(code, {
  plugins: [
    {
      visitor: {
        Identifier(path) {
          console.log('11111')
          console.log(path.call('name'))
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
