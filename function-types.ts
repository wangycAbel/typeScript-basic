function add(x: number, y: number, z?: number): number {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
}
add(1, 2); // 3 number

const add1 = (x: number, y: number, z?: number): number => {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
};
let addRes: ISum = add1;

interface ISum {
  (x: number, y: number, z?: number): number;
}
