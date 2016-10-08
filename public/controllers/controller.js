/*function AppCtrl(){
	console.log("Hello World from controller")
}
*/

var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope', '$http', function($scope, $http){

var refresh = function(){
	$http.get('/contactlist').success(function(response){

	console.log("I got data requested");
	$scope.contactlist = response;
	$scope.contact = "";
	});	 	
};

refresh();

$scope.addContact = function(){
	console.log($scope.contact);
	$http.post('/contactlist', $scope.contact).success(function(response){
		 console.log(response);
		 refresh();
	});
};
console.log("Hello World From Controller");
/*person1 = {
	name:'John',
	email:'John@email1.com',
	number:'(111)-343-4343'
};
person2 = {
	name:'Maya',
	email:'Maya@email2.com',
	number:'(133)-376-7777'
};
person3 = {
	name:'Rock',
	email:'Rock@email3.com',
	number:'(445)-444-9989'
};

var contactlist = [person1, person2, person3];
*/
//$scope.contactlist = contactlist;

$scope.remove = function(id){
	console.log(id);
	$http.delete('/contactlist/' + id).success(function(response){
		 refresh();
	});
};

$scope.edit = function(id){
	console.log(id);
	$http.get('/contactlist/' + id).success(function(response){
		 $scope.contact = response;
	});
};

$scope.update = function(){
	console.log($scope.contact._id);
	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
		refresh();
	});
};

$scope.deselect = function(){
	$scope.contact = "";
};

}] );

