(function (app) {
    let ListController = function ($scope, $http) {
        let self = this; // we need to assign this to self, otherwise it will be out of scope when the http promise returns.
        $http.get("/api/books")
             .then(function (response) {
                 self.books = response.data;
             });
    };
    ListController.$inject = ['$scope', '$http'];
    // Angular will automatically be able to inject parameters to the controller based on the parameter name.
    // But using $inject is best practice because it is safe against minifiers that will shorten variable names but not string literals.
    app.controller("ListController", ListController);
}(angular.module("bookShelf")));