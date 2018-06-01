# electron-wechat
致力于打造macOS和Linux桌面下最好用的微信（wechat）客户端。
使用[Electron](https://electron.atom.io)构建。

正常模式
![wechat_full_contact](https://user-images.githubusercontent.com/13460738/40812895-4c014eba-658c-11e8-95cc-4880519159b2.png)

Mini联系人模式
![wechat_mini_contact](https://user-images.githubusercontent.com/13460738/40812898-4e72c412-658c-11e8-8327-616170035627.png)

托盘状态

![wechat_normal_tray](https://user-images.githubusercontent.com/13460738/40816469-47bb23b6-65a1-11e8-95b8-88b63deea958.png)

![wechat_unread_tray](https://user-images.githubusercontent.com/13460738/40816470-47e8bb0a-65a1-11e8-9639-6d26bdafbe2d.png)

![wechat_important_tray](https://user-images.githubusercontent.com/13460738/40816468-478d812c-65a1-11e8-8116-601e78c61c69.png)

*请注意：这个项目不是虾米音乐的官方客户端。如果有任何问题请反馈到[这个链接](https://github.com/eNkru/electron-wechat/issues)。*

## 功能
* 微信聊天桌面版
* 最小化联系人列表
* 最小化到托盘
* 系统提示
* 持续增加中...

## 开发需求
* [GIT](https://git-scm.com/)
* [NPM](https://www.npmjs.com/)

## 编译和安装
本地编译运行
```
git clone https://github.com/eNkru/electron-wechat.git
cd electron-wechat
npm install
npm start
```
编译打包版本
```
npm run dist:linux
```

## 发布
```
npm version (new release version)
git push origin master
git push origin --tags
npm publish
```

## 下载
预打包版本请点击[这个链接](https://github.com/eNkru/electron-wechat/releases)下载。

## 授权协议
[MIT](https://github.com/eNkru/electron-xiami/blob/master/LICENSE) by Howard J
