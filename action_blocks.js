'use strict';
//input.setAlign(Blockly.ALIGN_RIGHT);
//input.appendField('End');


// Actions (Operations Block in UI)
//boolean action
Blockly.Blocks['action_boolean'] = {
    init: function() {
      this.jsonInit({
  "type": "action_boolean",
  "lastDummyAlign0": "RIGHT",
  "message0": "Operation %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Boolean",
      "options": [
        [
          "True",
          "OPTIONNAME1"
        ],
        [
          "False",
          "OPTIONNAME2"
        ],
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
});
    }
  };

//Numeric action block

Blockly.Blocks['action_numeric'] = {
    init: function() {
      this.jsonInit({
  "type": "action_numeric",
  "message0": "Numeric action %1 %2  %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "operations_dropdown",
      "options": [
        [
          "<",
          "Bigger"
        ],
        [
          ">",
          "Smaller"
        ],
        [
          "=",
          "Equal"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "numeric_value",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
});
    }
  };

//List and arrays actions 
Blockly.Blocks['action_list'] = {
    init: function() {
      this.jsonInit({
  "type": "action_list",
  "lastDummyAlign0": "RIGHT",
  "message0": "List action %1",
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
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
});
    }
  };


//simple action
Blockly.Blocks['operator_simple_action'] = {
    init: function() {
      this.jsonInit({
  "type": "block_type",
  "message0": "Simple action %1",
  "args0": [
    {
      "type": "input_dummy"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
});
  }
};