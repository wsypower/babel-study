/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-28 16:33:00
 * @LastEditTime: 2023-03-29 15:02:41
 * @LastEditors: wsy
 */
const babel = require('@babel/core')


const code = `
if (x > 0) {
  y = 1;
} else {
  y = -1;
}
`
function trackError(path, state) {
  let tmp = Error.stackTraceLimit;
  Error.stackTraceLimit = 0
  const error = path.buildCodeFrameError('Error')
  state.file.get('errors').push(error)
  Error.stackTraceLimit = tmp
}

babel.transform(code, {
  plugins: [
    {
      pre(file) {
        file.set('errors', []);
      },
      visitor: {
        IfStatement(path, state) {
          const test = path.get('test')
          const consequent = path.get('consequent.body')
          const alternate = path.get('alternate.body')
          if (consequent.length > 1) {
            for (const node of consequent) {
              trackError(node, state)
            }
          } else if (alternate.length > 1) {
            for (const node of alternate) {
              trackError(node, state)
            }
          } else {
            const newNode = babel.types.conditionalExpression(
              test.node,
              consequent[0].node.expression,
              alternate[0].node.expression
            )
            const statementParent = path.getStatementParent();
            statementParent.replaceWith(newNode)
          }
        }
      },
      post(file) {
        const errors = file.get('errors');
        console.log(errors.join('\r\n'))
      }
    },
  ]
}, (err, result) => {
  if (err) {
    console.log('err---->', err)
  }
  console.log(result?.code)
})
