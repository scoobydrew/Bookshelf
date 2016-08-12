(function (app) {
    var DetailsController = function ($scope, $http, $routeParams) {
        let self = this;
        let isbn = $routeParams.isbn;
        $http.get("/api/books/" + isbn)
            .then((response) => {
                self.book = response.data;
            });
    };
    DetailsController.$inject = ['$scope', '$http', '$routeParams'];

    app.controller("DetailsController", DetailsController);
}(angular.module("bookShelf")));