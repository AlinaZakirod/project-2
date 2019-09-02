

window.onload =()=>{

  let canvas = document.querySelector('#canvas');
  let context = canvas.getContext('2d');
  // let furnitureArray = [];
  import {array} from "../../routes/component-api-routes.js";

  function drawLayout(){
      axios.get('/api/components')
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

  const imagesPaths = ['/images/table.png','/images/sink.jpg','/images/sofa.jpg'];
  const imagesTitles = ['table','sink','sofa'];

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
    axios.post('/api/components', element)
          .then(drawLayout())
          .catch(err => console.log(err))
  })


  $('#add-layout').click(function(e){
    e.preventDefault(e);
    let title = document.getElementById('layoutTitle').value;
    let layout = {
      theTitle = title,
      array = _furnitureObjects 
    };

    axios.post('/api/layouts', layout)
      .then(drawLayout())
      .catch(err => console.log(err))
  })
}



