'use strict';

// export blockly namespace locally
	window.addEventListener('blocklyReady', function(event){
		window.Blockly = event.detail.Blockly;
	})
	
	// autoload content if present
	window.addEventListener('blocklyReady', function(){
		Blockly.addChangeListener(function(){
			// NOTE - it seems to be called even if there it no change in the workspace
			document.querySelector('#modifiedStatus').innerText	= 'modified'
		})
		Blockly.mainWorkspace.traceOn(true);
	})
	window.addEventListener('blocklyReady', function(){
		if( location.hash ){
			loadWorkspace()
			setTimeout(function(){
				// should have the viewer iframe ready... 
				//runWorkspace()	
			}, 500);	// couch couch
		}
	})
	document.querySelector('#saveButton').addEventListener('click', function(event){
		function goalFunction() {
		  alert("Congratulations on completing the task! The plan can not be saved. Please take a screenshot of oyur");
		}

	})
	document.querySelector('#resetButton').addEventListener('click', function(event){
		resetWorkspace()
		
		var viewIframe	= document.querySelector('iframe.viewFrame')
		viewIframe.contentWindow.location.reload()
	})
	
// Check if DOM is the right way to work (DOM XML could be fun) but it doesn't have to be...

	function saveWorkspace(){
		var xmlDom	= Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
		var xmlText	= Blockly.Xml.domToText(xmlDom)
		window.location.hash	= encodeURIComponent(xmlText)
		
		// changed modifiedStatus
		document.querySelector('#modifiedStatus').innerText	= 'saved'
	}
	function loadWorkspace(){
	  	console.assert(location.hash)
		var xmlText	= decodeURIComponent(location.hash.substr(1))
		var xmlDoc	= Blockly.Xml.textToDom(xmlText);
		Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), xmlDoc)	  	
	}
	function runWorkspace(){
		//can be used to reshuffle the plan base - is it necessary?
	}
	function resetWorkspace(){
		Blockly.mainWorkspace.clear();
	}