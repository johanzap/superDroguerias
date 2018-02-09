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
        imageUrl:"assets/images/medicamento.jpg",
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
      }];

      this.emotions=[
      {
        imageUrl:"assets/images/medicamento.jpg",
        description:"La mejor atención personalizada inmediata"
      },{
        imageUrl:"assets/images/medicamento.jpg",
        description:"Revisión diaria del producto con respecto al fisíco"
      },{
        imageUrl:"assets/images/medicamento.jpg",
        description:"Afiliados a Asocurologos y Copdrogas"
      },{
        imageUrl:"assets/images/medicamento.jpg",
        description:"Contamos con óptimas instalaciones locativas"
      }]
  }
}

angular.module('superDrogueriasApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
    controllerAs:"vm"
  });

})();
