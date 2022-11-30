var colors = "f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1-f4f1de-e07a5f-3d405b-81b29a-f2cc8f".split("-").map(a=>"#"+a)
var colors_r = "177e89-084c61-db3a34-ffc857-323031".split("-").map(a=>"#"+a)
var clr
var clr_r

function setup() {
	createCanvas(windowWidth, windowHeight);
  background("#d8e2dc")

  for(var j=0;j<50;j++){
    push()
    translate(random(width),random(height)) //原點設在視窗中心
    clr = colors[int(random(colors.length))]
    clr_r = colors_r[int(random(colors_r.length))]
    drawFlower(clr,clr_r)
  pop()
  }
}


function drawFlower(clr,clr_r){
  push()
    // fill(255,211,33)
    fill(clr_r)
  	ellipse(0, 0, 60);		//以(0,0)為圓心
  	ellipseMode(CORNER)   // 設以左上角開始
    // fill(255,90,61)
    fill(clr)
    for(var i =0;i<16;i++){
      // rect(30, -20, 100, 30)
      ellipse(30, -20, 100, 30);
      line(50,-5,110,-5)
      rotate(PI/8)
    }
	pop()
}

function draw() {
  // background(200);
  
}
