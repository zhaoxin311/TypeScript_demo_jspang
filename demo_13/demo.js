console.log('面向对象编程--接口');
console.log('1. 认识接口');
var myhusband1 = { sex: '男', interest: '会做饭，会学习' };
console.log(myhusband1);
console.log('-----------------我是分割线-----------------');
console.log('2. 可选参数的接口');
var myhusband2 = { sex: '男', interest: '会做饭，会学习', maiBao: true };
console.log(myhusband2);
// 上面的代码maiBaoBao选项就是可选的，可以写也可以不写。
console.log('-----------------我是分割线-----------------');
console.log('3. 规范函数类型接口');
var mySearch; //声明一个变量
// 直接给变量赋值 就变成了一个函数
mySearch = function (source, subString) {
    // 声明一个内部的变量  
    // 在source中查找subString是否存在
    var flag = source.search(subString);
    return (flag != -1); //不存在 返回-1 （-1！=-1）==》false
    // 若存在 返回1  （1！=-1）==》true
};
console.log(mySearch('高、富、帅', '高'));
