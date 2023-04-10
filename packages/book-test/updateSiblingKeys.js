/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-10 18:08:30
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
const a = 1
function test(x,y,z){
  console.log(x)
}
`;


transform(code, {
  plugins: [
    {
      visitor: {
        Identifier(path, state) {
          if (typeof path.key === 'number') {
            console.log('befor--------', path.key, path.node.name)
            if (path.node.name === 'y') {
              path.container.splice(path.key, 1)
            }
            console.log('after--------', path.key, path.node.name)
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
