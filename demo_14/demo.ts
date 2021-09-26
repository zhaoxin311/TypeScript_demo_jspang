console.log('面向对象编程--命名空间');
console.log('1. 命名空间的使用');
// 命名空间namespace，又称内部模块，被用于组织有些具有内在联系的特性和对象。
namespace shuaiGe{ //用namespace 定义一个命名空间shuaiGe
  export class Dehua{
    public name:string='刘德华'
    talk(){
      console.log('我是刘德华');
      
    }
  }
}

namespace bajie{ //用namespace 定义一个命名空间shuaiGe
  export class Dehua{
    public name:string='马德华'
    talk(){
      console.log('我是二师兄马德华');
      
    }
  }
}
//TS要求变量之后要跟着类型
let dehua1:shuaiGe.Dehua=new shuaiGe.Dehua()
let dehua2:bajie.Dehua=new bajie.Dehua()
dehua1.talk()
dehua2.talk()