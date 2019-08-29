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

    i.toggle-mobile-button {
        display: table-cell;
        padding: 12px 0 0 12px;
        cursor: pointer;
        color: gray;
        transition: 0.5s ease-out;
    }

    i.toggle-mobile-button.mini {
        margin: 12px 12px 0 0;
        display: block;
    }

    .panel {
        transition: width .2s;
    }

    .mini .panel {
        width: 80px;
    }

    .mini #chatArea {
        width: calc(100vw - 80px);
    }

    .mini .panel .nickname {
        display: none;
    }

    .mini .panel .search_bar {
        display: none;
    }

    .mini .panel .tab {
        display: none;
    }

    .mini .panel .nav_view {
        top: 100px;
    }

    .mini .panel .ext {
        display: none;
    }
`

module.exports = CssInjector