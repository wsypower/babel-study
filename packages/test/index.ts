/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-22 18:23:44
 * @LastEditTime: 2023-02-22 18:23:53
 * @LastEditors: wsy
 */
const createImage = Promise.resolve()

const fileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
