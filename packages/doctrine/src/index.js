/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-13 18:33:33
 * @LastEditTime: 2023-03-13 18:46:08
 * @LastEditors: wsy
 */
const doctrine = require('doctrine');
let ast = doctrine.parse(
  [
    "/**",
    " * This function comment is parsed by doctrine",
    " * @param {{ok:String}} userName 123",
    "*/"
  ].join('\n'), { unwrap: true });


console.log(ast)
