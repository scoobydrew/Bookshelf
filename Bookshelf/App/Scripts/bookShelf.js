(function () {
    let app = angular.module("bookShelf", ["ngRoute"]); // Including the routing library means that we introduce a dependency to our app
    let config = function ($routeProvider) {
        $routeProvider
            .when("/list",
                { templateUrl: "/app/views/list.html" })
            .when("/details/:isbn",
                { templateUrl: "/app/views/details.html" })
            .otherwise(
                { redirectTo: "/list" });
    }
    app.config(config);
    app.constant("booksApiUrl", "/api/books/")
}());
