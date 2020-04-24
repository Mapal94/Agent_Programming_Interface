// custom blocks for the triggering event
'use strict';

Blockly.Blocks['TriggeringEventOperator_is'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "is %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": "Belief",
        }
    ],
    "output": "TriggeringEventOperator",
    "colour": 15,
  });
    }
  };


  Blockly.Blocks['TriggeringEventOperator_not'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "not %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": "Belief",
        }
    ],
    "output": "TriggeringEventOperator",
    "colour": 15,
  });
    }
  };