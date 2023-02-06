/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-16 14:40:34
 * @LastEditTime: 2022-12-16 14:50:44
 * @LastEditors: wsy
 */
console.log("12/16/2022, 4:49:07 PM", 1);
function func() {
  console.info("12/16/2022, 4:49:07 PM", 2);
}
export default class Clazz {
  say() {
    console.debug("12/16/2022, 4:49:07 PM", 3);
  }
  render() {
    return <div>{console.error("12/16/2022, 4:49:07 PM", 4)}</div>;
  }
}