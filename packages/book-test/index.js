/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-23 16:38:19
 * @LastEditTime: 2023-03-23 19:53:47
 * @LastEditors: wsy
 */
const babel = require('@babel/core')
const t = require('@babel/types')

const code = `
function square(n) {
  return n * n;
}
`
let index = 0

babel.transform(code, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration(path) {
          const param = path.node.params[0];
          const paramName = param.name;
          path.traverse({
            Identifier(path, state) {
              if (path.isIdentifier({ name: paramName })) {
                // path.buildCodeFrameError('paramName is not allowed');
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
