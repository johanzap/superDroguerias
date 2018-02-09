'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Medicamentos',
    'state': 'main'
  },
  {
    'title': 'CuidadoCapilar',
    'state': 'main'
  },
  {
    'title': 'Cuidado de bebe',
    'state': 'main'
  },
  {
    'title': 'Aseo personal',
    'state': 'main'
  },
  {
    'title': 'Tintes',
    'state': 'main'
  },
  {
    'title': 'Aseo Oral',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor($scope) {
    this.mostrar = false;
    this.$scope = $scope;
    this.valor = "Inicial";
    this.item1();
    this.item2();
    this.item3();
    this.item4();
    this.item5();
    this.item6();
  }
  item1(){
    $(".menuItem1").hover(
      () => {
        this.mostrar = true;
        this.valor = "MegaMenu Producto 1";
        this.$scope.$apply();
        console.log(this.valor);
      },
      () => {
        this.mostrar = false;
        this.valor = "";
        this.$scope.$apply();
      });
  }

  item2(){
    $(".menuItem2").hover(
      () => {
        this.mostrar = true;
        this.valor = "MegaMenu Producto 2";
        this.$scope.$apply();
        console.log(this.valor);
      },
      () => {
        this.mostrar = false;
        this.valor = "";
        this.$scope.$apply();
      });
  }

  item3(){
    $(".menuItem3").hover(
      () => {
        this.mostrar = true;
        this.valor = "MegaMenu Producto 3";
        this.$scope.$apply();
        console.log(this.valor);
      },
      () => {
        this.mostrar = false;
        this.valor = "";
        this.$scope.$apply();
      });
  }

  item4(){
    $(".menuItem4").hover(
      () => {
        this.mostrar = true;
        this.valor = "MegaMenu Producto 4";
        this.$scope.$apply();
        console.log(this.mostrar);
      },
      () => {
        this.mostrar = false;
        this.valor = "";
        this.$scope.$apply();
      });
  }

  item5(){
    $(".menuItem5").hover(
      () => {
        this.mostrar = true;
        this.valor = "MegaMenu Producto 5";
        this.$scope.$apply();
        console.log(this.mostrar);
      },
      () => {
        this.mostrar = false;
        this.valor = "";
        this.$scope.$apply();
      });
  }

  item6(){
    $(".menuItem6").hover(
      () => {
        this.mostrar = true;
        this.valor = "MegaMenu Producto 6";
        this.$scope.$apply();
        console.log(this.mostrar);
      },
      () => {
        this.mostrar = false;
        this.valor = "";
        this.$scope.$apply();
      });
  }
}

angular.module('superDrogueriasApp')
  .controller('NavbarController', NavbarController);
