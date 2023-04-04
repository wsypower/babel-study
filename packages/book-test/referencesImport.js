/*
 * @Author: wsy
 * @Date: 2023-04-03 14:46:51
 * @LastEditTime: 2023-04-04 20:51:25
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
import a from 'bar';
console.log(a)
`;


transform(code, {
  plugins: [
    {
      visitor: {
        Identifier(path) {
          if (path.referencesImport('bar', 'default')) {
            path.scope.rename('a', 'b');
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

