/**
 * @06Compose_Function.js
 * @description 组合函数的理解
 * @author zhangjun
 * @update (zhangjun 2021/11/29)
 **/

function double(num) {
    return num * 2;
}

function square(num) {
    return num ** 2
}

var count = 10
var result = square(double(count))
console.log(result)

var num = 100

function composeFn(m, n) {
    return function(count) {
        return n(m(count))
    }
}