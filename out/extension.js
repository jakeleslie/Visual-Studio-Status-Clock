"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    // create a new status bar item that we can now manage
    // default to have it on the left side.
    // function to contain the clock. 
    let lClock = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    let rClock = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    const clockInterval = (clock) => {
        let time;
        setInterval(() => {
            time = new Date().toLocaleTimeString();
            clock.text = "⏰ " + time;
            clock.show();
        }, 1000);
    };
    let leftClock = vscode.commands.registerCommand('status-clock.leftSide', () => {
        clockInterval(lClock);
    });
    let rightClock = vscode.commands.registerCommand('status-clock.rightSide', () => {
        clockInterval(rClock);
    });
    let noEmojiClockLeft = vscode.commands.registerCommand('status-clock.noEmojiLeft', () => {
        let time;
        setInterval(() => {
            time = new Date().toLocaleTimeString();
            lClock.text = time;
            lClock.show();
        }, 1000);
    });
    let noEmojiClockRight = vscode.commands.registerCommand('status-clock.noEmojiRight', () => {
        let time;
        setInterval(() => {
            time = new Date().toLocaleTimeString();
            rClock.text = time;
            rClock.show();
        }, 1000);
    });
    let noSecondsClockLeft = vscode.commands.registerCommand('status-clock.noSecondsLeft', () => {
        let time;
        setInterval(() => {
            time = new Date().toLocaleTimeString();
            lClock.text = "⏰ " + time.slice(0, -3);
            lClock.show();
        }, 1000);
    });
    let noSecondsClockRight = vscode.commands.registerCommand('status-clock.noSecondsRight', () => {
        let time;
        setInterval(() => {
            time = new Date().toLocaleTimeString();
            rClock.text = "⏰ " + time.slice(0, -3);
            rClock.show();
        }, 1000);
    });
    let noSecondsNoEmojiLeft = vscode.commands.registerCommand('status-clock.noSecondsNoEmojiLeft', () => {
        let time;
        setInterval(() => {
            time = new Date().toLocaleTimeString();
            lClock.text = time.slice(0, -3);
            lClock.show();
        }, 1000);
    });
    let noSecondsNoEmojiRight = vscode.commands.registerCommand('status-clock.noSecondsNoEmojiRight', () => {
        let time;
        setInterval(() => {
            time = new Date().toLocaleTimeString();
            rClock.text = time.slice(0, -3);
            rClock.show();
        }, 1000);
    });
    // left, right, no emoji left, right, no seconds left right, no seconds no emoji left right
    // there will be a total of 8 commands. default with emoji seconds and left side.
    // then need to nicely update the store page and optimize and clean up the code. 
    context.subscriptions.push(leftClock);
    context.subscriptions.push(rightClock);
    context.subscriptions.push(noEmojiClockLeft);
    context.subscriptions.push(noEmojiClockRight);
    context.subscriptions.push(noSecondsClockLeft);
    context.subscriptions.push(noSecondsClockRight);
    context.subscriptions.push(noSecondsNoEmojiLeft);
    context.subscriptions.push(noSecondsNoEmojiRight);
    vscode.commands.executeCommand('status-clock.leftSide');
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map