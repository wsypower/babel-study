const { transformSync } = require('@babel/core');

const code = `
function foo() {
  if (true) {
    return 1;
  } else {
    return 2;
  }
}
`;

const plugin = ({ types }) => ({
  visitor: {
    FunctionDeclaration(path) {
      const body = path.get('body').get('body')[0];
      if (body.isCompletionRecord()) {
        console.log('The last statement of the function is a completion record.');
      } else {
        console.log('The last statement of the function is not a completion record.');
      }
    },
  },
});

const result = transformSync(code, {
  plugins: [plugin],
});

console.log(result.code);
