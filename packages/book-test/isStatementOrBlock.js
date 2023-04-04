const { transformSync } = require('@babel/core');

const code = `
function foo() {
  return {
    bar: 'bar'
  };
}
`;

const plugin = ({ types }) => ({
  visitor: {
    BlockStatement(path) {
      console.log(path.isStatementOrBlock());
    }
  },
});

const result = transformSync(code, {
  plugins: [plugin],
});

console.log(result.code);
