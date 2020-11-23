// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",20,40,"#e6e6fa",0);
}

function balloon(t,x,y,tc,bc){
  let w = textWidth(t);
  let h = textAscent() + textDescent();//高さと幅
  let p = 5;//余白の大きさ
  fill(tc);
  triangle(x,y+h,x+p,y+h+6,x-p,y+h+8);
  rect(x, y, w + p * 2 , h + p * 2,8);
  fill(bc);
  text(t, p+x, h + p+y);
}
