//your JS code here. If required.
// Extract user agent
const userAgent = navigator.userAgent;
let browserName = "Unknown";
let version = "Unknown";

// Check browser
if (userAgent.indexOf("Firefox") > -1) {
  browserName = "Mozilla Firefox";
  version = userAgent.match(/Firefox\/([\d.]+)/)[1];
} else if (userAgent.indexOf("Edg") > -1) {
  browserName = "Microsoft Edge";
  version = userAgent.match(/Edg\/([\d.]+)/)[1];
} else if (userAgent.indexOf("Chrome") > -1) {
  browserName = "Google Chrome";
  version = userAgent.match(/Chrome\/([\d.]+)/)[1];
} else if (userAgent.indexOf("Safari") > -1) {
  browserName = "Apple Safari";
  version = userAgent.match(/Version\/([\d.]+)/)[1];
}

// Show info
const infoDiv = document.getElementById("browser-info");
infoDiv.innerText = `You are using ${browserName} version ${version}`;
