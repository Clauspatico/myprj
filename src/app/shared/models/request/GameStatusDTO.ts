export class GameStatusDTO {
    idGame: number;
    scoreboardLocal?: number;
    scoreboardVisitor?: number;
    penaltiesLocal?: number;
    penaltiesVisitor?: number;
    finished?: boolean;
    canceled?: boolean;

    constructor (
        idGame: number,
        scoreboardLocal?: number,
        scoreboardVisitor?: number,
        penaltiesLocal?: number,
        penaltiesVisitor?: number,
        finished?: boolean,
        canceled?: boolean
    )
    {
		this.idGame = idGame;
        this.scoreboardLocal = scoreboardLocal;
        this.scoreboardVisitor = scoreboardVisitor;
        this.penaltiesLocal = penaltiesLocal;
        this.penaltiesVisitor = penaltiesVisitor;
        this.finished = finished;
        this.canceled = canceled;
    }
}