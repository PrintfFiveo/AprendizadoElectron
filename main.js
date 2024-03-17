// Modules to control application life and create native browser window
const {app,BrowserWindow } = require('electron')

function createWindow  () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration:true
    },
  
  })
  win.loadFile("index.html")
}
app.whenReady().then(createWindow)