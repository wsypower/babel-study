/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-13 14:50:19
 * @LastEditTime: 2023-04-13 15:03:18
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function foo() {
  const x = 1;
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration(path, state) {
          const scopePath = path.scope.path;
          const blockPath = scopePath.scope.block;
          console.log(scopePath)
          // console.log(blockPath)
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
