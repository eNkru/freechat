# electron-wechat
## 致力于打造macOS和Linux桌面下最好用的微信（wechat）客户端。
使用[Electron](https://electron.atom.io)构建。

### 窗口模式

**正常模式**

![Screenshot from 2019-09-24 09-49-03](https://user-images.githubusercontent.com/13460738/65466917-3e2b1080-deb4-11e9-9f8d-fdd9e362cd21.png)

**Mini联系人模式 (手机模式)**

![Screenshot from 2019-09-24 09-48-38](https://user-images.githubusercontent.com/13460738/65466915-3d927a00-deb4-11e9-85f7-54e2dc20d71b.png)

### 托盘状态

**没有新消息**

![Screenshot from 2019-09-24 09-51-55](https://user-images.githubusercontent.com/13460738/65466921-3e2b1080-deb4-11e9-9f41-55d739d44225.png)

**联系人消息**

![Screenshot from 2019-09-24 09-51-07](https://user-images.githubusercontent.com/13460738/65466918-3e2b1080-deb4-11e9-81f0-b482691bcc9d.png)

**群消息**

![Screenshot from 2019-09-24 10-13-28](https://user-images.githubusercontent.com/13460738/65466922-3ec3a700-deb4-11e9-976d-5feb1b2fb2a1.png)

*请注意：这个项目不是微信的官方客户端。如果有任何问题请反馈到[这个链接](https://github.com/eNkru/electron-wechat/issues)。*

### 功能
* 微信聊天桌面版
* 最小化联系人列表 （手机模式）
* 最小化到托盘
* 系统提示
* 持续增加中...

### 开发需求
* [GIT](https://git-scm.com/)
* [NPM](https://www.npmjs.com/)

### 编译和安装
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

### 发布
```
npm version (new release version)
git push origin master
git push origin --tags
npm publish
```

### 下载
预打包版本请点击[这个链接](https://github.com/eNkru/electron-wechat/releases)下载。

### 授权协议
[MIT](https://github.com/eNkru/electron-xiami/blob/master/LICENSE) by Howard J