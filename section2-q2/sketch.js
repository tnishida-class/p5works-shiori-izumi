// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
      console.log(i, j); // 補足： i,j の変化がわかりやすくなるように入れています
      rect(i * 4, j * 4, 5, 5);
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
