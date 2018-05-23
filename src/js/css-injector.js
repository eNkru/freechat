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

`

module.exports = CssInjector