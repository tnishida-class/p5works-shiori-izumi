// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j) % 2 == 1){fill('gray');}else{fill(255);}
      //if(j<2){fill('red');ellipse(3,3, 4);//fill('red');}



      // ここを変えます
      console.log(i, j); // 補足： i,j の変化がわかりやすくなるように入れています
      rect(size*i, size*j, size, size);

      if(j<3 && (i+j)%2==1){fill('red');ellipse(size*i+12,size*j+12, 20);}
      if(4<j && (i+j)%2==1){fill('black');ellipse(size*i+12,size*j+12, 20);}

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)


  }
}}
