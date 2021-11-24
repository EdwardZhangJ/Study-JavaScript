/**
 * @06This_Interview.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/24)
 **/

// 面试题一
// var name = "window";
// var person = {
//     name: "person",
//     sayName: function () {
//         console.log(this.name)
//     }
// };
// function sayName() {
//     var sss = person.sayName;
//     sss(); // window：独立函数调用
//     person.sayName(); // person：隐式调用
//     (person.sayName)(); // person：间接函数引用，还是隐式调用
//     (b = person.sayName)() // window：多了赋值表达式，变为独立函数调用
// }
// sayName();

// 面试题二
var name = "window";
var person1 = {
    name: "person1",
    foo1: function () {
        console.log(this.name)
    },
    foo2: () => console.log(this.name),
    foo3: function () {
        return function () {
            console.log(this.name)
        }
    },
    foo4: function () {
        return () => {
            console.log(this.name)
        }
    }
};
var person2 = { name: 'person2'};

// person1.foo1(); // person1：隐式绑定
// person1.foo1.call(person2); // person2：显示绑定优先级大于隐式绑定

// person1.foo2(); // window 箭头函数未绑定 this; 找上层作用域全局window， Object obj 无作用域
// person1.foo2.call(person2); // window 箭头函数未绑定 this

// person1.foo3()(); // window 独立函数调用
// person1.foo3.call(person2)(); // window 独立函数调用
// person1.foo3().call(person2); // person2 显示绑定

person1.foo4()(); // person1 箭头函数不绑定 this 上层作用域是 person1
person1.foo4.call(person2)() // person2 上层作用被显示的绑定到 person2
person1.foo4().call(person2) // person1 上层作用域是 person1