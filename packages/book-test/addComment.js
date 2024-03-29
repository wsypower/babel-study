/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-20 14:48:05
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function foo() {
  // this is a comment
  var x = 1;
  return x + y;
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        Identifier(path) {
          const name = path.node.name;
          const isReference = path.isReferencedIdentifier();
          console.log(`${name} is a reference: ${isReference}`)
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
