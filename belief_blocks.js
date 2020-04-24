// custom belief blocks - output needs to be Belief
'use strict';

  Blockly.Blocks['belief_right'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "Right %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["TriggeringEventOperator", "Operator", "Action"],
        }
    ],
    "output": "Belief",
    "colour": 60,
  });
    }
  };

  Blockly.Blocks['belief_left'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "Left %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["TriggeringEventOperator", "Operator", "Action"],
        }
    ],
    "output": "Belief",
    "colour": 60,
  });
    }
  };


  Blockly.Blocks['belief_blue'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "Blue %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["TriggeringEventOperator", "Operator", "Action"],
        }
    ],
    "output": "Belief",
    "colour": 60,
  });
    }
  };


  Blockly.Blocks['belief_green'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "Green %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["TriggeringEventOperator", "Operator", "Action"],
        }
    ],
    "output": "Belief",
    "colour": 60,
  });
    }
  };