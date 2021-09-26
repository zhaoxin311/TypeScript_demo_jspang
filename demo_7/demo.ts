console.log('引用类型 -- 字符串');
console.log('1. 字符串的两种类型');
// 基本类型字符串：由单引号或者双引号括起来的一串字符串。
// 引用类型字符串：用new 实例化的 String类型。（大写S）
// 需要说明的是这两种声明字符串的方法没有什么不同。基本类型的字符串可以直接使用引用类型的属性和方法。
let jspang1:string = '技术胖'
let jspanga1:String = new String("jspang.com")
console.log(jspang1)
console.log(jspanga1)

console.log('-----------------我是分割线-----------------');

console.log("2. 字符串的长度length");

let jspang2:string = '技术胖'
let jspanga2:String = new String("jspang.com")
console.log(jspang2.length)
console.log(jspanga2.length)

console.log('-----------------我是分割线-----------------');

console.log('2. 字符串常用方法');
// (1)查找字符串
// 1. 从头部查找字符串直接使用indexOf就可以。
// 基本语法：str.indexOf(subStr)
let something1:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie1:string = "小姐姐"
console.log(something1.indexOf(xiaoJieJie1))   //19
// 如果没有查找到字符串 就会返回-1

// 2. 从字符串尾部开始查找字符串第一个符合字符串的位置，使用lastIndexOf( )
let something2:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的对对对。"
let xiaoJieJie2:string = "小姐姐"
console.log(something2.lastIndexOf(xiaoJieJie2)) //19

// 需要注意的是，返回的都是字符串的下标。所以返回的值是相同的。并不是返回从后到前的下标位置。这个新手很容易采坑。

// (2)截取字符串
// 基本语法如下：str.substring(startIndex,[endIndex])
// 参数 startIndex 表示开始下标，endIndex 表示结束下标，endIndex 参数是可选的。该方法的作用是从指定的开始下标开始截取字符串，截取到 endIndex 的下标之前，如果没有 endIndex，则截取到字符串结束。
console.log(something2.substring(8));
console.log(something2.substring(8,19));

// (3)替换字符串
// 基本语法如下： str.replace(subStr,newstr);
// substr 表示被替换的子串，newstr 表示要替换成的子串。
// 该方法的作用是在 str 中从头部开始找 substr 子串，
// 找到之后，把 substr 用 newstr 替换掉。
// 需要注意的是如果 str 中有多个 substr 子串，只有第一个 substr 子串会被替换掉。
let xiaojj:string='小姐姐'
console.log(something2.replace(xiaojj,'小哥哥'))

console.log('-----------------结束-----------------');


