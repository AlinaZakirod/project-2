
let img = new Image();
img.src = "/images/sink.jpg"




window.onload =()=>{
  let canvas = document.querySelector('#myCanvas');
  let context = canvas.getContext('2d');
  axios.get('/api/furniture')
  .then(allFurniture =>{
  console.log(allFurniture.data)
  
  })
  .catch(err=>next(err))
  context.drawImage(img,0,0);



}

