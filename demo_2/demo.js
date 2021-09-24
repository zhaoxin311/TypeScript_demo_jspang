//声明数值类型的变量age，但不予赋值.
//var age:number
//console.log(age); //此时控制台会输出undefined
console.log('--------------数据类型的那些事--------------------');
console.log('1. Number 类型实例');
var age = 18;
var stature = 178.2;
console.log(age);
console.log(stature); //number 即支持整型 有支持浮点型数据
console.log('-----------------我是分隔符-----------------');
console.log('2. String 类型实例');
var zhaoxin = 'zhaoxin 是小仙女';
console.log(zhaoxin);
console.log('-----------------我是分隔符-----------------');
console.log('3. Boolean 类型实例');
var T = true;
var F = false;
console.log(T);
console.log(F);
console.log('-----------------我是分隔符-----------------');
console.log('4. enum 枚举类型实例');
//按照规范 声明枚举类型 都用大写
var SEASON;
(function (SEASON) {
    SEASON[SEASON["spring"] = 0] = "spring";
    SEASON[SEASON["summer"] = 1] = "summer";
    SEASON[SEASON["autumn"] = 2] = "autumn";
    SEASON[SEASON["winter"] = 3] = "winter";
})(SEASON || (SEASON = {}));
console.log(SEASON.summer); //返回了1，这是索引index，跟数组很想。
var YEAR;
(function (YEAR) {
    YEAR["spring"] = "\u6625\u5929";
    YEAR["summer"] = "\u590F\u5929";
    YEAR["autumn"] = "\u79CB\u5929";
    YEAR["winter"] = "\u51AC\u5929";
})(YEAR || (YEAR = {}));
console.log(YEAR.summer); //返回了 夏天 
console.log('-----------------我是分隔符-----------------');
console.log('5. any 任意类型实例');
//any声明的变量的类型 可以随意改变 也不报错
var t = 10;
t = 'zhaoxin';
t = true;
console.log(t);
console.log('-----------------结束-----------------');
