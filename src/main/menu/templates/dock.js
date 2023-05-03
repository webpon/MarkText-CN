import { app, Menu } from 'electron'
import * as actions from '../actions/file'

const dockMenu = Menu.buildFromTemplate([{
  label: '打开...',
  click (menuItem, browserWindow) {
    if (browserWindow) {
      actions.openFile(browserWindow)
    } else {
      actions.newEditorWindow()
    }
  }
}, {
  label: '清空最近',
  click () {
    app.clearRecentDocuments()
  }
}])

export default dockMenu
