(function (app) {
    var DetailsController = function ($scope, $routeParams, booksService) {
        let self = this;
        let isbn = $routeParams.isbn;
        booksService
            .getByISBN(isbn)
            .then((response) => {
                self.book = response.data;
            });
        this.edit = function () {
            self.edit.book = angular.copy(self.book);
        };
    };
    DetailsController.$inject = ['$scope', '$routeParams', 'booksService'];

    app.controller("DetailsController", DetailsController);
}(angular.module("bookShelf")));