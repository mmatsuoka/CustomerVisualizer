/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * formSample module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojchart',
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
        var viewModel = {
            stringValue: ko.observable("こんにちわ"),
            passwordValue: ko.observable("hogehoge"),
            booleanValue: ko.observable(true),
            optionValues: ["Alpha", "Beta", "Gamma"],
            selectedOptionValue: ko.observable("Gamma"),
            multipleSelectedOptionValues: ko.observable(["Alpha"]),
            radioSelectedOptionValue: ko.observable("Beta")
        };

        return viewModel;

});

