const {
    BrowserWindow,
    session
} = require('electron');
const CssInjector = require('../js/css-injector');

class MainController {
    constructor() {
        this.init()
    }

    init() {
        this.window = new BrowserWindow({
            show: false,
            width: 380,
            height: 500,
            frame: true,
            autoHideMenuBar: true,
            resizable: false
        })

        this.window.loadURL('https://wx.qq.com/')

        this.window.webContents.on('dom-ready', () => {
            this.window.webContents.insertCSS(CssInjector.login)
            this.show()
        })

        // triggering when user try to close the play window.
        this.window.on('close', (e) => {
            if (this.window.isVisible()) {
                e.preventDefault()
                this.window.hide()
            }
        });

        session.defaultSession.webRequest.onCompleted({urls: [
            'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxinit*',
            'https://wx.qq.com/?&lang*']
            },
            (details) => this.handleRequest(details)
        )
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

    handleRequest(details) {
        console.log(details.url)
        details.url.startsWith('https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxinit') && this.login()
        details.url.startsWith('https://wx.qq.com/?&lang') && this.logout()
    }

    login() {
        this.window.setSize(1000, 670, true)
    }

    logout() {
        this.window.setSize(380, 500, true)
    }
}

module.exports = MainController