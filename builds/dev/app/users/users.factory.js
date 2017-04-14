;(function(){

  "use strict";

  angular
    .module("fen.users")
    .factory("users", UsersFactory)



  // @ngInject
  function UsersFactory($q, $http, $firebaseArray, $firebaseObject) {
    var o = {};
    var users = null;
    var ref = firebase.database().ref();
    var refUsers = ref.child("users");


    o.getUsers = function () {
      return $firebaseArray(refUsers).$loaded(function (_d) {
        return _d;
      });
    };

    o.getUser = function (_id) {
      return $firebaseObject(refUsers.child(_id)).$loaded();
    };

    o.saveUser = function (_user) {
      var user = $firebaseObject(refUsers.child(_user.id));
      return user.$loaded(function (_dbuser) {
        _dbuser.name = _user.name;
        _dbuser.surname = _user.surname;
        return _dbuser.$save();
      })
    };

    o.removeUser = function (_id) {
      return $firebaseObject(refUsers.child(_id)).$remove();
    };

    o.createBlankUser = function () {
      return $firebaseArray(refUsers).$add({
        name:"",
        surname:"",
        registered: firebase.database.ServerValue.TIMESTAMP,
        last_visit: firebase.database.ServerValue.TIMESTAMP
      }).then(function (_ref) {
        return $firebaseObject(_ref).$loaded();
      })
    };

    return o
  }

})();