;(function(){

  "use strict";

  angular
    .module("fen.productsList", [
      "ngRoute"
    ])
    .controller("ProductsListCtrl", ProductsListController)
    .config(ProductsListConfig)


  // @ngInject
  function ProductsListController($rootScope) {

    $rootScope.Page = "products-list";
    var s = this;

    // $(".b-global-container, .b-scroll").mCustomScrollbar();

    var jsonProductsDate = [
      {
        "_id": "58cd1ab743ad4a0886245c65",
        "index": 0,
        "picture": "http://placehold.it/300x300",
        "cost": 803,
        "name": {
          "name": "Elnora",
          "theme": "Woods"
        }
      },
      {
        "_id": "58cd1ab71795930a2c47b43a",
        "index": 1,
        "picture": "http://placehold.it/300x300",
        "cost": 825,
        "name": {
          "name": "Molly",
          "theme": "Lopez"
        }
      },
      {
        "_id": "58cd1ab79c02b4165e511e6b",
        "index": 2,
        "picture": "http://placehold.it/300x300",
        "cost": 826,
        "name": {
          "name": "Franklin",
          "theme": "Knapp"
        }
      },
      {
        "_id": "58cd1ab7f4ed282b92e92d77",
        "index": 3,
        "picture": "http://placehold.it/300x300",
        "cost": 747,
        "name": {
          "name": "Kasey",
          "theme": "Hooper"
        }
      },
      {
        "_id": "58cd1ab7722549698960d21a",
        "index": 4,
        "picture": "http://placehold.it/300x300",
        "cost": 746,
        "name": {
          "name": "Marina",
          "theme": "Daniel"
        }
      },
      {
        "_id": "58cd1ab7a43bc6b1c1f44ac3",
        "index": 5,
        "picture": "http://placehold.it/300x300",
        "cost": 640,
        "name": {
          "name": "Banks",
          "theme": "Travis"
        }
      },
      {
        "_id": "58cd1ab7c363dad1a8e3dc1e",
        "index": 6,
        "picture": "http://placehold.it/300x300",
        "cost": 573,
        "name": {
          "name": "Church",
          "theme": "Alexander"
        }
      },
      {
        "_id": "58cd1ab71dc4564ad83baaa2",
        "index": 7,
        "picture": "http://placehold.it/300x300",
        "cost": 508,
        "name": {
          "name": "Gwendolyn",
          "theme": "Terrell"
        }
      },
      {
        "_id": "58cd1ab74499429c60f0d399",
        "index": 8,
        "picture": "http://placehold.it/300x300",
        "cost": 681,
        "name": {
          "name": "Eve",
          "theme": "Whitney"
        }
      },
      {
        "_id": "58cd1ab7f8d8d8b9fcbe255c",
        "index": 9,
        "picture": "http://placehold.it/300x300",
        "cost": 563,
        "name": {
          "name": "Kristie",
          "theme": "Guy"
        }
      },
      {
        "_id": "58cd1ab7b1016e4dfb233add",
        "index": 10,
        "picture": "http://placehold.it/300x300",
        "cost": 580,
        "name": {
          "name": "Vanessa",
          "theme": "Jimenez"
        }
      },
      {
        "_id": "58cd1ab7e35e979afd984238",
        "index": 11,
        "picture": "http://placehold.it/300x300",
        "cost": 694,
        "name": {
          "name": "Cindy",
          "theme": "Strong"
        }
      },
      {
        "_id": "58cd1ab7a858813f36b569c7",
        "index": 12,
        "picture": "http://placehold.it/300x300",
        "cost": 655,
        "name": {
          "name": "Morton",
          "theme": "Sutton"
        }
      },
      {
        "_id": "58cd1ab7d9a22dd4503ee142",
        "index": 13,
        "picture": "http://placehold.it/300x300",
        "cost": 844,
        "name": {
          "name": "Parsons",
          "theme": "Bolton"
        }
      },
      {
        "_id": "58cd1ab7d36c119b525825d0",
        "index": 14,
        "picture": "http://placehold.it/300x300",
        "cost": 770,
        "name": {
          "name": "Mccarty",
          "theme": "Mercado"
        }
      },
      {
        "_id": "58cd1ab7741a67061c4e1df3",
        "index": 15,
        "picture": "http://placehold.it/300x300",
        "cost": 710,
        "name": {
          "name": "Luz",
          "theme": "Waters"
        }
      },
      {
        "_id": "58cd1ab738fd65dda98fd894",
        "index": 16,
        "picture": "http://placehold.it/300x300",
        "cost": 846,
        "name": {
          "name": "Mclean",
          "theme": "Hill"
        }
      },
      {
        "_id": "58cd1ab70a2d874d1cc71498",
        "index": 17,
        "picture": "http://placehold.it/300x300",
        "cost": 888,
        "name": {
          "name": "Joy",
          "theme": "Ward"
        }
      },
      {
        "_id": "58cd1ab76a753bb764f47403",
        "index": 18,
        "picture": "http://placehold.it/300x300",
        "cost": 726,
        "name": {
          "name": "Conner",
          "theme": "Rodriguez"
        }
      },
      {
        "_id": "58cd1ab73c36b604d5a39741",
        "index": 19,
        "picture": "http://placehold.it/300x300",
        "cost": 783,
        "name": {
          "name": "Dionne",
          "theme": "Hall"
        }
      },
      {
        "_id": "58cd1ab7c26407f8907dd30c",
        "index": 20,
        "picture": "http://placehold.it/300x300",
        "cost": 772,
        "name": {
          "name": "Baker",
          "theme": "Schneider"
        }
      },
      {
        "_id": "58cd1ab79c8814e4e3c4343d",
        "index": 21,
        "picture": "http://placehold.it/300x300",
        "cost": 720,
        "name": {
          "name": "Jannie",
          "theme": "Mcdowell"
        }
      },
      {
        "_id": "58cd1ab7b9014a130fee4173",
        "index": 22,
        "picture": "http://placehold.it/300x300",
        "cost": 877,
        "name": {
          "name": "Mccall",
          "theme": "Blackburn"
        }
      },
      {
        "_id": "58cd1ab72a2af3e0687c61b1",
        "index": 23,
        "picture": "http://placehold.it/300x300",
        "cost": 580,
        "name": {
          "name": "Meghan",
          "theme": "Shannon"
        }
      },
      {
        "_id": "58cd1ab75023c24a2836c40e",
        "index": 24,
        "picture": "http://placehold.it/300x300",
        "cost": 694,
        "name": {
          "name": "Ayala",
          "theme": "Bridges"
        }
      },
      {
        "_id": "58cd1ab731741e30c26d6f54",
        "index": 25,
        "picture": "http://placehold.it/300x300",
        "cost": 510,
        "name": {
          "name": "Angel",
          "theme": "Guerra"
        }
      },
      {
        "_id": "58cd1ab701d1ed494c877960",
        "index": 26,
        "picture": "http://placehold.it/300x300",
        "cost": 685,
        "name": {
          "name": "Briggs",
          "theme": "Long"
        }
      },
      {
        "_id": "58cd1ab7de9c65d548d3e954",
        "index": 27,
        "picture": "http://placehold.it/300x300",
        "cost": 689,
        "name": {
          "name": "Greer",
          "theme": "Gray"
        }
      },
      {
        "_id": "58cd1ab77bae95647e6d6275",
        "index": 28,
        "picture": "http://placehold.it/300x300",
        "cost": 842,
        "name": {
          "name": "Brenda",
          "theme": "Berry"
        }
      }
    ]

    s.productsList = jsonProductsDate;

    s.productOnes = "lalala"

  }

  // @ngInject
  function ProductsListConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when("/products-list", {
        templateUrl: "app/products-list/products-list.html",
        controller: "ProductsListCtrl",
        controllerAs: "plc"
      })
      .otherwise({ redirectTo: "/" });

    // $locationProvider.html5Mode(false).hashPrefix('');

  }

})();
