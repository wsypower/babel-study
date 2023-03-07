/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-01 15:18:50
 * @LastEditTime: 2023-03-07 17:13:44
 * @LastEditors: wsy
 */
const { declare } = require('@babel/helper-plugin-utils');
const importModule = require('@babel/helper-module-imports');

const autoI18N = declare((api, options, dirname) => {
  api.assertVersion(7);

  return {
    name: "auto-i18n",
    pre() {
      console.log('-------------pre--------------');
    },
    visitor: {
      Program: {
        enter(path, state) {

        }
      },
    },
    post() {
      console.log('-------------post--------------');
    }
  }
});
module.exports = autoI18N;
