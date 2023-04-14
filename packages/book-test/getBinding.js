/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-14 19:23:35
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function test() {
  let x = 1;
  function test1(){
    let z = 1 + x
  }
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        VariableDeclaration(path, state) {
          const name = path.node.declarations[0].id.name;
          if (name === 'z') {
            console.log(path.scope.getFunctionParent().path.node);
            console.log(1)
          }
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
