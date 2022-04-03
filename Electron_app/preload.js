const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    sendWakuwakuXxx: (arg) => ipcRenderer.send('wakuwaku:xxx', arg),
    onWakuwakuYyy: () => {
      ipcRenderer.on('wakuwaku:yyy', (event, arg) => {

        
      })
    }
  }
)
