console.log('三种函数的定义方法');
console.log('第一种、函数声明法');
//函数声明法创建函数是最常用的函数定义法。
//使用function关键字和函数名去定义一个函数。
function add1(a:number,b:number):number {
  return a+b
}
console.log(add1(3,9));

console.log('-----------------我是分割线-----------------');

console.log('第二种、函数表达式法');
//函数表达式法是将一个函数赋值给一个变量，这个变量名就是函数名。
// 通过变量名就可以调用函数了。这种方式定义的函数，必须在定义之后，调用函数。
// 下面例子中等号右边的函数没有函数名，称为匿名函数。

//注意：此方法声明了函数必须调用 不然会报错
var add2=function (a:number,b:number):number {
  return a+b
}
console.log(add2(2,9));

console.log('-----------------我是分割线-----------------');

console.log('第三种、箭头函数');
//箭头函数是 ES6 中新增的函数定义的新方式，我们的 TypeScript 语言是完全支持 ES6 语法的。
//箭头函数定义的函数一般都用于回调函数中。
var add3=(a:number,b:number)=>{
  return a+b
}
console.log(add3(5,1));

