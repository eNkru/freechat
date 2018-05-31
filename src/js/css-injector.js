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

    span.display_name {
        width: 130px !important;
    }

    i.toggle_contact_button {
        display: table-cell;
        padding: 12px 0 0 12px;
        cursor: pointer;
        color: gray;
        transition: 0.5s ease-out;
    }

    i.toggle_contact_button.mini {
        margin: 12px 12px 0 0;
        display: block;
        transform: rotateZ(540deg);
    }

    .panel {
        transition: width .2s;
    }

    .panel.mini {
        width: 80px;
    }

    .panel.mini .nickname {
        display: none;
    }

    .panel.mini .search_bar {
        display: none;
    }

    .panel.mini .tab {
        display: none;
    }

    .panel.mini .nav_view {
        top: 100px;
    }

    .panel.mini .ext {
        display: none;
    }
`

module.exports = CssInjector