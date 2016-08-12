(function (app) {
    let ListController = function ($scope, booksService) {
        let self = this;
        booksService
            .getAll()
            .then(function (response) {
                self.books = response.data;
            });

        this.create = function () {
            self.edit = {
                book: {
                    ISBN: "",
                    Title: "",
                    Author: "",
                    PublishYear: new Date().getFullYear(),
                    Copies: 1
                }
            };
        }

        this.delete = function (book) {
            booksService.destroy(book)
                .then(function () {
                    removeBookByISBN(book.ISBN);
                });
        };
        let removeBookByISBN = function (isbn) {
            let i = 0;
            for(let book of self.books) {
                if (book.ISBN === isbn) {
                    self.books.splice(i, 1);
                    break;
                }
                i++;
            }
        }
    };
    ListController.$inject = ['$scope', 'booksService'];
    app.controller("ListController", ListController);
}(angular.module("bookShelf")));