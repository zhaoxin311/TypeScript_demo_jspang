//把功能相近的需求 封装成一个代码块，每次传入不同的变量，变量不同 呈现的结果也有所不同
//age 为一个形式参数  此处的string为返回函数类型
function searchPeople(age) {
    return '找到了' + age + '的小朋友';
}
var age = 18;
var result = searchPeople(age);
console.log(result);
// 需要注意的是：
// 1. 声明（定义）函数必须加 function 关键字；
// 2. 函数名与变量名一样，命名规则按照标识符规则；
// 3. 函数参数可有可无，多个参数之间用逗号隔开；
// 4. 每个参数参数由名字与类型组成，之间用分号隔开；
// 5. 函数的返回值可有可无，没有时，返回类型为 void；
// 6. 大括号中是函数体。
console.log('-----------------我是分割线-----------------');
//有可选参数的函数
//加个问号  代表了可选的形参
console.log('1. 有可选参数的函数');
function search1(age, stature) {
    var yy = '';
    yy = '找到' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '小朋友';
}
var result = search1(22, '瘦瘦的');
console.log(result);
console.log('-----------------我是分割线-----------------');
console.log('2. 有默认参数的函数');
function search2(age, stature) {
    if (age === void 0) { age = 19; }
    if (stature === void 0) { stature = '高高的'; }
    var yy = '';
    yy = '找到' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '小朋友';
}
//调用函数时，不传实参时，会展示默认参数。
var result = search2();
console.log(result, '默认参数');
//调用函数时，传递实参，结果会展示实参内容
var result = search2();
console.log(result, '传递的实参');
console.log('-----------------我是分割线-----------------');
console.log('3. 有剩余参数的函数');
//有剩余参数的函数，传递给函数的参数个数不确定
//说的技术点，剩余参数就是形参是一个数组，传递几个实参过来都可以直接存在形参的数组中。
function search3() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '';
    yy = '找到';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length - 1) {
            yy = yy + '、';
        }
    }
    return yy + '小朋友';
}
var result = search3('19岁', '白的', '高的', '瘦瘦的', '美美的');
console.log(result);
