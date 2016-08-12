(function (app) {
    var EditController = function ($scope, booksService) {
        let self = this;
        this.isEditable = function () {
            return self.parent.edit && self.parent.edit.book;
        };
        this.cancel = function () {
            self.parent.edit.book = null;
        };
        this.save = function () {
            if (self.parent.books.indexOf(self.parent.edit.book.ISBN) !== -1) {
                self.updateBook();
            } else {
                self.createBook();
            }
        };
        this.updateBook = function () {
            booksService.update(self.parent.edit.book)
                .then(function () {
                    angular.extend(self.parent.book, self.parent.edit.book);
                    self.parent.edit.book = null;
                });
        };
        this.createBook = function () {
            booksService.create(self.parent.edit.book)
                .then(function (book) {
                    self.parent.books.push(book);
                    self.parent.edit.book = null;
                })
        }
    }
    app.controller("EditController", EditController);
}(angular.module("bookShelf")));