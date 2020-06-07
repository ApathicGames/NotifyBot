export interface Command {
    name: string;
    params?: Record<string, unknown>;
    execute(): void;
}