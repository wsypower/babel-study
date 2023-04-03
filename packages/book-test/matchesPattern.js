/*
 * @Author: wsy
 * @Date: 2023-04-03 14:46:51
 * @LastEditTime: 2023-04-03 17:09:04
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
const obj = {
  fn(){
    return 1
  }
}
obj["fn"]()
`;


transform(code, {
  plugins: [
    {
      visitor: {
        MemberExpression(path) {
          console.log(path.matchesPattern('obj.fn', true))
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

