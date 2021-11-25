/**
 * @02Realize_Apply.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/25)
 **/
// 自己实现 apply
Function.prototype.hyapply = function(thisArg, ...args) {
    // 1. 获取到需要执行的函数
    var fn = this;
    
    // 2. 处理绑定的 thisArg
    thisArg = thisArg ? Object(thisArg) : window;
    
    // 3. 执行函数
    thisArg.fn = fn
    
}

function sum(num1, num2) {
    console.log("sum 函数被执行", this, num1, num2)
    return num1 + num2
}

// 系统调用
let result = sum.apply({}, [20, 30])
console.log("系统调用结果：", result)

// 自己实现调用
var result = sum.hyapply("abc", [20, 30])
console.log("hycall调用结果：", result)
