type IOperation = "plus" | "minus";
//type ICalculater = (operation: IOperation, number: number[]) => number;
interface ICalculater {
  (operation: IOperation, number: number[]): number;
  plus: (number: number[]) => number;
  minus: (number: number[]) => number;
}
declare const calculater: ICalculater;

export default calculater
