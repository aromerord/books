export interface Game {
    id: number;
    name: string;
}

export interface Person {
    name?: string;
    games?: Game[];
    gender?: string;
    notifications?: boolean;
    terms?: boolean;
}