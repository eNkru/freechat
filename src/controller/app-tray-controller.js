const {
    app,
    Menu,
    nativeImage,
    Tray,
    ipcMain
} = require('electron');
const path = require('path');

class AppTrayController {
    constructor(mainController) {
        this.mainController = mainController
        this.unreadType = 'none'
        this.platform = require('os').platform()
        this.init()
    }

    init() {
        this.tray = new Tray(this.createTrayIcon())
        this.tray.setToolTip('Wechat Desktop')

        const context = Menu.buildFromTemplate([
            {label: '切换聊天窗口', click: () => this.mainController.toggle()},
            {label: '退出', click: () => this.cleanupAndExit()}
        ])

        this.tray.setContextMenu(context)

        this.tray.on('click', () => this.clickEvent())

        ipcMain.on('updateUnread', (event, value) => {
            value !== this.unreadType && this.tray.setImage(this.getUnreadImage(value))
        })
    }

    clickEvent() {
        this.mainController.toggle()
    }

    createTrayIcon() {
        switch (this.platform) {
            case 'darwin':
                let trayIcon = nativeImage.createFromPath(path.join(__dirname, '../../assets/icon.png'))
                trayIcon.setTemplateImage(true)
                return trayIcon
            case 'win32':
                return nativeImage.createFromPath(path.join(__dirname, '../../assets/icon@2x.png'))
            default:
                return nativeImage.createFromPath(path.join(__dirname, '../../assets/icon@2x.png'))
        }
    }

    getUnreadImage(value) {
        this.unreadType = value
        let trayIcon
        switch (value) {
            case 'important':
                trayIcon = 'darwin' === this.platform ?
                    nativeImage.createFromPath(path.join(__dirname, '../../assets/iconImportant.png')) :
                    nativeImage.createFromPath(path.join(__dirname, '../../assets/iconImportant@2x.png'))
            case 'minor':
                trayIcon = 'darwin' === this.platform ?
                    nativeImage.createFromPath(path.join(__dirname, '../../assets/iconUnread.png')) :
                    nativeImage.createFromPath(path.join(__dirname, '../../assets/iconUnread@2x.png'))
            default:
            trayIcon = 'darwin' === this.platform ?
                    nativeImage.createFromPath(path.join(__dirname, '../../assets/icon.png')) :
                    nativeImage.createFromPath(path.join(__dirname, '../../assets/icon@2x.png'))
        }

        trayIcon.setTemplateImage(true)
        return trayIcon
    }

    cleanupAndExit() {
        app.exit(0);

    }
}

module.exports = AppTrayController