/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-23 16:38:19
 * @LastEditTime: 2023-03-28 16:32:48
 * @LastEditors: wsy
 */
/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-23 16:38:19
 * @LastEditTime: 2023-03-27 16:08:26
 * @LastEditors: wsy
 */
const babel = require('@babel/core')
const t = require('@babel/types')
const path = require('node:path')


const code = `
function foo() {
  let x = 1;
  let a = 2.2;
  function bar(x,y) {
    console.log(x);
  }
  bar();
}
foo();
`
const error = []
let index = 0
babel.transform(code, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration(path) {
          const functionName = path.node.id.name
          const params = path.get('body')
          params.traverse({
            Identifier(path, state) {
              const functionParent = path.getFunctionParent()
              if (functionParent.get('id').node.name === 'bar') {
                functionName.skip()
                console.log('bar------')
              }
            }
          })
        },
      },
    }
  ]
}, (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log(result.code)
  }
})
