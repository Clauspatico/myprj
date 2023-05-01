export class BetSaveDTO {
    token: string;
    playerName: string;
    localForecast: number;
    visitorForecast: number;

    constructor (
        token: string,
        playerName: string,
        localForecast: number,
        visitorForecast: number
    )
    {
        this.token = token;
        this.playerName = playerName;
        this.localForecast = localForecast;
        this.visitorForecast = visitorForecast;    
    }
}