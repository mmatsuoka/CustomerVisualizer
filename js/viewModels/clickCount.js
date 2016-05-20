/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * clickCount module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function clickCountContentViewModel() {

        var self = this;
        self.numberOfClicks = ko.observable(0);

        self.registerClick = function () {
            self.numberOfClicks(this.numberOfClicks() + 1);
        };

        self.resetClicks = function () {
            self.numberOfClicks(0);
        };

        self.hasClickedTooManyTimes = ko.computed(function () {
            return self.numberOfClicks() >= 5;
        }, this);

    }

    return clickCountContentViewModel;
});
