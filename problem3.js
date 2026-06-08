function makeStars(count) {
  if (count === 0) return "";
  return "*" + makeStars(count - 1);
}

function printStars(maxLine) {
  for (let i = 1; i <= maxLine; i = i + 1) {
    const stars = makeStars(i);
    console.log(stars);
  }
}

printStars(4);