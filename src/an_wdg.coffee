window.AsmodeeNet.Widget = (->
    settings = {
        is_host: null,
        api_url: null,
        env: 'dev',
        lang: 'en',
        base_file_path: stackinfo()[0].file.split('/').slice(0, -1).join('/')
    }

    injectWaitings = null

    getTrans = () ->
        lang = if settings.lang
            settings.lang
        else
            'en'
        lang = 'en' if !window.AsmodeeNet.Widget.Translations[lang]

        return window.AsmodeeNet.Widget.Translations[lang]

    getUrls = () ->
        return window.AsmodeeNet.Widget.Urls

    isGuest = () -> window.AsmodeeNet.getIdToken() == null

    initAllSetting = () ->
        return {
            env: settings.env,
            lang: settings.lang,
            host: settings.is_host,
            unlogged: isGuest(),
            in_3rd_party: true
        }

    loadMain = () ->
        scripts = document.getElementsByTagName('script')[0]
        main = document.createElement('script')
        main.src = settings.base_file_path + '/lib/main.js'
        main.onload = () -> window.AsmodeeNet.Widget.asnetapiOnLoad()
        scripts.parentNode.insertBefore(main, scripts.nextSibling)

    injectMainWdgLib = () ->
        if CryptoJS == undefined
            setTimeout injectMainWdgLib, 100
        else
            man = document.createElement('script')
            man.src = settings.base_file_path + '/lib/manifest.js'
            scripts = document.getElementsByTagName('script')[0]
            scripts.parentNode.insertBefore(man, scripts)
            waiterWebpack = () ->
                if typeof window.webpackJsonp == 'undefined'
                    setTimeout waiterWebpack, 100
                else
                    vend = document.createElement('script')
                    vend.src = settings.base_file_path + '/lib/vendor.js'
                    vend.onload = () -> window.AsmodeeNet.Widget.asnetapiOnLoad(true)
                    man.parentNode.insertBefore(vend, man.nextSibling)
            waiterWebpack()

    findElement = (cssSelector) ->
        if cssSelector.indexOf('#') != -1 then window.document.getElementById(cssSelector.replace('#', '')) else window.document.getElementsByClassName(cssSelector)[0]

    emitUnlogged = (pushTarget) ->
        pushTarget.push('user-unlogged', {
            url: settings.is_host.replace(/\/$/) + '/' + settings.lang + '/prx',
            token: null, userId: null, expires: null, avatar: null,
            scopes: 'public'
        })

    emitLogged = (pushTarget, token) ->
        tok = jwt_decode(token)
        pushTarget.push('user-connected', {
            url: settings.api_url,
            token: token,
            userId: tok.sub,
            expires: tok.exp,
            scopes: window.AsmodeeNet.getScopes(),
            avatar: window.AsmodeeNet.getIdentity().picture
        })

    timeoutInject = () ->
        if typeof window.asnet_wc == 'undefined'
            setTimeout timeoutInject, 100
        else
            it = injectWaitings
            injectWaitings = null
            for params in it
                window.AsmodeeNet.Widget.inject(params[0], params[1], params[2])

    inject: (name, targetElementSelector, options) ->
        if typeof window.asnet_wc != 'undefined'
            elparent = window.document.getElementById(targetElementSelector.replace('#', ''))
            ifrm = window.document.createElement('iframe')
            ifrm.setAttribute('id', targetElementSelector.replace('#', '') + '-ifrm')
            ifrm.setAttribute('style', 'width: 100%;height:100%;border:none;')
            elparent.appendChild(ifrm)
            doc = (if ifrm.contentDocument
                ifrm.contentDocument
            else
                ifrm.contentWindow.document).open()

            doc.write('<html><head><meta name="viewport" content="width=device-width, initial-scale=1"/><style>#target {width: 100%;margin:0;padding:0;border:none;}</style><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" /><link href="' + settings.base_file_path + '/lib/anet-webfont.min.css" type="text/css" rel="stylesheet" /><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.js"></script><script src="' + settings.base_file_path + '/lib/stackinfo.umd.js"></script><script src="' + settings.base_file_path + '/lib/manifest.js"></script><script src="' + settings.base_file_path + '/lib/vendor.js"></script></head><body><div id="target" width="100%"></div><script src="' + settings.base_file_path + '/lib/main.js"></script></body></html>')
            ifrm.contentWindow.CryptoJS = CryptoJS

            timint = null
            doc.addEventListener('vue-init', () ->
                width = null
                if typeof options.width == 'string' && options.width.includes('px')
                    width = (parseInt(options.width) - 20) + 'px'
                else
                    width = options.width

                return ifrm.contentWindow.asnet_wc('#target', window.AsmodeeNet.extend(options, {
                    module: options.module || name, trans: getTrans(), urls: getUrls(), width: width
                }))
            )
            timint = () ->
                if typeof ifrm.contentWindow.asnet_wc != 'undefined' && typeof ifrm.contentWindow.asnetbus != 'undefined'
                    ifrm.contentWindow.asnetbus.$emit('init-all', initAllSetting())
                    # ifrm.contentWindow.asnetbus = window.asnetbus
                    tok = window.AsmodeeNet.getAccessToken()
                    if tok
                        emitLogged(ifrm.contentWindow.asnetbus, tok)
                    else
                        emitUnlogged(ifrm.contentWindow.asnetbus)
                else
                    setTimeout timint, 10
            timint()
        else
            if injectWaitings
                injectWaitings.push([name, targetElementSelector, options])
            else
                injectWaitings = [[name, targetElementSelector, options]]
                setTimeout timeoutInject, 100

    asnetapiOnLoad: (mainToLoad) ->
        if mainToLoad
            loadMain()
        else
            if typeof window.asnetbus != 'undefined'
                window.asnetbus.push('init-all', initAllSetting())

                if isGuest()
                    emitUnlogged(window.asnetbus)
                else
                    emitLogged(window.asnetbus, window.AsmodeeNet.getAccessToken())

    init: (options) ->
        anSettings = window.AsmodeeNet.getSettings()
        settings.is_host = anSettings.base_is_host
        settings.api_url = anSettings.base_url
        settings.lang = options.lang if options && options.lang
        injectMainWdgLib()

)()
window.AsmodeeNet.injectWidget = (name, target, options) ->
    window.AsmodeeNet.Widget.inject(name, target, options)
