

window.onload =()=>{

  let canvas = document.querySelector('#canvas');
  let context = canvas.getContext('2d');
  let furnitureArray = [];

function drawLayout(){
    axios.get('/api/furniture')
    .then(components => {
      components.data.forEach(component => {
        context.clearRect(0,0,1000,400);
        let img = new Image();
        img.src = component.image;
        let {x,y,width,height,image} = component;
        img.onload = function(){
          context.drawImage(img, x,y, width, height)
        }
      });   
    })
    .catch(err => console.log(err))
  }

  drawLayout();

  const imagesPaths = ['/images/table.png','/images/sink.jpg','/images/sofa.jpg']
  const imagesTitles = ['table','sink','sofa']

  $(".add-component").click(function(e){
    e.preventDefault(e)

    let image = e.currentTarget.id;
    let element = {
      title: imagesTitles[image],
      x:0,
      y:0,
      image: imagesPaths[image],
      width:70,
      height:70,
    };
    axios.post('/api/furniture',element)
          .then(drawLayout())
          .catch(err => console.log(err))
  })

}


