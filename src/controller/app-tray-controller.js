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
        this.init()
    }

    init() {
        this.tray = new Tray(this.createTrayIcon())
        this.tray.setToolTip('Wechat Desktop')

        const context = Menu.buildFromTemplate([{
            label: '退出',
            click: () => this.cleanupAndExit()
        }])

        this.tray.setContextMenu(context)

        this.tray.on('click', () => this.clickEvent())
    }

    clickEvent() {
        this.mainController.toggle()
    }

    createTrayIcon() {
        return nativeImage.createFromPath(path.join(__dirname, '../../assets/icon_tray.png'))
    }

    cleanupAndExit() {
        app.exit(0);

    }
}

module.exports = AppTrayController