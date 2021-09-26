console.log('引用类型--正则表达式');
// 创建正则表达式也提供了两种方法，一种是才采用new 关键字，另一种是采用字面量的方式。

// 构建函数法
// 构造函数中可以传一个参数，也可以传递两个参数。
// 一个是字符串描述，另一个是修饰符，
// 比如g是全局修饰符，i是忽略大小写，m是多行模式。
let reg1:RegExp = new RegExp("jspang")  //表示字符串规则里含有jspang
console.log(reg1)
let reg2:RegExp = new RegExp("jspang",'gi')
console.log(reg2)

console.log('-----------------我是分割线-----------------');

// 字面量法
let reg3:RegExp = /jspang/
let reg4:RegExp = /jspang/gi
console.log(reg3);
console.log(reg4);

console.log('-----------------我是分割线-----------------');

console.log('RegExp 中的常用方法');
// RegExp对象包含两个方法：test( )和exec( ),功能基本相似，用于测试字符串匹配。
// test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false。
// exec(string) : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null。
let reg5:RegExp =  /Jspang/i
let website:string = 'jspang.com'
let result1:boolean = reg5.test(website)
console.log(result1)    //true
console.log('-----------------我是分割线-----------------');
console.log(reg5.exec(website)) ////[ 'jspang', index: 0, input: 'jspang.com' ]
// exec查找不到时 会返回null
console.log('-----------------结束-----------------');
