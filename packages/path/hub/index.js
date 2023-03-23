/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-23 15:50:05
 * @LastEditTime: 2023-03-23 16:04:53
 * @LastEditors: wsy
 */
const babel = require('@babel/core');
const path = require('node:path');
const filePath = path.join(__dirname, '../source/index.js');


babel.transformFile(filePath, {
  sourceType: "unambiguous",
  plugins: [
    {
      visitor: {
        FunctionDeclaration: (path) => {
          console.log(path.hub); // 打印 hub 信息
          console.log(path.hub); // 打印 hub 信息
          console.log(path.hub.getCode())
          path.traverse({},)
        }
      }
    }
  ]
}, (err, result) => {
  if (err) {
    console.log('------------', err)
  }
});

