// 用class关键字声明了一个类，并在里边声明了name和age属性
class XiaoJieJie{
  name:string;
  age:number;
  // constructor为构造函数。构造函数的主要作用是给类中封装的属性进行赋值。
  constructor(name:string,age:number){
      this.name = name
      this.age = age 
  }
  say(){
      console.log('小哥哥好')
  }
}
let jiejie:XiaoJieJie = new XiaoJieJie('范冰冰',18)
console.log(jiejie) //XiaoJieJie { name: '范冰冰', age: 18 }
jiejie.say() //小哥哥好