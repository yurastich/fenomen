;(function(){

  "use strict";

  angular
    .module("fen.users")
    .controller("UsersCtrl", UsersControllerFunction)



  // @ngInject
  function UsersControllerFunction ($scope, users, $stateParams) {

    var s = this;

    s.users = [];

    console.log("$stateParams.authenticate ",$stateParams.authenticate)

    users.getUsers().then(function (_data) {
      s.users = _data;
    });

    $scope.addUser = function () {
      $scope.users.$add({
        email: $scope.newUserEmail,
        password: $scope.newUserPassword,
        name: $scope.newUserName,
        surname: $scope.newUserSurname
      });
    };


    s.editUser = function (_user) {
      s.editFormShow = true;
      s.editingUser = {
        id:_user.$id,
        name:_user.name,
        surname: _user.surname
      }

    };


    s.cancelEditUser = function () {
      s.editFormShow = false;
      s.editingUser = {
        id:null,
        name:null,
        surname: null
      }
    };
    
    s.saveUser = function () {
      users.saveUser(s.editingUser).then(function ( ) {
        s.cancelEditUser();
      })
    };

    s.removeUser = function () {
      users.removeUser(s.editingUser.id).then(function () {
        s.cancelEditUser();
      });
    };

    s.createUser = function () {
      s.editFormShow = true;
      users.createBlankUser().then(function (_d) {
        s.editUser(_d);
      })
    };


    s.cancelEditUser();

  }

})();