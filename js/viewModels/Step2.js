/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Step2 module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    function TrainData() {
        this.currentStepValue = ko.observable('stp2');
        this.stepArray =
                ko.observableArray(
                        [{label: 'Step One', id: 'stp1'},
                            {label: 'Step Two', id: 'stp2'},
                            {label: 'Step Three', id: 'stp3'},
                            {label: 'Step Four', id: 'stp4'},
                            {label: 'Step Five', id: 'stp5'}]);
    }
    ;

    this.currentStepValueText = function () {
        return ($("#train").ojTrain("getStep", trainModel.currentStepValue())).label;
    };

    var trainModel = new TrainData();

    return trainModel;

    /*
     $(function() {
     ko.applyBindings(trainModel, document.getElementById('train-container'));
     });
     */
});
