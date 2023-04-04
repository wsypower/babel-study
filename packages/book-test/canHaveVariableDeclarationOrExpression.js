/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-04 17:06:16
 * @LastEditTime: 2023-04-04 19:10:39
 * @LastEditors: wsy
 */
const { transform, types } = require('@babel/core')
const code = `
const array = []
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        Identifier(path) {
          console.log(path.canHaveVariableDeclarationOrExpression())
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
