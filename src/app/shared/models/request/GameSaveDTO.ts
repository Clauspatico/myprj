export class GameSaveDTO {
    Place: string;
    DateHour: string;
    CountryLocal: string;
    CountryVisitor: string;

    constructor(
        Place: string,
        DateHour: string,
        CountryLocal: string,
        CountryVisitor: string
        )
    { 
        this.Place = Place;
        this.DateHour = DateHour;
        this.CountryLocal = CountryLocal;
        this.CountryVisitor = CountryVisitor;
    }
}