angular.module("App",["firebase"]).controller("afController",["$scope","$firebase",function($scope,$firebase){

    var ref = new Firebase("database here")

    $scope.comments = $firebase(ref);
    //$scope.username = 'Guest' + Math.floor(Math.random() * 101);

    $scope.addComment = function(e){
        if(e.keyCode != 13) return;

        $scope.comments.$add({
            from: $scope.username,
            body:$scope.newComment,
            Date: new Date()
        });

        $scope.newComment ="";
    }
}
]);
