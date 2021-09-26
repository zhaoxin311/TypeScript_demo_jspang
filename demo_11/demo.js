console.log('面向对象编程-修饰符');
console.log('1. 访问修饰符');
// 类中属性的访问可以用访问修饰符来进行限制。
// 访问修饰符分为：public、protected、private。
// public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
// protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
// private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
var XiaoJieJie2 = /** @class */ (function () {
    function XiaoJieJie2(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJieJie2.prototype.sayHello = function () {
        console.log('hi 小朋友');
    };
    XiaoJieJie2.prototype.sayLove = function () {
        console.log('i love you');
    };
    return XiaoJieJie2;
}());
var jiejie2 = new XiaoJieJie2('女', 'xiahua', 12);
console.log(jiejie2.sex);
// console.log(jiejie2.name);  //报错
// console.log(jiejie2.age);  //报错
jiejie2.sayHello();
// jiejie2.sayLove()  //报错
console.log('-----------------我是分割线-----------------');
console.log('2. 只读属性修饰符');
// 使用readonly修饰符将属性设置为只读，
// 注意：只读属性必须在声明时或者构造函数里被初始化
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
// man.sex='女'  //报错
console.log(man.sex);
