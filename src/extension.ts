// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


function getCurrentTextSelection(): string {
    var editor = vscode.window.activeTextEditor;
    if (!editor) {
        return "";
    }
    var cursorPosition = editor.selection.start;
	var wordRange = editor.document.getWordRangeAtPosition(cursorPosition, /(\w+)[?=\(](.*\))|(\w+)/);
	if (wordRange === undefined) {
        return "";
    }
    var token = editor.document.getText(wordRange);
    if (token !== '') {
      token = token.replace(/(\w+)(\()(.*)/g, '$1');
      token = token.replace(/[^a-zA-Z0-9_]/g, '');
    }
    return token;
}

const vex: {[key: string]: string} = require('./helpcards.json');

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
	  vscode.commands.registerCommand('houdinivexsublimehelp.HoudiniVEXWebviewHelp', () => {
    // Settings
    const workbenchConfig = vscode.workspace.getConfiguration('houdinivexsublimehelp');
  	// Create and show a new webview
		const panel = vscode.window.createWebviewPanel(
		  'HoudiniVEXHelp', // Identifies the type of the webview. Used internally
		  'Houdini VEX Help', // Title of the panel displayed to the user
		  vscode.ViewColumn.One, // Editor column to show the new webview panel in.
		  {} // Webview options. More on these later.
		);
		
		const updateWebview = () => {
    	// And set its HTML content
		//let vex_key: string = getCurrentTextSelection();
    	panel.webview.html = getWebviewContent();
		};

		//panel.webview.visible = false;
		
		// Set initial content
		updateWebview();

		// And schedule updates to the content every n milliseconds, defined in settings
		const interval = setInterval(updateWebview, workbenchConfig.get("refreshRate"));

		panel.onDidDispose(
			() => {
			  // When the panel is closed, cancel any future updates to the webview content
			  clearInterval(interval);
			},
			null,
			context.subscriptions
		  );

	  })
	);
  }

  // used later in getWebviewContent so the help file  
  // is not updating when the key is not in the vex
  let vex_key:string = "";

  function getWebviewContent() {
		let current_editor_text = getCurrentTextSelection();
		if (getCurrentTextSelection() in vex){
			vex_key = current_editor_text;
			return vex[vex_key];
		}
		
		else
		{
			return vex[vex_key];
		}
		// return getCurrentTextSelection();
  }