export class Game {
    idGame: number;
    place: string;
    dateHour: string;
    countryLocal: string;
    countryVisitor: string;

    constructor(idGame: number, place: string, dateHour: string, countryLocal: string, countryVisitor: string) {
        this.idGame = idGame;
        this.place = place;
        this.dateHour = dateHour;
        this.countryLocal = countryLocal;
        this.countryVisitor = countryVisitor;
    }
}