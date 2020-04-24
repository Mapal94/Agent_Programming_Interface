'use strict';
//input.setAlign(Blockly.ALIGN_RIGHT);
//input.appendField('End');

//Output needs to be Action

Blockly.Blocks['action_turnright'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "turn right %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action", "Operator"],
        }
    ],
    "output": "Action",
    "colour": 160,
    "tooltip": "Returns number of letters in the provided text.",
  });
    }
  };

  Blockly.Blocks['action_turnleft'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "turn left %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action", "Operator"],
        }
    ],
    "output": "Action",
    "colour": 160,
  });
    }
  };

  Blockly.Blocks['action_grip'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "grip %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action", "Operator"],
        }
    ],
    "output": "Action",
    "colour": 160,
  });
    }
  };

  Blockly.Blocks['action_release'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "release %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action", "Operator"],
        }
    ],
    "output": "Action",
    "colour": 160,
  });
    }
  };

  Blockly.Blocks['action_lightblue'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "light blue %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action", "Operator"],
        }
    ],
    "output": "Action",
    "colour": 160,
  });
    }
  };

  Blockly.Blocks['action_lightgreen'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "light green %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action", "Operator"],
        }
    ],
    "output": "Action",
    "colour": 160,
  });
    }
  };

  Blockly.Blocks['action_lightoff'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "light off %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action", "Operator"],
        }
    ],
    "output": "Action",
    "colour": 160,
  });
    }
  };

  Blockly.Blocks['action_lighton'] = {
    init: function() {
      this.jsonInit({
    "type": "text_length",
    "message0": "light on %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Action", "Operator"],
        }
    ],
    "output": "Action",
    "colour": 160,
  });
    }
  };