// custom blocks
'use strict';

//output needs to be Operator

Blockly.Blocks['operator_end'] = {
  init: function() {
    this.jsonInit({
  "type": "text_length",
  "args0": [
      {
        "type": "input_value",
        "name": "NUMBER_TO_CHECK",
        "check": ["Action"],
        "type": "output_value",
        "name": null,
      }
  ],
  "output": null,
  "colour": 0,
});
  }
};


Blockly.Blocks['operator_smaller'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "< %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action"],
        }
    ],
    "output": "Operator",
    "colour": 0,
  });
    }
  };


  Blockly.Blocks['operator_bigger'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "> %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action"],
        }
    ],
    "output": "Operator",
    "colour": 0,
  });
    }
  };

  Blockly.Blocks['operator_and'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "& %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action"],
        }
    ],
    "output": "Operator",
    "colour": 0,
  });
    }
  };

  Blockly.Blocks['operator_plus'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "+ %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action"],
        }
    ],
    "output": "Operator",
    "colour": 0,
  });
    }
  };