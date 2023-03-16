/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-16 15:19:25
 * @LastEditTime: 2023-03-16 15:59:35
 * @LastEditors: wsy
 */
const { declare } = require('@babel/helper-plugin-utils');

const forDirectionLint = declare((api, options, dirname) => {
    api.assertVersion(7);

    return {
        pre(file) {
            file.set('errors', []);
        },
        visitor: {
            ForStatement(path, state) {
                const errors = state.file.get('errors');
                const testOperator = path.node.test.operator
                const udpateOperator = path.node.update.operator;

                let sholdUpdateOperator;
                if (['<', '<='].includes(testOperator)) {
                    sholdUpdateOperator = '++';
                } else if (['>', '>='].includes(testOperator)) {
                    sholdUpdateOperator = '--';
                }

                if (sholdUpdateOperator !== udpateOperator) {
                    const tmp = Error.stackTraceLimit;
                    Error.stackTraceLimit = 0;
                    errors.push(path.get('update').buildCodeFrameError("for direction error", Error));
                    Error.stackTraceLimit = tmp;
                }
            }
        },
        post(file) {
            console.log(file.get('errors'));
        }
    }
});

module.exports = forDirectionLint;
