var t = +readline();

while (t--) {
  var description1 = readline().split(" ");
  var description2 = readline().split(" ");

  var firstNumber = Number(description1[0] + "0".repeat(description1[1]));
  var secondNumber = Number(description2[0] + "0".repeat(description2[1]));

  print(
    firstNumber === secondNumber ? "=" : firstNumber > secondNumber ? ">" : "<"
  );
}
