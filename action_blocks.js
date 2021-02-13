'use strict';
//input.setAlign(Blockly.ALIGN_RIGHT);
//input.appendField('End');


// Actions (Operations Block in UI)
//fill pots
Blockly.Blocks['action_fillpots'] = {
    init: function() {
      this.jsonInit({
  "type": "block_type",
  "message0": "Fill Container %1",
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


//emergency Stop
Blockly.Blocks['action_emergencystop'] = {
    init: function() {
      this.jsonInit({
  "type": "block_type",
  "message0": "Stop immediately %1",
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