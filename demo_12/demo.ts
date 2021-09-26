console.log('面向对象编程--继承和重写');

console.log('1. 类的继承');
// 继承：允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，子类可以新建父类中没有的属性和方法。

//  注意：TypeScript不支持多重继承。
class Jspang{
  public name:string
  public age : number
  public skill: string
  constructor(name:string,age:number,skill:string){
      this.name = name
      this.age = age
      this.skill = skill
  }
  public interest(){
      console.log('找小姐姐')
  }
}

let jspangObj:Jspang = new Jspang('技术胖',18,'web')
jspangObj.interest()

// extends关键字就是继承的重点，
class Jsshuai extends Jspang {
  public xingxiang:string='帅气'
  public zhuanqian(){
    console.log('一天赚一亿');
  }
}
let shuai =new Jsshuai('技术帅',2,'jiaobaba')
shuai.interest()
shuai.zhuanqian()

console.log('-----------------我是分割线-----------------');

console.log('2. 类方法的重写');
class Jsshuai1 extends Jspang {
  public xingxiang:string='帅气'
  // 先是继承了父类的方法，
  public interest(){
    super.interest()  // 然后通过super关键字调用了父类的方法，
    console.log('建立电商平台');   // 实现了技能的增加。
  }
  public zhuanqian(){
    console.log('一天赚一亿');
  }
}
let shuai1 =new Jsshuai1('技术帅',2,'jiaobaba')
shuai1.interest()
shuai1.zhuanqian()

console.log('-----------------结束-----------------');
