const commandDescriptions = Object.freeze({
  // ============================================
  // # Key binding descriptions
  // #

  'mt.hide': 'MarkText: 隐藏当前程序',
  'mt.hide-others': 'MarkText: 隐藏其他程序',
  'file.new-window': 'File: 新建窗口',
  'file.new-tab': 'File: 新建标签页',
  'file.open-file': 'File: 打开文件',
  'file.open-folder': 'File: 打开文件夹',
  'file.save': 'File:  保存',
  'file.save-as': 'File: 保存为...',
  'file.move-file': 'File: 移动...',
  'file.rename-file': 'File: 重命名...',
  'file.quick-open': 'File: Show quick open dialog',
  'file.print': 'File: 打印当前标签页',
  'file.preferences': 'MarkText: 偏好设置',
  'file.close-tab': 'File: 关闭当前标签页',
  'file.close-window': 'File: 关闭窗口',
  'file.quit': 'MarkText: 退出',
  'edit.undo': 'Edit: 撤销',
  'edit.redo': 'Edit: 重写',
  'edit.cut': 'Edit: 剪切',
  'edit.copy': 'Edit: 复制',
  'edit.paste': 'Edit: 粘贴',
  'edit.copy-as-markdown': 'Edit: 复制为MarkDown',
  'edit.copy-as-html': 'Edit: 复制为HTML代码',
  'edit.paste-as-plaintext': 'Edit: 粘贴为纯文本',
  'edit.select-all': 'Edit: 全选',
  'edit.duplicate': 'Edit: 复制粘贴',
  'edit.create-paragraph': 'Edit: 新建段落',
  'edit.delete-paragraph': 'Edit: 删除段落',
  'edit.find': 'Edit: 查找',
  'edit.find-next': 'Edit: 查找下一个',
  'edit.find-previous': 'Edit: 查找上一个',
  'edit.replace': 'Edit: 替换',
  'edit.find-in-folder': 'Edit: 在文件夹内查找',
  'edit.screenshot': 'Edit: Make Screenshot',
  'paragraph.heading-1': '段落: 转换为标题一',
  'paragraph.heading-2': '段落: 转换为标题一',
  'paragraph.heading-3': '段落: 转换为标题一',
  'paragraph.heading-4': '段落: 转换为标题一',
  'paragraph.heading-5': '段落: 转换为标题一',
  'paragraph.heading-6': '段落: 转换为标题一',
  'paragraph.upgrade-heading': '段落: 升级级别',
  'paragraph.degrade-heading': '段落: 降级级别',
  'paragraph.table': 'Paragraph: 新建表格',
  'paragraph.code-fence': 'Paragraph: Transform into Code Fence',
  'paragraph.quote-block': 'Paragraph: Transform into Quote Block',
  'paragraph.math-formula': 'Paragraph: Transform into Math Formula',
  'paragraph.html-block': 'Paragraph: Transform into HTML Block',
  'paragraph.order-list': 'Paragraph: Transform into Order List',
  'paragraph.bullet-list': 'Paragraph: Transform into Bullet List',
  'paragraph.task-list': 'Paragraph: Transform into Task List',
  'paragraph.loose-list-item': 'Paragraph: Convert to Loose List Item',
  'paragraph.paragraph': 'Paragraph: Create new Paragraph',
  'paragraph.horizontal-line': 'Paragraph: Insert Horizontal Line',
  'paragraph.front-matter': 'Paragraph: Insert Front Matter',
  'format.strong': 'Format: Strong',
  'format.emphasis': 'Format: Emphasis',
  'format.underline': 'Format: Underline',
  'format.superscript': 'Format: Superscript',
  'format.subscript': 'Format: Subscript',
  'format.highlight': 'Format: Highlight',
  'format.inline-code': 'Format: Inline Code',
  'format.inline-math': 'Format: Inline Math',
  'format.strike': 'Format: Strike',
  'format.hyperlink': 'Format: Hyperlink',
  'format.image': 'Format: Insert Image',
  'format.clear-format': 'Format: Clear Format',
  'window.minimize': 'Window: Minimize',
  'window.toggle-always-on-top': 'Window: Always on Top',
  'window.zoom-in': 'Window: Zoom In',
  'window.zoom-out': 'Window: Zoom Out',
  'window.toggle-full-screen': 'Window: Toggle Full Screen',
  'view.command-palette': 'View: Show Command Palette',
  'view.source-code-mode': 'View: Toggle Source Code Mode',
  'view.typewriter-mode': 'View: Toggle Typewriter Mode',
  'view.focus-mode': 'View: Focus Mode',
  'view.toggle-sidebar': 'View: Toggle Sidebar',
  'view.toggle-toc': 'View: Toggle Table of Content',
  'view.toggle-tabbar': 'View: Toggle Tabs',
  'view.toggle-dev-tools': 'View: Show Developer Tools (Debug)',
  'view.dev-reload': 'View: Reload Window (Debug)',
  'tabs.cycle-forward': 'Misc: Cycle Tabs Forward',
  'tabs.cycle-backward': 'Misc: Cycle Tabs Backward',
  'tabs.switch-to-left': 'Misc: Switch tab to the left',
  'tabs.switch-to-right': 'Misc: Switch tab to the right',
  'tabs.switch-to-first': 'Misc: Switch tab to the 1st',
  'tabs.switch-to-second': 'Misc: Switch tab to the 2st',
  'tabs.switch-to-third': 'Misc: Switch tab to the 3st',
  'tabs.switch-to-fourth': 'Misc: Switch tab to the 4st',
  'tabs.switch-to-fifth': 'Misc: Switch tab to the 5st',
  'tabs.switch-to-sixth': 'Misc: Switch tab to the 6st',
  'tabs.switch-to-seventh': 'Misc: Switch tab to the 7st',
  'tabs.switch-to-eighth': 'Misc: Switch tab to the 8st',
  'tabs.switch-to-ninth': 'Misc: Switch tab to the 9st',
  'tabs.switch-to-tenth': 'Misc: Switch tab to the 10st',

  // ============================================
  // # Menu descriptions but not available as command
  // #

  'view.reload-images': 'View: Force reload images',

  // ============================================
  // # Additional command descriptions
  // #

  'file.toggle-auto-save': 'File: Toggle Auto Save',
  'file.import-file': 'File: Import...',
  'file.export-file': 'File: Export...',
  'file.zoom': 'Window: Zoom...',
  'file.check-update': 'MarkText: Check for Updates...',
  'paragraph.reset-paragraph': 'Paragraph: Transform into Paragraph',
  'window.change-theme': 'Theme: Change Theme...',
  'view.text-direction': 'View: Set Text Direction',
  'docs.user-guide': 'MarkText: End User Guide',
  'docs.markdown-syntax': 'MarkText: Markdown Syntax Guide'
})

export default id => {
  return commandDescriptions[id]
}
