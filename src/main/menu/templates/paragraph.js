import * as actions from '../actions/paragraph'

export default function (keybindings) {
  return {
    id: 'paragraphMenuEntry',
    label: '&段落',
    submenu: [{
      id: 'heading1MenuItem',
      label: '标题一',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-1'),
      click (menuItem, focusedWindow) {
        actions.heading1(focusedWindow)
      }
    }, {
      id: 'heading2MenuItem',
      label: '标题二',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-2'),
      click (menuItem, focusedWindow) {
        actions.heading2(focusedWindow)
      }
    }, {
      id: 'heading3MenuItem',
      label: '标题三',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-3'),
      click (menuItem, focusedWindow) {
        actions.heading3(focusedWindow)
      }
    }, {
      id: 'heading4MenuItem',
      label: '标题四',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-4'),
      click (menuItem, focusedWindow) {
        actions.heading4(focusedWindow)
      }
    }, {
      id: 'heading5MenuItem',
      label: '标题五',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-5'),
      click (menuItem, focusedWindow) {
        actions.heading5(focusedWindow)
      }
    }, {
      id: 'heading6MenuItem',
      label: '标题六',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-6'),
      click (menuItem, focusedWindow) {
        actions.heading6(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'upgradeHeadingMenuItem',
      label: '提升标题层级',
      accelerator: keybindings.getAccelerator('paragraph.upgrade-heading'),
      click (menuItem, focusedWindow) {
        actions.increaseHeading(focusedWindow)
      }
    }, {
      id: 'degradeHeadingMenuItem',
      label: '降低标题层级',
      accelerator: keybindings.getAccelerator('paragraph.degrade-heading'),
      click (menuItem, focusedWindow) {
        actions.degradeHeading(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'tableMenuItem',
      label: '表格',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.table'),
      click (menuItem, focusedWindow) {
        actions.table(focusedWindow)
      }
    }, {
      id: 'codeFencesMenuItem',
      label: '代码块标记',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.code-fence'),
      click (menuItem, focusedWindow) {
        actions.codeFence(focusedWindow)
      }
    }, {
      id: 'quoteBlockMenuItem',
      label: '引用块',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.quote-block'),
      click (menuItem, focusedWindow) {
        actions.quoteBlock(focusedWindow)
      }
    }, {
      id: 'mathBlockMenuItem',
      label: '数学公式',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.math-formula'),
      click (menuItem, focusedWindow) {
        actions.mathFormula(focusedWindow)
      }
    }, {
      id: 'htmlBlockMenuItem',
      label: 'Html代码',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.html-block'),
      click (menuItem, focusedWindow) {
        actions.htmlBlock(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'orderListMenuItem',
      label: '有序列表',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.order-list'),
      click (menuItem, focusedWindow) {
        actions.orderedList(focusedWindow)
      }
    }, {
      id: 'bulletListMenuItem',
      label: '无序列表',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.bullet-list'),
      click (menuItem, focusedWindow) {
        actions.bulletList(focusedWindow)
      }
    }, {
      id: 'taskListMenuItem',
      label: '任务清单',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.task-list'),
      click (menuItem, focusedWindow) {
        actions.taskList(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'looseListItemMenuItem',
      label: '松散列表项',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.loose-list-item'),
      click (menuItem, focusedWindow) {
        actions.looseListItem(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'paragraphMenuItem',
      label: '段落',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.paragraph'),
      click (menuItem, focusedWindow) {
        actions.paragraph(focusedWindow)
      }
    }, {
      id: 'horizontalLineMenuItem',
      label: '水平分割线',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.horizontal-line'),
      click (menuItem, focusedWindow) {
        actions.horizontalLine(focusedWindow)
      }
    }, {
      id: 'frontMatterMenuItem',
      label: '前言',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.front-matter'),
      click (menuItem, focusedWindow) {
        actions.frontMatter(focusedWindow)
      }
    }]
  }
}
