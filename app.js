
//BUDGET CONTROLLER
var budgetController = (function(){


})();

//UI CONTROLLER
var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBTN: '.add__btn'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(inputDescription).value,
        value: document.querySelector(inputeValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function() {

    var input = UICtrl.getInput();
    console.log(input);
  }

  document.querySelector(DOM.inputBTN).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keycode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
