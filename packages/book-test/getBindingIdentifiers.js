/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-12 19:00:53
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
  }
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration(path, state) {
          console.log(path.getOuterBindingIdentifiers())
          path.stop()
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
