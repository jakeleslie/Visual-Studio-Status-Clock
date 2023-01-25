"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    let disposable = vscode.commands.registerCommand('status-clock.helloWorld', () => {
        let time = new Date().toLocaleTimeString();
        // update time every second, to do this we can use the setInterval method
        // So instead of doing while true and sleeping for a second we have this nice method :)
        setInterval(() => {
            time = new Date().toLocaleTimeString();
            vscode.window.setStatusBarMessage("⏰ " + time);
        }, 1000);
    });
    context.subscriptions.push(disposable);
    // This is not shown in the docs but we need ot include this for our extension to automatically execute. 
    vscode.commands.executeCommand('status-clock.helloWorld');
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map