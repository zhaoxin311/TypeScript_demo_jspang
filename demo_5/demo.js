//变量的作用域，函数划分
//每个变量都有一个起作用的范围，这个范围就是变量的作用域。
//在TypeScript语言中变量作用域划分是以函数为标准的。
//该例子说明 在函数体内是封闭的  即使是全局声明 在函数体外部也无法调用
console.log('1. 函数作用域演示例子');
//没有返回值的时候 用void 会返回空值
function zhengxing1() {
    var yangzhi = '刘德华';
    console.log(yangzhi);
}
zhengxing1(); //调用函数
//console.log(yangzhi);  //在函数的外部读取这个变量，是读取不到的
console.log('-----------------我是分割线-----------------');
console.log('2. 全局变量 和 局部变量');
// 局部变量：函数体内定义的变量就是局部变量。
// 全局变量: 函数体外 定义的变量就是全局变量。
var yangzhi = '刘德华';
function zhengxing2() {
    console.log('大家都很喜欢' + yangzhi);
}
zhengxing2(); //调用函数
console.log(yangzhi);
// 此时yangzhi变量是全局的，所以在函数体内也可以调用，在函数体外也是可以调用的
console.log('-----------------我是分割线-----------------');
console.log('3. 局部变量和全局变量重名');
// 当局部变量与全局变量重名的时候，在函数体内是局部变量起作用；如果重名，就有变量提升，
var yangzhi = '刘德华';
function zhengxing3() {
    var yangzhi = '马德华';
    console.log('大家都很喜欢' + yangzhi);
}
zhengxing3(); //调用函数
console.log(yangzhi);
//变量提升：当函数内部声明了和全局变量相同的变量名时，
// 就会提升变量提升的效果，函数内的声明变量语句就会提升到函数的第一句
console.log('-----------------我是分割线-----------------');
console.log('4. let 关键字变量的作用域');
// 使用let关键字的变量就是一个块级作用域变量。
function zhengxing4() {
    var yangzhia = '刘德华';
    {
        var yangzhib = '马德华';
        console.log('大家都很喜欢' + yangzhib);
    }
    console.log('大家都很喜欢' + yangzhia);
    // console.log('大家都很喜欢'+yangzhib);
}
zhengxing4(); //调用函数
// 解释以上代码：
// 当用let声明变量时 虽然有报错 但控制台还是会打印出对应的内容，
// 因为在将ts文件编译成js文件时，自动将ES6转变成了ES5(即：自动将let转变成了var)，故 可以打印
// 但是如果在js文件中 再将var改回let 再次进行编译 就会报错 且无法打印
console.log('-----------------结束-----------------');
