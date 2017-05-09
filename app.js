console.log('angular is fun');

var myApp = angular.module( 'myApp',[]);

myApp.controller('podOne', function(){
//veiw model
var vm = this;

vm.aShizz = 'Looking to crush this angular shizzz, today'
vm.bGates = 'a true engineer is born!';

vm.name = '';

});
