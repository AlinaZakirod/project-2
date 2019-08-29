

window.onload =()=>{
  let canvas = document.querySelector('#myCanvas');
  let context = canvas.getContext('2d');
  let furnitureArray = [];

  axios.get('/api/furniture')
  .then(allFurniture => {
    allFurniture.data.forEach(element => {
      console.log(element)
      let img = new Image();
      img.src = element.image;
      let {x,y,width,height} = element;
      img.onload = function(){
        context.drawImage(img, x,y, width, height)
      }
    });   
  })
  .catch(err => console.log(err))
}

