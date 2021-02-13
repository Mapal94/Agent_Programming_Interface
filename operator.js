// custom blocks
'use strict';


// structure block
Blockly.Blocks['structure_block'] = {
  init: function() {
	this.jsonInit({
  "type": "structure_block",
  "message0": "When %1 %2 %3 Do %4",
  "args0": [
    {
      "type": "input_value",
      "name": "Triggering_Event",
	  "check": ["Belief", "Operator"]
    },
    {
      "type": "input_value",
      "name": "context1",
	  "check": ["Belief", "Operator"]
    },
    {
      "type": "input_value",
      "name": "context2",
	  "check": ["Belief", "Operator"]
    },
    {
      "type": "input_statement",
      "name": "Operations",
	  "check": ["Action", "Operator"]
    }
  ],
  "inputsInline": false,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
});
  }
};


//user value input
Blockly.Blocks['user_textinput'] = {
  init: function() {
	this.jsonInit({
  "type": "user_textinput",
  "message0": "%1",
  "args0": [
    {
      "type": "field_input",
      "name": "FIELDNAME",
      "text": "default text",
      "spellcheck": false
    }
  ],
  "output": null,
  "colour": 0,
});
  }
};



//blief deletion
Blockly.Blocks['belief_deletion'] = {
  init: function() {
	this.jsonInit({
  "type": "text_length",
    "message0": "Agent does not believe %1",
    "args0": [
        {
          "type": "input_value",
          "name": "NUMBER_TO_CHECK",
          "check": ["Belief", "Operator"],
        }
	],
  "inputsInline": true,
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
});
  }
};



//Plan ends
Blockly.Blocks['operator_plan_end'] = {
    init: function() {
      this.jsonInit({
  "type": "block_type",
  "message0": "Plan end %1",
  "args0": [
    {
      "type": "input_dummy"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
});
  }
};



//communicate to 
Blockly.Blocks['communicate_to'] = {
  init: function() {
	this.jsonInit({
  "type": "communicate_to",
  "message0": "Communicate to %1 %2 %3 that %4 %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "AGENTNAME",
      "options": [
        [
          "Agent1",
          "AGENTNAME1"
        ],
        [
          "Agent2",
          "AGENTNAME2"
        ],
        [
          "Agent3",
          "AGENTNAME3"
        ],
        [
          "Agent4",
          "AGENTNAME4"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
} );
  }
};



