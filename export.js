// export关键字输出变量。
// 第一种写法
// export var name = "lily";
// export var test = function(a) { return name + a };
// export var datajson = { "x": "abc" };


// 第二种写法
// var name = "lily";
// var test = function(a) { return name + a };
// var datajson = { "x": "abc" };
// export { name, test, datajson }

// 第三种写法
// var name = "lily";
// var test = function(a) { return name + a };
// var datajson = { "x": "abc" };
// export { name as na, test as te, datajson as data }



// 第四种写法 export default
var name = "lily";
var test = function(a) { return name + a };
var datajson = { "x": "abc" };
export default datajson;