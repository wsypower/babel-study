/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-13 14:50:19
 * @LastEditTime: 2023-04-13 15:10:02
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function foo() {
  function test(){
    const x = 1;
  }
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        VariableDeclarator(path, state) {
          console.log(path.scope.parentBlock)
          path.stop()
        },
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
