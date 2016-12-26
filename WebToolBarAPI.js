var webToolBarAPI = new Object();
webToolBarAPI.versionType = 'alpha';
webToolBarAPI.version = 1.0;
webToolBarAPI.isMinimum = false;

function initToolBarsContainer() {
  var toolBarsContainer = document.createElement('div');
  toolBarsContainer.id = 'tbContainer';
  document.body.appendChild(toolBarsContainer);
}

if(window.navigator.userAgent.match(/(msie|MSIE)/) || window.navigator.userAgent.match(/(T|t)rident/)) {
  window.attachEvent('onload', initToolBarsContainer);
} else {
  window.addEventListener('DOMContentLoaded', initToolBarsContainer, false);
}
var ToolBars = [];
