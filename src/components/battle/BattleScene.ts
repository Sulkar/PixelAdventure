import "./BattleScene.scss";

export class BattleScene {

    private leftCol: HTMLElement = document.createElement("div");
    private rightCol: HTMLElement = document.createElement("div");

    constructor() {

    }

    /**
     * start
     */
    public start() {

    }

    /**
     * name
     */
    public createScene(): HTMLElement {

        const battleRow = document.createElement("div");
        battleRow.className = "row";

        this.leftCol.id = "leftCol";
        this.leftCol.className = "col";
        this.leftCol.textContent = "player";

        this.rightCol.id = "rightCol";
        this.rightCol.className = "col";
        this.rightCol.textContent = "enemy";

        battleRow.appendChild(this.leftCol);
        battleRow.appendChild(this.rightCol);

        return battleRow;
    }

    /**
     * addPlayer
     */
    public addPlayer() {

        const playerImg = document.createElement("img");
        playerImg.src = "/data/player.png";

        this.leftCol.appendChild(playerImg);

    }
}