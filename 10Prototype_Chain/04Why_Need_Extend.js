/**
 * @04Why_Need_Extend.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2022/1/7)
 **/

// Student
function Student(name, age, sno) {
    this.name = name;
    this.age = age;
    this.sno = sno;
}

Student.prototype.running = function() {
    console.log(this.name + " running ~");
}
Student.prototype.eating = function() {
    console.log(this.name + " eating ~");
}

Student.prototype.studying = function() {
    console.log(this.name + " studying ~");
}

// Teacher

function Teacher(name, age, title) {
    this.name = name;
    this.age = age;
    this.title = title;
}

Teacher.prototype.running = function() {
    console.log(this.name + " running ~");
}
Teacher.prototype.eating = function() {
    console.log(this.name + " eating ~");
}

Teacher.prototype.teaching = function() {
    console.log(this.name + " teaching ~");
}

// 父类：将公共的代码 抽取到一个公共类中，称之为 父类
