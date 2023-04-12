/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-12 19:42:53
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
        VariableDeclaration(path, state) {
          const name = path.node.declarations[0].id.name;
          if (name === 'x') {
            path.addComments('leading', [
              {
                type: 'CommentBlock',
                value: ' this is a comment',
                start: 0,
                end: 25,
              },
            ]);
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
