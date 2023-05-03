import { app } from 'electron'
import { showAboutDialog } from '../actions/help'
import * as actions from '../actions/marktext'

// macOS only menu.

export default function (keybindings) {
  return {
    label: 'WowMarkdown',
    submenu: [{
      label: '关于WowMarkdown',
      click (menuItem, focusedWindow) {
        showAboutDialog(focusedWindow)
      }
    }, {
      label: '检查更新...',
      click (menuItem, focusedWindow) {
        actions.checkUpdates(focusedWindow)
      }
    }, {
      label: '偏好设置',
      accelerator: keybindings.getAccelerator('file.preferences'),
      click () {
        actions.userSetting()
      }
    }, {
      type: 'separator'
    }, {
      label: '服务',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: '隐藏程序',
      accelerator: keybindings.getAccelerator('mt.hide'),
      click () {
        actions.osxHide()
      }
    }, {
      label: '隐藏其他程序',
      accelerator: keybindings.getAccelerator('mt.hide-others'),
      click () {
        actions.osxHideAll()
      }
    }, {
      label: '显示所有程序',
      click () {
        actions.osxShowAll()
      }
    }, {
      type: 'separator'
    }, {
      label: '退出程序',
      accelerator: keybindings.getAccelerator('file.quit'),
      click: app.quit
    }]
  }
}
