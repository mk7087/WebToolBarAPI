var webToolBarAPI = new Object();
webToolBarAPI.versionType = 'alpha';
webToolBarAPI.version = 1.0;
webToolBarAPI.isMinimum = false;

function toolBarsContainerFunc(){
  var toolBarsContainer = document.createElement('div');
  toolBarsContainer.id = 'tbContainer';
  document.getElementsByTagName('body')[0].appendChild(toolBarsContainer);
}

try {
  window.addEventListener("load", toolBarsContainerFunc, false); 
} catch (e) { 
  //If InternetExplorer 
  window.attachEvent("onload", toolBarsContainerFunc); 
}
var ToolBars = new Array(0);
