window.onload =()=>{
  let canvas = document.querySelector('#myCanvas');
  let context = canvas.getContext('2d');


  // let img = new Image();
  // img.src = {{furnitureObject[0].image}}

  // draw all rects with strokes
ctx.strokeRect(20,20,100,200);
ctx.strokeRect(90,110,75,50);

// set compositing to erase existing drawings 
// where the new drawings are drawn
ctx.globalCompositeOperation='destination-out';

// fill all rects
// This "erases" all but the outline stroke
ctx.fillRect(20,20,100,200);
ctx.fillRect(90,110,75,50);


}