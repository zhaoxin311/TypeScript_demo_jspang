console.log('1. 初认识引用类型');

let ZX={
  name:'zhaoxin',
  age:18,
  sex:'女',
  saySomthing:function () {
    console.log('zhaoxin是个小仙女');
  }
}
console.log(ZX.name);
ZX.saySomthing()

// 在TypeScript中也给我们提供了一些引用类型，
// 例如：Array（数组）、String（字符串）、Date（日期对象）、RegExp（正则表达式）等
console.log('-----------------我是分割线-----------------');

console.log('2. 初始化数组的两种方式');
// 声明数组的方法
let arr1_1:number[ ]     //声明一个数值类型的数组
let arr1_2:Array<string>  //声明一个字符串类型的数组
let arr1_3:Array<boolean>  //声明一个布尔类型的数组

// 给数组赋值
// 数组是存储大量数据的集合，声明数组之后，需要给数组存储数据。
// 这时候有两种方法：

// ** 字面量赋值法 **
//定义一个空数组，数组容量为0
let arr2_1:number[] = [] 
//定义一个数组时，直接给数组赋值
let arr2_2:number[] = [1,2,3,4,5]
//定义数组的同时给数组赋值
let arr2_3:Array<string> = ['jspang','技术胖','金三胖']
let arr2_4:Array<boolean> = [ true,false,false]

// 需要注意的是，在TypeScript中指定数据类型的数组只能存储同一类型的数组元素。

//下面代码会报错！ 必须存储number类型的数据
// let arr5:number[] = [1,2,true]

// ** 构造函数赋值法 **
let arr3_1:number[] = new Array()
let ara3_2:number[] = new Array(1,2,3,4,5)
let arr3_3:Array<string> = new Array('jspang','技术胖','金三胖')
let arr3_4:Array<boolean> = new Array(true,false,false)

console.log('-----------------我是分割线-----------------');

console.log('3. 认识元祖，一种特殊的数组');
// 元祖是一种特殊的数组，元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
//了解即可，开发中不建议使用

//声明一个元祖类型
let x : [string,number]
//正确的初始化
x = ['hello',10]
//错误的初始化方法
// x = [10,'hello']

console.log('-----------------结束-----------------');

