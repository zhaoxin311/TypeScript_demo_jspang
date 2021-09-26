// 用class关键字声明了一个类，并在里边声明了name和age属性
var XiaoJieJie = /** @class */ (function () {
    // constructor为构造函数。构造函数的主要作用是给类中封装的属性进行赋值。
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('小哥哥好');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('范冰冰', 18);
console.log(jiejie);
jiejie.say();
