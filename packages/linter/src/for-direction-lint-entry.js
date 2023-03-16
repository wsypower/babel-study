/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-16 15:19:19
 * @LastEditTime: 2023-03-16 15:19:44
 * @LastEditors: wsy
 */
const { transformFromAstSync } = require('@babel/core');
const parser = require('@babel/parser');
const forDirectionLintPlugin = require('../plugin/for-direction-lint');

const sourceCode = `
for (var i = 0; i < 10; i++) {
}

for (var i = 10; i >= 0; i--) {
}
for (var i = 0; i < 10; i--) {
}

for (var i = 10; i >= 0; i++) {
}
`;

const ast = parser.parse(sourceCode, {
    sourceType: 'unambiguous'
});

const { code } = transformFromAstSync(ast, sourceCode, {
    plugins: [forDirectionLintPlugin],
    filename: 'input.js'
});

// console.log(code);

