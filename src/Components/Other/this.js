export const arrowfunTest = () =>
  console.log("'This' in Const function in module : ", this);

export function functionTest() {
  console.log("'This' in function in module : ", this);
}

export class classTest {
  propClass = "prop value in a class";
  constructor() {
    console.log("'This' in Constructor : ", this);
  }

  simpleFun() {
    console.log("'This' in class method : ", this);
  }

  parentFun() {
    console.log("'This' in class method with nested function : ", this);
    function childFun() {
      console.log("'This' in nested function of a class method : ", this);
    }
    const childConstFun = () =>
      console.log("'This' in nested arrow function of a class method : ", this);
    childFun();
    childConstFun();
  }
}
