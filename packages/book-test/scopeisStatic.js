/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-13 17:17:13
 * @LastEditTime: 2023-04-13 17:24:36
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function foo() {
  const a = 1;
  function test() {
    const b = 2;
    const c = a + b;
  }
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        FunctionDeclaration(path, state) {
          const name = path.node.id.name;
          if (name === "test") {
            const { scope } = path;
            if (scope.isStatic(path.scope.block)) {
              console.log("test function is static");
            } else {
              console.log("test function is not static");
            }
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

