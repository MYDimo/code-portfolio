const commandList = ["help", "clear", "ls", "open", "whoismd"];
const promptLoc = "\x1B[1mmihaylo-dimo: ~ %\x1B[22m ";
const filesToOpen = [{name: "CV.pdf", link: "CV-Mihaylo-Dimo-v3.pdf"}, {name: "projects", link: "/projects"},{name: "playground", link: "/playground"}];
const whoismd = [
	{name: "Mihaylo Yuriyovich Dimo"},
	{nickName: "olhmi"},
	{age: "29"},
	{starSign: "mantis"},
	{hobbies: ["photography", "skiing", "DIY vortex projects"]},
	{pets: ["Chillie, the cat", "Mars, the dog"]},
	{favDrink: "loads of beer"}
]

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
	commandWritten = true;
}

function ls(term) {
	filesToOpen.map(x => {
		term.write(
			`\r\n\x1b[35m${x.name}\x1b[0m`
		);
	})
	prompt(term);
}

function open(term, input) {
	const file = input.replace("open ", "");
	const i = filesToOpen.findIndex(e => e.name === file);
	if (i > -1) {
		window.open(`${window.location.href}${filesToOpen[i].link}`);
	} else {
		term.write(`\r\n${file} - there's no such file`);
	}
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
			inputMemory.push("help");
			break;
		case "clear":
			inputMemory.push("clear");
			clear(term);
			inputCurr = "";
			break;
		case "ls":
			inputMemory.push("ls");
			ls(term);
			break;
		case "system_info":
			inputMemory.push("system_info");
			break;
		default:
			//check if there's open command
			if (input.includes("open")) {
				open(term, input);
				break;
			}
			inputMemory.push(inputCurr);
			term.write(`\r\n \x1B[1;31mcommand not found, type help for info\x1B[0m`);
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
			if (inputCurr.length === 0) {
				return;
			} else if (term._core.buffer.x === 0 && term._core.buffer.y >= 1) {
				// Move up
				term.write("\x1b[A");
				// Move to the end
				term.write(`\x1b[${term._core.buffer._cols + 1}C`);
				term.write(" ");
			} else {
				term.write("\b \b");
			}
			inputCurr = inputCurr.substring(0, inputCurr.length - 1);
			break;
		default:
			// Print all other characters for demo
			if (
				(key >= String.fromCharCode(0x20) &&
					key <= String.fromCharCode(0x7e)) ||
				key >= "\u00a0"
			) {
				inputCurr += key;
				term.write(key);
			}
	}
}

export default { keyTrigger };
