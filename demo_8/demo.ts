console.log('引用类型 -- 日期对象');
// 创建日期对象
// 日期对象是Date的实例，可以使用构造函数的方法进行创建。并且构造函数中可以传递多种类型的参数。

console.log('1.不传递任何参数');
let d1:Date = new Date()
console.log(d1)  //返回当前时间
// 构造函数中不传递参数时，Date（）构造函数将根据当前日期和时间创建一个Date对象。

console.log('-----------------我是分割线-----------------');

console.log('2. 传递一个整数');
// 传递一个整数，这个整数代表的是距离1970-01-01 00:00:00的毫秒数
let d2:Date = new Date(1000)
let da:Date = new Date(2000)
console.log(d2)  //1970-01-01T00:00:01.000Z
console.log(da) //1970-01-01T00:00:02.000Z

console.log('-----------------我是分割线-----------------');

console.log('3. 传递一个字符串');
// 如果传递一个表示日期的字符串，就会生成相对应的日期对象。
// 字符串的格式常用:yyyy/MM/dd hh:mm:ss，yyyy-MM-dd hh:mm:ss，yyyy-MM-ddThh:mm:ss等,
let d3_1:Date = new Date('2018/09/06 05:30:00')
let d3_2:Date = new Date('2018-09-06 05:30:00')
let d3_3:Date = new Date('2018-09-06T05:30:00')
console.log(d3_1) //2018-09-05T21:30:00.000Z
console.log(d3_2) //2018-09-05T21:30:00.000Z
console.log(d3_3) //2018-09-05T21:30:00.000Z

console.log('-----------------我是分割线-----------------');

console.log('4. 传递表示年月日时分秒的变量');
let d:Date = new Date(2021,3,2,21,32,23,1);
console.log(d);

// let d:Date = new Date(year,month,day,hours,minutes,seconds,ms);
// year 表示年份，4位数字。
// month表示月份，数值是0(1月)~11(12月)之间的整数。
// day 表示日期。数值是1~31之间的整数。
// hours 表示小时，数值是0-23之间的整数。
// minutes 表示分钟数，数值是0~59之间的整数。
// seconds 表示秒数，数值是0~59之间的整数。
// ms 表示毫秒数，数值是0~999之间的整数。

console.log('-----------------结束-----------------');

