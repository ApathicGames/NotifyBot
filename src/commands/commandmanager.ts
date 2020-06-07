import { Command } from "command";

export class CommandManager {
    private commandList: Map<string, Command>;

    constructor() {
        this.commandList = new Map<string, Command>();
    }

    registerCommand(cmd: Command): void {
        this.commandList.set(cmd.name, cmd);
    }

    dispatch(command: string, args: string[]): void {
        console.log("Cmd", command, " args:", args)
    }
}