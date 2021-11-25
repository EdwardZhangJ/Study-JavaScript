/**
 * @03Realize_Bind.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/25)
 **/
Function.prototype.hybind = function(thisArg, ...argArray) {
    return function() {
    
    }
}

function foo() {
    console.log("foo 被执行", this)
}

function sum(num1, num2, num3, num4) {
    console.log(num1, num2, num3, num4)
}

// 系统调用
// var bar = foo.bind("abc")
// bar()

// 系统调用，以下传参方法 结果相同
// var newSum = sum.bind("aaa", 10, 20, 30, 40)
// newSum()

// var newSum = sum.bind("aaa")
// newSum(10, 20, 30, 40)

// var newSum = sum.bind("aaa", 10)
// newSum(20, 30, 40)

// 使用自己定义的bind
var bar = foo.hybind("hybind被执行", )