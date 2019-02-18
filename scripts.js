const myApp = {}

myApp.first = [
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

myApp.second = [
  'the Crunch',
  'Crasher',
  'Slackjaw',
  'the Massive'
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

myApp.init = function() {
  myApp.randomizeField($('input[id=first-name]'), myApp.first);
  myApp.randomizeField($('input[id=second-name]'), myApp.second);
  myApp.randomizeField($('input[id=car-name]'), myApp.cars);
}

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

// create string from fields and displays it
myApp.generateString = function() {
  
  const first = $('input[id=first-name]').val();
  const second = $('input[id=second-name]').val();
  const car = $('input[id=car-name]').val();
  const string = `${first} ${second}, driver of the ${car}!`;
  $('.generated-name h3').text(string);
}

// check if the text inputs are letters or empty strings
myApp.checkInput = function() {
  const input = []

  $.each($('input[type=text]'), function () {
    input.push($(this).val().charAt(0));
  })

  const regex = /^[a-zA-Z]+$/;
  if (input.match(regex) || input === '') {
    return true
  } else {
    alert("Oops, the inputted text can only start with a letter!");
    return false;
  };
};

// given a text field,
  // gets the first character and returns it
myApp.getFirstChar = function(textField) {
  return textField.val().charAt(0);
}

// given a character and array,
  // filter array based on character inputted and returns a filtered array
myApp.filterArrayByCharacter = function (character, nameArray) {
  const filteredArray = [];
  const regex = /^[a-zA-Z]+$/;

  // check if the character is a letter,
  if (character.match(regex)) {
    // if yes, then filter nameArray by the letter
    nameArray.forEach( e => {
      // if the name starts with 'the', 
        // skip it and compare the fourth character (after 'the ')
          // push the name to the filtered array if it's a match
      if (e.substr(0,3) === "the") {
        if (e.charAt(4).toLowerCase() === character.toLowerCase()) {
          filteredArray.push(e);
        };
      // otherwise,
        // compare the first character
          // push the name to the filtered array if it's a match
      } else {
        if (e.charAt(0).toLowerCase() === character.toLowerCase()) {
          filteredArray.push(e);
        };
      };
    });
    return filteredArray;
  } else {
    // if no, then return the unfiltered array
    return nameArray
  }
};

// on form submit,
  // 
$('form').on('submit', function(e) {
  e.preventDefault();

    if ($('input[type=checkbox]:checked')) {
      const checkedFields = [];
      // grab each value attribute from checked checkboxes and place them in an array
        // solution from https://www.tutorialrepublic.com/faq/how-to-get-the-values-of-selected-checkboxes-in-a-group-using-jquery.php
      $.each($('input[type=checkbox]:checked'), function () {
        checkedFields.push($(this).val());
      });

      checkedFields.forEach( e => {
        // use the elements in checkedFields to get the associated input[text]
        const $targetInput = $(`input[id=${e}]`);
        // use the name value for the input[text] to get the associated array
        const inputName = $targetInput.attr('name');
        const charForFilter = myApp.getFirstChar($(`input[name=${inputName}]`));

        const arrayToUse = myApp.filterArrayByCharacter(charForFilter, myApp[inputName])
        myApp.randomizeField($(`input[name=${inputName}]`), arrayToUse);
        
      });
    // then randomize the values of the text inputs
  };

  // call function to generate string
  myApp.generateString();
});


// DOC READY BEGINS
$(function (){
  myApp.init();

// DOC READY ENDS
});
