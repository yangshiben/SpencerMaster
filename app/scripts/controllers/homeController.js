/**
 * Created by yangshibin on 2017/7/17.
 */

var app = angular.module('SpencerApp');
app.controller('HomeController', function ($scope) {
    $scope.loginInfo = {
        email: '',
        password: ''
    };
    $scope.showModal = function (id) {
        $('#' + id).modal({
            backdrop: 'static',
            keyboard: false
        });
    }
    $scope.loginDo = function () {

    }
});