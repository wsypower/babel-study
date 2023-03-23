/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-23 16:38:19
 * @LastEditTime: 2023-03-23 16:48:28
 * @LastEditors: wsy
 */
const babel = require('@babel/core')

const code = `
function square(n) {
  return n * n;
}
`

babel.transform(code, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration(path) {
          const param = path.node.params[0];
          const paramName = param.name;
          path.traverse({
            Identifier(path, state) {
              if (path.node.name === state.paramName) {
                path.node.name = 'x';
              }
            }
          }, { paramName })
        }
      }
    }
  ]
}, (err, result) => {
  console.log(result.code)
})
