// custom belief blocks - output needs to be Belief
'use strict';


//belief boolean
Blockly.Blocks['belief_boolean'] = {
    init: function() {
	//var dropdown = new Blockly.FieldDropdown([['True', 'TRUE'], ['False', 'FALSE']]);
//input.appendField(dropdown, 'MODE');
      this.jsonInit({
  "type": "belief_boolean",
  "lastDummyAlign0": "RIGHT",
  "message0": "Triggering Event %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "boolean",
      "options": [
        [
		  "True",
          "TRUE"
        ],
        [
		  "False",
          "FALSE"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
});
    }
  };


//blief string
 Blockly.Blocks['belief_string'] = {
    init: function() {
      this.jsonInit({
  "type": "belief_string",
  "message0": "String belief %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
});
    }
  };
  
  
//blief list
 Blockly.Blocks['belief_list'] = {
    init: function() {
      this.jsonInit({
  "type": "belief_list",
  "lastDummyAlign0": "RIGHT",
  "message0": "List belief %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "List",
      "options": [
        [
          "option1",
          "OPTIONNAME1"
        ],
        [
          "option2",
          "OPTIONNAME2"
        ],
        [
          "option3",
          "OPTIONNAME3"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
} );
    }
  };
  
  
//belief numeric
 Blockly.Blocks['belief_numeric'] = {
    init: function() {
      this.jsonInit({
  "type": "belief_numeric",
  "message0": "Numeric belief %1 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Operators",
      "options": [
        [
          "<",
          "bigger"
        ],
        [
          ">",
          "smaller"
        ],
        [
          "=",
          "equal"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
} );
    }
  };


