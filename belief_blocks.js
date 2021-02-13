// custom belief blocks - output needs to be Belief
'use strict';


//Dropdown js




//belief RobotPositionX
 Blockly.Blocks['belief_RobotPositionX'] = {
    init: function() {
      this.jsonInit({
  "type": "belief_boolean",
  "lastDummyAlign0": "RIGHT",
  "message0": "Robot ready %1",
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

//belief Optical Sensor (is there a cup to fill?)
 Blockly.Blocks['belief_opticalSensorStatus'] = {
    init: function() {
      this.jsonInit({
  "type": "belief_boolean",
  "lastDummyAlign0": "RIGHT",
  "message0": "There is a cup to fill %1",
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


//belief ConveyorHeadStatus (can I fill another cup or is the line blocked?)
 Blockly.Blocks['belief_conveyorHeadStatus'] = {
    init: function() {
      this.jsonInit({
  "type": "belief_boolean",
  "lastDummyAlign0": "RIGHT",
  "message0": "subsequent line is occupied %1",
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



//belief conveyorSpeed
 Blockly.Blocks['belief_conveyorSpeed'] = {
    init: function() {
      this.jsonInit({
  "type": "belief_numeric",
  "message0": "Conveyor speed %1 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Operators",
      "options": [
        [
          "<",
          "BIGGER"
        ],
        [
          ">",
          "SMALLER"
        ],
        [
          "=",
          "EQUAL"
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
  
 
//blief stackLightStatus
 Blockly.Blocks['belief_stackLightStatus'] = {
    init: function() {
      this.jsonInit({
  "type": "belief_list",
  "lastDummyAlign0": "RIGHT",
  "message0": "Stack Light %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "List",
      "options": [
        [
          "red",
          "RED"
        ],
        [
          "orange",
          "ORANGE"
        ],
        [
          "green",
          "GREEN"
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
  
