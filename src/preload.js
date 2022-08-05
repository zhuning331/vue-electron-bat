const { exec } = require('child_process');

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {

    // setting many function on windows

    const nodeFuncs = {};

    nodeFuncs.execBat = (batFilePath, beforeExec, AfterExec) => {
        beforeExec();
        exec(batFilePath, function (err, data) {
            if (err) {
                console.log(err);
            }
            console.log(data);
            AfterExec();
        });
    }

    // 將設定的 function 掛載到 window 上
    window.nodeFuncs = nodeFuncs;
});