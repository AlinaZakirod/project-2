const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost/project-2', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
const Furniture = require('../models/Furniture');
const furnitureArray = [
  { 
    title: 'table',
    x: 0,
    y: 0,
    image: '/images/table.png',
    width: 50,
    height: 50
  },
  { 
    title: 'sink',
    x: 140,
    y: 0,
    image: '/images/sink.jpg',
    width: 50,
    height: 50
  },
  { 
    title: 'sofa',
    x: 280,
    y: 0,
    image: '/images/sofa.jpg',
    width: 50,
    height: 50
  }
]
Furniture 
        .create(furnitureArray)
        .then(data => console.log(data))
        .catch(err => console.log('Something whent wrong while creating celebrity'));