/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-13 14:50:19
 * @LastEditTime: 2023-04-13 16:36:03
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function foo() {
  const a = 1
  function test(){
    const c = 2;
  }
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration(path, state) {
          const name = path.node.id.name
          if (name === 'foo') {
            const { scope } = path
            scope.traverse(path.node, {
              VariableDeclarator(path) {
                console.log(path.node.id.name);
              },
            }, this);
          }
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
