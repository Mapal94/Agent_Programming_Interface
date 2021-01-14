// custom blocks
'use strict';






Blockly.Blocks['Trying_double_things'] = {
  init: function() {
    this.jsonInit({
      "type": "controls_repeat_ext",
      "message0": "repeat %1 times",
      "args0": [
        {"type": "input_value", "name": "TIMES", "check": "Number"}
      ],
     "message1": "do %1",
     "args1": [
      {"type": "input_statement", "name": "DO"}
     ],
    "previousStatement": "Action",
    "nextStatement": null,
    "colour": 120
   });
  }
};


Blockly.Blocks['Test2'] = {
  init: function() {
    this.jsonInit({
  "type": "text_length",
  "message0": "text2 %1",
  "args0": [
      {
        "type": "input_value",
        "name": "NUMBER_TO_CHECK",
        "check": ["String"],
        "previousStatement": "Action",
        "nextStatement": "Action"
      }
  ],
  "output": "Number"
});
  }
};


Blockly.Blocks['Test1'] = {
  init: function() {
    this.jsonInit({
  "type": "text_length",
  "message0": "text1 %1",
  "args0": [
      {
        "type": "input_value",
        "name": "NUMBER_TO_CHECK",
        "check": ["Number"],
        "previousStatement": "Test2",
        "nextStatement": "Test2"
      }
  ],
  "output": "Boolean"
});
  }
};

Blockly.Blocks['Action_PickLeft'] = {
  init: function() {
    this.jsonInit({
    "type": "math_number_property",
    "message0": "pick left %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": "Number"
        }
    ],
    "output": "Boolean"
  });
}
};




Blockly.Blocks['shit_I_had_a_second_one'] = {
  init: function() {
    this.jsonInit({
      "message0": 'Right %1',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String",
        //  "previousStatement": "null",
        //  "nextStatement": "null",
        }
      ],
      "output": "Number",
      "colour": 360,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['own_creation'] = {
    init: function() {
      this.jsonInit({
        "message0": 'Test %1',
        "args0": [
          {
            "type": "input_value",
            "name": "FIRST",
            "check": "String",
          }
        ],
        "output": "Number",
        "colour": 360,
        "tooltip": "Returns number of letters in the provided text.",
        "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
      });
    }
  };