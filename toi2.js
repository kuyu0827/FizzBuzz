// 1から20までの数をループする
for (let i = 1; i <= 20; i++) {
  // 3と5の両方の倍数の場合
  if (i % 3 === 0 && i % 5 === 0) {
    // FizzBuzzと表示する
    console.log("FizzBuzz");
  }
  // 3の倍数の場合
  else if (i % 3 === 0) {
    // Fizzと表示する
    console.log("Fizz");
  }
  // 5の倍数の場合
  else if (i % 5 === 0) {
    // Buzzと表示する
    console.log("Buzz");
  }
  // それ以外の場合
  else {
    // 数をそのまま表示する
    console.log(i);
  }
}