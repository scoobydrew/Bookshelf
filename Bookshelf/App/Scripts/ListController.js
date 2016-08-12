(function (app) {
    let ListController = function ($scope, booksService) {
        let self = this;
        booksService
            .getAll()
            .then(function (response) {
                self.books = response.data;
            });
    };
    ListController.$inject = ['$scope', 'booksService'];
    app.controller("ListController", ListController);
}(angular.module("bookShelf")));