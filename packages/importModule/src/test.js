/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-01 15:18:50
 * @LastEditTime: 2023-03-07 15:15:30
 * @LastEditors: wsy
 */
const { declare } = require('@babel/helper-plugin-utils');
const importModule = require('@babel/helper-module-imports');

const test = declare((api, options, dirname) => {
  api.assertVersion(7);

  return {
    visitor: {
      Program: {
        enter(path, state) {
          // importModule.addNamed(path, 'name', 'tracker');
          importModule.addNamespace(path, 'node:path', {
            nameHint: "path"
          });
          // importModule.addDefault(path, 'tracker', {
          //   nameHint: path.scope.generateUid('tracker')
          // })
        }
      }
    }
  }
});
module.exports = test;
