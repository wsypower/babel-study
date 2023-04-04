const { transformSync, types: t } = require('@babel/core');

const code = `
const fn = () => {
  if (true) {
    console.log('true');
  } else {
    console.log('false');
  }
};
`;

const plugin = ({ types }) => ({
  visitor: {
    IfStatement(path) {
      const alternate = path.get('alternate');
      const consequent = path.get('consequent');

      if (consequent.canSwapBetweenExpressionAndStatement(alternate)) {
        console.log(`'${consequent.type}' can be swapped between expression and statement.`);
        consequent.replaceWith(t.expressionStatement(t.callExpression(t.identifier('console.log'), [consequent.node])));
      } else {
        console.log(`'${consequent.type}' cannot be swapped between expression and statement.`);
      }
    },
  },
});

const result = transformSync(code, {
  plugins: [plugin],
});

console.log(result.code);
