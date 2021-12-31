/**
 * @06Create_Object_ConstructorFunction.js
 * @description 使用构造函数方法 创建多个对象方法
 * @author zhangjun
 * @update (zhangjun 2021/12/31)
 **/
// 规范： 构造函数的首字母 一般是 大写
function Person (name, age, height, address) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.address = address;
    
    this.eating = function() {
        console.log(this.name + '在吃饭');
    }
    this.running = function() {
        console.log(this.name + '在跑步');
    }
}

var p1 = new Person("张三", 18, 1.88, "广州市");
var p2 = new Person("李四", 19, 1.98, "北京市");
console.log(p1);
console.log(p2);