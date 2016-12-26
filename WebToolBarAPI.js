var webToolBarAPI = new Object();
webToolBarAPI.versionType = 'alpha';
webToolBarAPI.version = 1.0;
webToolBarAPI.isMinimum = false;

function initToolBarsContainer() {
  var toolBarsContainer = document.createElement('div');
  toolBarsContainer.id = 'tbContainer';
  document.body.appendChild(toolBarsContainer);
}

try {
  window.addEventListener('DOMContentLoaded', initToolBarsContainer, false); 
} catch (e) { 
  //If InternetExplorer 
  window.attachEvent('onload', toolBarsContainerFunc); 
}
var ToolBars = [];
