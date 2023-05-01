export class SessionSaveDTO {
    name: string;
    idgame: number;
    betValue?: number;

    constructor(name: string, idgame: number, betValue?: number){
        this.name = name;
        this.idgame = idgame;
        this.betValue = betValue;
    }
}