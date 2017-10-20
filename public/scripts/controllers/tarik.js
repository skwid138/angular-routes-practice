myApp.controller('TarikController', function (HighFiveService){
    console.log('in TarikController');
    
    var vm = this;

    // sets skill level on page load
    vm.skill = HighFiveService.randomNumber();

    vm.successful = 0;

    vm.total = HighFiveService.incTotal();

    // generates a number compares it to skill and
    // increments successful if the number is >= skill
    vm.highFive = function( ) {
        console.log('in tc.highFive');
        vm.quality = HighFiveService.randomNumber();
        vm.successful = HighFiveService.compareNumber(vm.quality, vm.skill, vm.successful);
    };

}); // end TarikController