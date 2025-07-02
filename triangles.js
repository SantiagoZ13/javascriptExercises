let triangleChar = " # ";
let triangleArray = [];
let space = "   ";
let inverted = true;

function generateLeftTriangle(colums) {
  let triangleCharCount = triangleChar;
  for (let i = 0; i < colums; i++) {
    if (inverted) {
      triangleArray.unshift(triangleCharCount);
    } else {
      triangleArray.push(triangleCharCount);
    }
    triangleCharCount = triangleCharCount + triangleChar;
  }
  return triangleArray;
}
function generateRightTriangle(colums) {
  let triangleCharCount = triangleChar;
  let spaces = colums;
  for (let i = 0; i < colums; i++) {
    let spaceCount = space.repeat(spaces);
    if (inverted) {
      triangleArray.unshift(spaceCount + triangleCharCount);
    } else {
      triangleArray.push(spaceCount + triangleCharCount);
    }

    triangleCharCount = triangleCharCount + triangleChar;
    spaces--;
  }
  return triangleArray;
}

function generateTriangle(count) {
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      triangleArray.unshift(generateRow(i, count));
    } else {
      triangleArray.push(generateRow(i, count));
    }
  }
  return triangleArray;
}

function generateRow(rowNumber, rowCount) {
  return (
    space.repeat(rowCount - rowNumber) +
    triangleChar.repeat(rowNumber * 2 - 1) +
    space.repeat(rowCount - rowNumber)
  );
}

let generatedTriangles = [];
generatedTriangles.push(
  generateRightTriangle(10),
  generateLeftTriangle(10),
  generateTriangle(10)
);
for (array of generatedTriangles) {
  for (row of array) {
    console.log(row);
  }
}
console.log(generatedTriangles);
