;(function(){

    "use strict";

    angular
        .module("fen.dbc", [
          "firebase",
        ])
        .factory("dbc", dbcFactory)
        .controller("DbcCtrl", DbcController)


      // @ngInject
      function dbcFactory ($scope) {
        // var o = {};
        // var ref = firebase.initializeApp(FURL);
        // o.getRef = function () {
        //
        //   return ref;
        // };
        //
        // return o;
      }
      // @ngInject
      function DbcController ($scope) {
        // var ref = firebase.database().ref();
        // // download the data into a local object
        // $scope.data = $firebaseObject(ref);
        // var syncObject = $firebaseObject(ref);
        // // synchronize the object with a three-way data binding
        // // click on `index.html` above to see it used in the DOM!
        // syncObject.$bindTo($scope, "data");
        // console.log($scope.data)
      }

})();