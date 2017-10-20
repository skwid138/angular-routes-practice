myApp.service('HighFiveService', function( ){
    console.log('in HighFiveService');
    
    var self = this;

    self.totalFives = {total: 0};

    self.incTotal = function() {
        self.totalFives.total++;
        return self.totalFives.total;
    };

    // generates a random number 1-10
    self.randomNumber = function( ) {
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        return randomNumber;
    }; // end randomNumber

    // compare skill vs quality
    self.compareNumber = function(quality, skill, successful) {
        self.totalFives ++;
        if (quality >= skill) {
            successful ++;
        }
        return successful;
    }; // end compareNumber

}); // end HighFiveService