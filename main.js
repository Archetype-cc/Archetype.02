'use strict';

// Import parts of electron to use
const {app, BrowserWindow, ipcMain, Tray} = require('electron');
const path = require('path')
const url = require('url')
const { mkArchetypeDir, writeJson  } = require('./lib/filesystem')
const { links  } = require('./lib/remote')
// const { loop, write  } = require('./lib/datStatus')


const assetsDirectory = path.join(__dirname, 'assets')

let tray = undefined
let window = undefined

// Keep a reference for dev mode
let dev = false;
if ( process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath) ) {
  dev = true;
}


app.on('ready', () => {
  mkArchetypeDir().then(writeJson()).then(createWindow()).then(createTray())
  // createWindow();
  // createTray();
})


app.dock.hide();

// Quit the app when the window is closed
app.on('window-all-closed', () => {
  app.quit()
})


const createTray = () => {
  tray = new Tray(path.join(assetsDirectory, 'archetype.png'))
  tray.on('right-click', toggleWindow)
  tray.on('double-click', toggleWindow)
  tray.on('click', function (event) {
    toggleWindow()
    // loop().then(write);


    // Show devtools when command clicked
    if (window.isVisible() && process.defaultApp && event.metaKey) {
      window.openDevTools({mode: 'detach'})
    }
  })
}


const getWindowPosition = () => {
  const windowBounds = window.getBounds()
  const trayBounds = tray.getBounds()

  // Center window horizontally below the tray icon
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))

  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4)

  return {x: x, y: y}
}

const createWindow = () => {
  window = new BrowserWindow({
    width: 350,
    height: 550,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    webPreferences: {
      // Prevents renderer process code from not running when window is
      // hidden
      backgroundThrottling: false
    }
  })
  // and load the index.html of the app.
  let indexPath;
  if ( dev && process.argv.indexOf('--noDevServer') === -1 ) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    });
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    });
  }
  window.loadURL( indexPath );
  // Hide the window when it loses focus
  window.on('blur', () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide()
    }
  })
}

const toggleWindow = () => {
  if (window.isVisible()) {
    window.hide()
  } else {
    showWindow()
  }
}

const showWindow = () => {
  const position = getWindowPosition()
  window.setPosition(position.x, position.y, false)
  window.show()
  window.focus()
}
