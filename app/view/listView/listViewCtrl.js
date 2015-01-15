/**
 * Created by gsposito on 15/01/2015.
 */
app.controller('listViewController',
    function listViewController($scope, guestApi){
        $scope.helloAngular = "LIST VIEW controller angular working";

        $scope.guestList = guestApi.getAllGuests();
    }
);