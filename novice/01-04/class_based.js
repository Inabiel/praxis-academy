class Petarunx{
    constructor(nama, kelas){
        this.nama = nama;
        this.kelas = kelas;
        this.hp = 0;
        this.mana = 0;
        this.dmg = 0;
        this.level = 1
    }
    aturAtributPetarung(){
        switch(this.kelas){
            case 'Warrior':
                this.hp = 90;
                this.mana = 130;
                this.dmg = 100;
            case 'Witch':
                this.hp = 90;
                this.mana = 80;
                this.dmg = 90;
        }}

        attributeSekarang(){
            return {
                'kelas':this.kelas,
                'HP':this.hp,
                'mana':this.mana,
                'total_dmg':this.dmg,
                'level':this.level
            }
        }

    naikLevel(){
        this.level +=1
        this.mana+=((20)+(0.4*this.level))
        this.hp+=((30)+(0.6*this.level))
        this.dmg+=((10)+(0.5*this.level))
    }
    berjalan(){
        return(`${this.nama} sedang berjalan ${(Math.random()*100).toFixed()} langkah`)
    }
    berlatih(){
        this.hp += (Math.floor(Math.random() * 80))*(this.level*0.9).toFixed()
        this.mana += (Math.floor(Math.random() * 80))*(this.level*0.9).toFixed()
        this.dmg += (Math.floor(Math.random() * 80))*(this.level*0.9).toFixed()
        return `Telah Berlatih. Menjadi ${petarungSatu.hp} HP, ${petarungSatu.mana} mana, dan ${petarungSatu.dmg} damage`;
    }
}

class PetarunxDua extends Petarunx{
    constructor(nama, kelas){
        super(nama, kelas)
    }

}

const petarungSatu = new Petarunx('Baginda', 'Warrior')
petarungSatu.aturAtributPetarung()
console.log(`${petarungSatu.nama} dengan level ${petarungSatu.level} mempunyai ${petarungSatu.hp} HP, ${petarungSatu.mana} mana, dan ${petarungSatu.dmg} damage`)
console.log(petarungSatu.berlatih())
for(let i = 1; i<= 10; ++i){
    petarungSatu.naikLevel()
}

console.log(petarungSatu.attributeSekarang())