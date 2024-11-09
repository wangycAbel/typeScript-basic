interface Person {
  readonly id: number; //只读
  name: string;
  age?: number; // 可选
}
let Abel: Person = {
  name: "Abel",
  age: 30,
  id: 1,
};
