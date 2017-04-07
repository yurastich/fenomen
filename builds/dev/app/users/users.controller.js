;(function(){

  "use strict";

  angular
    .module("fen.users")
    .controller("UsersCtrl", UsersControllerFunction)



  // @ngInject
  function UsersControllerFunction ($rootScope, firebase) {
    // $rootScope.Page = "users";
    // var s = this;
    //
    // s.users = [];
    //
    // users.getUsers().then(function (_data) {
    //   s.users = _data
    // })
    var ref = firebase.database().ref();
    // download the data into a local object
    $rootScope.data = $firebaseObject(ref);
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($rootScope, "data");
    console.log($rootScope.data);
    console.log("lalala");

  }

})();