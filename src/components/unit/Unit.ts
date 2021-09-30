class Unit {
    private maxHP: number;
    private hp: number;
    private dmg: number;

    constructor(maxHP: number, dmg: number) {
        this.maxHP = maxHP;
        this.hp = this.maxHP;
        this.dmg = dmg;
    }

    public attack(target: Unit) {
        target.takeDamage(this.dmg)
    }

    public takeDamage(damage: number) {
        this.hp -= damage;
    }
}
