const {
    BrowserWindow
} = require('electron');

class MainController {
    constructor() {
        this.init()
    }

    init() {
        this.window = new BrowserWindow({
            show: false,
            width: 1000,
            height: 670,
            frame: true,
            autoHideMenuBar: true
        })

        this.window.loadURL('https://wx.qq.com/')

        this.window.webContents.on('dom-ready', () => {
            this.show()
        })

        // triggering when user try to close the play window.
        this.window.on('close', (e) => {
            if (this.window.isVisible()) {
                e.preventDefault();
                this.window.hide();
            }
        });
    }

    show() {
        this.window.show()
        this.window.focus()
    }

    toggle() {
        if (this.window.isVisible()) {
            this.window.hide()
        } else {
            this.show()
        }
    }
}

module.exports = MainController