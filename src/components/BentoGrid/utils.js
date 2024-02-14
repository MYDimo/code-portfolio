const commandList = ["help", "clear", "ls", "system_info"];
const promptLoc = "\x1B[1mmihaylo-dimo: ~ %\x1B[22m ";

let inputMemory = [];
let inputCurr = "";

function clear(term) {
	for (let i = 0; i < 5; i++) {
		term.write("\b \b");
	}
	term.clear();
	inputCurr = "";
}

function help(term) {
	term.write(
		`\r\n\n\x1b[3mavailable commands:\n\x1B[1;32m\r ${commandList.join(
			"\r\n "
		)}\x1B[0m\n`
	);
	prompt(term);
}

function ls(term) {
	term.write(
		`\r\nhttps://github.com/xtermjs/xterm.js/blob/master/addons/addon-web-links/typings/addon-web-links.d.ts`
	);
	prompt(term);
}

function prompt(term) {
	inputCurr = "";
	term.write(`\r\n${promptLoc}`);
}

function runCommand(term, input) {
	switch (input) {
		case "help":
			help(term);
			break;
		case "clear":
			clear(term);
			inputCurr = "";
			break;
		case "ls":
      ls(term);
			break;
		case "system_info":
			break;
		default:
			term.write(`\r\n \x1B[1;31mcommand not found\x1B[0m`);
			inputCurr = "";
			prompt(term);
			break;
	}
	return;
}

export function keyTrigger(key, term) {
	switch (key) {
		case "\u0003": // Ctrl+C
			term.write("^C");
			break;
		case "\r": // Enter
			runCommand(term, inputCurr);
			break;
		case "\u007F": // Backspace (DEL)
    console.log(term._core.buffer.x);
			if (term._core.buffer.x > 18) {
				term.write("\b \b");
				if (key.length > 0) {
					key = key.substring(0, key.length - 1);
					inputCurr = inputCurr.substring(0, key.length - 1);
				}
			} else if (term._core.buffer.x <= 18 && term._core.buffer.y >= 1) {
				console.log(term._core.buffer.x);
				if (term._core.buffer.x === 0 && term._core.buffer.y >= 1) {
					// Move up
					term.write("\x1b[A");
					// Move to the end
					term.write(`\x1b[50C`);
				}
				term.write("\b \b");
				if (key.length > 0) {
					key = key.substring(0, key.length - 1);
					inputCurr = inputCurr.substring(0, key.length - 1);
				}
			} else if (term._core.buffer.x === 18 && term._core.buffer.y === 0 ) {
        term.write('\x1B[J')
      }

			// if (term._core.buffer.x === 0 && term._core.buffer.y > 1) {
			// 	// Move up
			// 	term.write("\x1b[A");
			// 	// Move to the end
			// 	term.write("\x1b[" + term._core.buffer._cols + "G");
			// 	term.write(" ");
			// } else {
			// 	term.write("\b \b");
			// }
			// inputCurr = inputCurr.substring(0, input.length - 1);

			// console.log(term._core.buffer.x, inputCurr.length, promptLoc.length);
			// if (term._core.buffer.x < promptLoc.length) {
			// 	term.write("\b \b");
			// 	inputCurr = inputCurr.substring(0, key.length - 1);
			// }

			break;
		default:
			// Print all other characters for demo
			if (
				(key >= String.fromCharCode(0x20) &&
					key <= String.fromCharCode(0x7e)) ||
				key >= "\u00a0"
			) {
				// command += e;
				inputCurr += key;
				term.write(key);
			}
	}
}

export default { keyTrigger };
