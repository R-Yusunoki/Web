const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'ipc',
  {
    sendWakuwakuXxx: (arg) => ipcRenderer.send('wakuwaku:xxx', arg),
    onWakuwakuYyy: (func) => {
      ipcRenderer.on('wakuwaku:yyy', (event, arg) => func(arg) )
    }
  }
)
