(function (app) {
    let booksService = function ($http, booksApiUrl) {
        let getAll = function () {
            return $http.get(booksApiUrl);
        };
        let getByISBN = function (isbn) {
            return $http.get(booksApiUrl + isbn);
        };
        let update = function (book) {
            return $http.put(booksApiUrl + book.ISBN, book);
        };
        let create = function (book) {
            return $http.post(booksApiUrl, book);
        };
        let destroy = function (book) {
            return $http.delete(booksApiUrl + book.ISBN);
        };
        return {
            getAll: getAll,
            getByISBN: getByISBN,
            update: update,
            create: create,
            destroy: destroy
        };
    };
    app.factory('booksService', booksService);
}(angular.module('bookShelf')));
