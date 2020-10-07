const player = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
};

const gameB = () => {
    let gameBoard = [];
}

const game = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();