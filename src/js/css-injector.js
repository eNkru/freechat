class CssInjector {}

CssInjector.login = `
    body {
        overflow: hidden;
    }

    .logo, .lang, .copyright {
        display: none !important;
    }

    .login_box {
        top: 0 !important;
        left: 0 !important;
        margin: 0 !important;
    }
`

CssInjector.main = `
    .main {
        padding: 0 !important;
        height: 100% !important;
    }

    .main_inner {
        max-width: 100% !important;
    }

    a.web_wechat_screencut {
        display: none;
    }
`

module.exports = CssInjector