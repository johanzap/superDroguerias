'use strict';

(function() {

class MainController {

  constructor() {
    this.articles=[{
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageiption:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      },
      {
        imageUrl:"assets/images/medicamento.jpg",
        name:"Producto 1",
        description:"Lorem ipsum tatra la la",
        price:100000,
        laboratory:"Germa66.ltda"
      }];
  }
}

angular.module('superDrogueriasApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
    controllerAs:"vm"
  });

})();
