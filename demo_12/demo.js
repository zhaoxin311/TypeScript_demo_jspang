var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('面向对象编程--继承和重写');
console.log('1. 类的继承');
// 继承：允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，子类可以新建父类中没有的属性和方法。
//  注意：TypeScript不支持多重继承。
var Jspang = /** @class */ (function () {
    function Jspang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Jspang.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return Jspang;
}());
var jspangObj = new Jspang('技术胖', 18, 'web');
jspangObj.interest();
// extends关键字就是继承的重点，
var Jsshuai = /** @class */ (function (_super) {
    __extends(Jsshuai, _super);
    function Jsshuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '帅气';
        return _this;
    }
    Jsshuai.prototype.zhuanqian = function () {
        console.log('一天赚一亿');
    };
    return Jsshuai;
}(Jspang));
var shuai = new Jsshuai('技术帅', 2, 'jiaobaba');
shuai.interest();
shuai.zhuanqian();
console.log('-----------------我是分割线-----------------');
console.log('2. 类方法的重写');
var Jsshuai1 = /** @class */ (function (_super) {
    __extends(Jsshuai1, _super);
    function Jsshuai1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '帅气';
        return _this;
    }
    Jsshuai1.prototype.interest = function () {
        //super.interest()
        console.log('建立电商平台');
    };
    Jsshuai1.prototype.zhuanqian = function () {
        console.log('一天赚一亿');
    };
    return Jsshuai1;
}(Jspang));
var shuai1 = new Jsshuai1('技术帅', 2, 'jiaobaba');
shuai1.interest();
shuai1.zhuanqian();
