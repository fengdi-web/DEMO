// import命令用于输入其他模块提供的功能。
import { name, test, datajson } from "./export.js";

function abc(v) {
    console.log(v);
}
abc(name);



test(123);
test("abc");