/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-13 17:17:13
 * @LastEditTime: 2023-04-13 18:49:46
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function foo() {
  const a = 1;
  console.log(a)
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        CallExpression(path, state) {
          const bindings = path.scope.bindings

          Object.keys(bindings).forEach(key => {
            bindings[key].setValue(123)
          })
          console.log(bindings)
          // bindings.setValue(222)
          path.stop();
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

