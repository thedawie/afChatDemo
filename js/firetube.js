angular.module("firetube",["firebase"]).controller("Firetube",["$scope","$firebase",function($scope,$firebase){

    var ref = new Firebase("brilliant-fire-7621.firebaseio.com")

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