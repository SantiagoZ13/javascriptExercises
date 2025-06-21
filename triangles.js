let triangleChar = " * ";
let triangleArray = [];
let space = "   ";
function createRectangleTriangle(colums) {
  let triangleCharCount = triangleChar;
  console.log("Crenado triangulo");
  for (let i = 0; i < colums; i++) {
    triangleArray.push(triangleCharCount);
    console.log(triangleArray[i]);
    triangleCharCount = triangleCharCount + triangleChar;
  }
}
function createEquilateralTriangle(colums) {
  let triangleCharCount = triangleChar;
  let spaces = colums;
  console.log("Crenado triangulo");
  for (let i = 0; i < colums; i++) {
    let spaceCount = space.repeat(spaces);
    triangleArray.push(spaceCount + triangleCharCount);
    console.log(triangleArray[i]);
    triangleCharCount = triangleCharCount + triangleChar;
    spaces--;
  }
}

function createTriangle(colums) {
  let triangleCharCount = triangleChar;
  let spaces = colums;
  console.log("Crenado triangulo");
  for (let i = 0; i < colums; i++) {
    let spaceCount = space.repeat(spaces);
    triangleArray.push(spaceCount + triangleCharCount);

    console.log(triangleArray[i]);
    triangleCharCount = triangleCharCount + space + triangleChar;
    spaces--;
  }
}
