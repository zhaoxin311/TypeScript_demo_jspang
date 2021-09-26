console.log('面向对象编程--命名空间');
console.log('1. 命名空间的使用');
// 命名空间namespace，又称内部模块，被用于组织有些具有内在联系的特性和对象。
var shuaiGe;
(function (shuaiGe) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '刘德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是刘德华');
        };
        return Dehua;
    }());
    shuaiGe.Dehua = Dehua;
})(shuaiGe || (shuaiGe = {}));
var bajie;
(function (bajie) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '马德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是二师兄马德华');
        };
        return Dehua;
    }());
    bajie.Dehua = Dehua;
})(bajie || (bajie = {}));
//TS要求变量之后要跟着类型
var dehua1 = new shuaiGe.Dehua();
var dehua2 = new bajie.Dehua();
dehua1.talk();
dehua2.talk();
