const myApp = {}

myApp.names = [
  'Accadacca',
  'Arvo',
  'Ankle Biter',
  'Barbie',
  'Bogan',
  'Brekky',
  'Chook',
  'Cobber',
  'Clucky',
  'Dardy',
  'Devo',
  'Drongo',
  'E1',
  'E2',
  'E3',
  'Flannie',
  'Flanno',
  'Furphy',
  'Goon',
  'Galah',
  'Grot',
  'Hoon',
  'Hard Yakka',
  'Heaps',
  'Iffy',
  'I2',
  'I3',
  'Knick',
  'K2',
  'K3',
  'Lappy',
  'Lollie',
  'Legless',
  'Maccas',
  'Moz',
  'M3',
  'Nuddy',
  'Nosh',
  'N3',
  'O1',
  'O2',
  'O3',
  'Pash',
  'Piss',
  'P3',
  'Rakka',
  'Rellie',
  'Rello',
  'Sheila',
  'Slab',
  'Straya',
  'Two-Up',
  'True Blue',
  'Tucker',
  'Uwie',
  'U2',
  'U3',
  'V1',
  'V2',
  'V3',
  'W1',
  'W2',
  'W3',
  'X1',
  'X2',
  'X3',
  'Yonks',
  'Y2',
  'Y3',
  'Z1',
  'Z2',
  'Zed'
];

myApp.cars = [
  'V8-Interceptor',
  'War Rig',
  'Razor Cola',
  'Magnum Opus',
  'BigFoot',
  'Doof Wagon',
  'Gigahorse'
];

// given an array, 
  // randomly generate a number based on array length, 0 inclusive
myApp.generateRand = function(array) {
  return Math.floor(Math.random() * array.length);
};

// given a text field and a name array, 
  // generate a random name from the passed array and displays it in the passed text field
myApp.randomizeField = function(textField, nameArray) {
  const randNum = myApp.generateRand(nameArray);
  textField.val(nameArray[randNum]);
};

myApp.generateString = function() {
  const first = $('input[id=first-name]').val();
  const second = $('input[id=second-name]').val();
  const car = $('input[id=car-name]').val();
  const string = `${first} ${second}, driver of the ${car}!`;
  return string;
}

// on form submit,
  // 
$('form').on('submit', function(e) {
  e.preventDefault();
  const checkedFields = [];
  
  if ($('input[type=checkbox]:checked')) {
    // grab each value attribute from checked checkboxes and place them in an array
      // solution from https://www.tutorialrepublic.com/faq/how-to-get-the-values-of-selected-checkboxes-in-a-group-using-jquery.php
    $.each($('input[type=checkbox]:checked'), function () {
      checkedFields.push($(this).val());
    }); 
    
    // apply random names to associated checkbox fields
    for (let i = 0; i < checkedFields.length; i++) {
      let arrayValue = checkedFields[i];
      myApp.randomizeField($(`input[name=${arrayValue}]`), myApp.names);
    }
  };

  // call function to generate string
  $('.generated-name h3').text(myApp.generateString());
});


// DOC READY BEGINS
$(function (){


// DOC READY ENDS
});
