/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-07 14:44:21
 * @LastEditTime: 2023-02-07 15:22:54
 * @LastEditors: wsy
 */
export default function (api, options, dirname) {
  return {
    // inherits: parentPlugin,s
    manipulateOptions(options, parserOptions) {
      // options.xxx = '';
      console.log(options)
    },
    pre(file) {
      this.cache = new Map();
    },
    visitor: {
      StringLiteral(path, state) {
        this.cache.set(path.node.value, 1);
      }
    },
    post(file) {
      console.log(this.cache);
    }
  };
}
//@babel/helper-plugin-utils
