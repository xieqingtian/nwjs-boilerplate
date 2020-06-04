const pkgJson = require('./package.json');

module.exports = {
    nw: {
        main: 'index.html',
        name: pkgJson.name,
        version: pkgJson.version,
        window: {
            title: 'NW.js App',
            toolbar: true,
            frame: true,
            width: 900,
            height: 700,
            icon: './logo.png',
        },
        build: {
            nwVersion: pkgJson.dependencies.nw,
            appId: 'com.speakin.nw-boilerplate',
            languages: ['SimpChinese'],
            output: '../release/',
            targets: ['nsis'],
            nsis: {
                installDirectory: '$PROGRAMFILES\\${_APPNAME}',
                diffUpdaters: false,
                hashCalculation: true,
                icon: './logo.ico',
                unIcon: './logo.ico',
            },
            win: {
                icon: './logo.ico',
            },
        },
    },
};
