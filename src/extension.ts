import * as vscode from 'vscode';

// stretch goal: replace all spaces and indents with random number of indents or spaces upon ctrl + s

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('random-tabs.newLine', () => {
		const editor = vscode.window.activeTextEditor;

		var indentString = "\n";
		for (var i = 0; i <= Math.random() * (1000 - 0) + 0; i++) {
			var spacing = " ".repeat(Math.random()*4);
			// for (var j = 0; j <= Math.random() * (4 - 0) + 0; j++) { spacing = spacing + " "; }
			indentString = indentString + spacing;
		}
		console.log(indentString);
		editor?.document.getText()

		// Check if there is text to the right of the cursor that needs to be removed from
		// current line and added onto newline
		const document = editor?.document;
		const selection = editor?.selection;
		const cursorPos = selection?.active;
		if (cursorPos) {
			editor?.edit(edit => {
				edit.insert(cursorPos, indentString);
			})
		} else {
			console.error("Something went wrong.");
		}
	});

	context.subscriptions.push(disposable);
}


// This method is called when your extension is deactivated
export function deactivate() {}
