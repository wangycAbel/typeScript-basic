type plus = (x: number, y: number) => number;
let sum: plus = (x: number, y: number): number => {
  return x + y;
};
const result = sum(1, 2);

interface IName {
  name: string;
}
type IPerson = IName & { age: number };

let person: IPerson = {
  name: "abel",
  age: 1,
};
