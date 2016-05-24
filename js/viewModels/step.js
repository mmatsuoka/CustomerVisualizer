require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtrain', 'ojs/ojbutton'],
function(oj, ko, $)
{
	function TrainData() {
		this.currentStepValue = ko.observable('stp2');
		this.stepArray = 
		  ko.observableArray(
			  [{label:'Step One', id:'stp1'},
				 {label:'Step Two', id:'stp2'},
				 {label:'Step Three', id:'stp3'},
				 {label:'Step Four', id:'stp4'}, 
				 {label:'Step Five', id:'stp5'}]);
	};

	this.currentStepValueText = function() {
		return ($("#train").ojTrain("getStep", trainModel.currentStepValue())).label;
	};			
	
	var trainModel = new TrainData();
	
        /*
	$(function() {
		ko.applyBindings(trainModel, document.getElementById('train-container'));
	});
        */
       
       return trainModel;
});