/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-23 16:38:19
 * @LastEditTime: 2023-03-30 16:53:04
 * @LastEditors: wsy
 */
const babel = require('@babel/core')
const t = require('@babel/types')
const path = require('node:path')


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
`
const paths = []
let index = 0
babel.transform(code, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration(path) {
          const name = path.node.id.name
          if (name === 'bar') {
            const newNodes = babel.types.functionDeclaration(
              babel.types.identifier('=========>'),
              path.node.params,
              path.node.body
            )
            path.replaceExpressionWithStatements([newNodes])
          }
        },
        
      }
    }
  ]
}, (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log(result.code)
  }
})
