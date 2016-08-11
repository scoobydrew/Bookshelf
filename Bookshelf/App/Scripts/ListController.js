(function (app) {
    let ListController = function () {
        this.message = "Hello World!";
    }; // Create the controller
    app.controller("ListController", ListController); // Then register it to the app
}(angular.module("bookShelf")));