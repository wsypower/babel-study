/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-06 14:52:53
 * @LastEditTime: 2023-04-12 15:19:38
 * @LastEditors: wsy
 */
const { transform, types: t } = require('@babel/core')

const code = `
function foo() {
  const a = 3
  if (a===3) {
    return true
  }else {
    return false
  }
}
`;


transform(code, {
  plugins: [
    {
      visitor: {

        FunctionDeclaration(path, state) {
          // 获取函数体节点
          const body = path.get('body');

          // 获取函数体中的所有完成记录
          const completionRecords = body.getCompletionRecords();

          // 遍历所有完成记录
          for (const record of completionRecords) {
            if (record.type === 'ReturnStatement') {
              // 获取返回值
              const argument = record.get('argument');
              // 判断返回值是否为布尔值
              if (argument.isBooleanLiteral()) {
                // 获取返回值的布尔值
                const value = argument.node.value;
                console.log(value)
              }
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
