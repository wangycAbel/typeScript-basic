function echo<T>(arg: T): T {
  return arg;
}
const str: string = "string";
const res = echo(str);
const res1 = echo(123);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
const res2 = swap(["123", 123]);

function echoWithArr<T>(arr: T[]): T[] {
  return arr;
}
const res3 = echoWithArr([1, 2, 3]);

interface IWithLength {
  length: number;
}
// 约束泛型 extend 关键字
function echoWithLength<T extends IWithLength>(arg: T) {
  return arg.length;
}

const res4 = echoWithLength("1234");
const res5 = echoWithLength({ length: 10 });
const res6 = echoWithLength([1, 2, 3]);

class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop() {
    return this.data.unshift();
  }
}
const queue = new Queue<number>();

interface KeyPaire<T, U> {
  key: T;
  paire: U;
}
const kp1: KeyPaire<number, string> = {
  key: 123,
  paire: "123",
};
const kp2: KeyPaire<string, number> = {
  key: "123",
  paire: 123,
};
let array: Array<number> = [123, 123];
