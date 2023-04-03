const { transform, types: t } = require('@babel/core')

const code = `
const x = 1>0
`;


transform(code, {
  plugins: [
    {
      visitor: {
        Expression(path) {
          console.log(path.type, path.evaluateTruthy())
        }
      }
    }
  ]
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("code---------", result.code);
  }
})

