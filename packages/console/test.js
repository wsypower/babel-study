/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-16 14:40:34
 * @LastEditTime: 2022-12-16 14:50:44
 * @LastEditors: wsy
 */
console.log(1);

function func() {
  console.info(2);
}

export default class Clazz {
  say() {
    console.debug(3);
  }
  render() {
    return <div>{console.error(4)}</div>
  }
}
