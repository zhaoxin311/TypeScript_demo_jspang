console.log('三种函数的定义方法');
console.log('第一种、函数声明法');
//函数声明法创建函数是最常用的函数定义法。使用function关键字和函数名去定义一个函数。
function add1(a, b) {
    return a + b;
}
console.log(add1(3, 9));
console.log('-----------------我是分割线-----------------');
console.log('第二种、函数表达式法');
var add2 = function (a, b) {
    return a + b;
};
console.log(add2(2, 9));
console.log('-----------------我是分割线-----------------');
console.log('第三种、箭头函数');
var add3 = function (a, b) {
    return a + b;
};
console.log(add3(5, 1));
