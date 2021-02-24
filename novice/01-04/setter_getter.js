class People {
    constructor(name) {
        this._name = name;
        this._hp = null;
        this._mana = null;
        this._dmg = null;
        this._kelas = null;
    }

    get name() {
        return this._name
    }

    set attribute(kelas) {
        switch (kelas) {
            case 'Warrior':
                this._hp = 80;
                this._mana = 100;
                this._dmg = 70;
        }
    }

    get currentAttribute() {
        return {
            'current_hp': this._hp,
            'current_mana': this._mana,
            'current_dmg': this._dmg,
        }
    }
}

newChar = new People('Nabil Izzullah')
newChar.attribute = 'Warrior';
console.log(newChar.currentAttribute)
console.log(newChar.dmg)