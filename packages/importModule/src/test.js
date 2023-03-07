/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-01 15:18:50
 * @LastEditTime: 2023-03-07 15:32:23
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
          importModule.addDefault(path, 'node:path', {
            nameHint: "path"
          });
        }
      }
    }
  }
});
module.exports = test;
