function jumpingOnClouds(c) {
  let i = 0;
  let movs = 0;
  //0 0 1 0 0 1 0
  while (true) {
      if (i < c.length && c[i + 2] == 0) {
          i += 2;
      } else if (c[i + 1] == 0) {
          i++;
      } else {
          break;
      }
      movs++;
  }
  return movs;
}