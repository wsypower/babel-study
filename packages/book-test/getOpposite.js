/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-12 14:50:21
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
a && b
`;


transform(code, {
  plugins: [
    {
      visitor: {
        Identifier(path, state) {
          console.log(path.parentPath.isLogicalExpression())
          console.log(path.node.name)
          console.log(path.getOpposite().node.name)
          path.stop()
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
