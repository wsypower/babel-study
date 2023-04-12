/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-10 19:09:03
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
        FunctionDeclaration(path, state) {
          // 获取当前节点的父节点
          const parent = path.parent;
          // 判断当前节点是否是函数声明
          if (t.isFunctionDeclaration(path)) {
            // 获取当前节点的标识符
            const id = path.node.id;
            // 判断当前节点的标识符是否存在
            if (id) {
              // 调用 hoist 方法将当前节点中的声明节点提升到父节点中
              const hoisted = path.hoist();
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
