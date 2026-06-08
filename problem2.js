function add() {
  let total = 0;

  for (let i = 1; i <= 20; i = i + 1) {
    total = total + i;
  }

  return total;
}

const result = add();
console.log(result);