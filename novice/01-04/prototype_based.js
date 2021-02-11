function Petarunx(nama,kelas){
    this.nama = nama;
    this.kelas = kelas;
    this.hp = 0;
    this.mana = 0;
    this.dmg = 0;
    this.level = 0;
}

Petarunx.prototype.aturAtributKelas = function(){
    switch(this.kelas){
        case 'Warrior':
            this.hp = 120;
            this.mana = 130;
            this.dmg = 100;
            break;
        case 'Witch':
            this.hp = 100;
            this.mana = 150;
            this.dmg = 10;
            break;
        default:
            break;
    }
}

Petarunx.prototype.naikLevel = function(){
    this.level +=1
    this.mana+=((20)+(0.4*this.level))
    this.hp+=((30)+(0.6*this.level))
    this.dmg+=((10)+(0.5*this.level))
}

let PetarungSatu = new Petarunx('Baginda','Warrior');
PetarungSatu.aturAtributKelas()
PetarungSatu.naikLevel()
console.log(PetarungSatu.mana)

class tambahKalori{
    constructor(kalori){
        this.kalori = kalori;
    }
    //method
    makan(){
        this.kalori += 1500;
    }
    minum(){
        this.kalori += 50;
    }
}

class kurangKalori extends tambahKalori{
    constructor(kalori){
        super(kalori)
    }

    lari(){
        this.kalori -= 500
    }

    renang(){
        this.kalori -= 550
    }

    idealKal(){
        if(this.kalori <= 2000){
            return "kadar kalori ideal"
        }
        else{
            return `Perbanyak olahraga`
        }
    }
}
const hitungKal = new kurangKalori(0)
hitungKal.makan()
hitungKal.minum()
hitungKal.lari()
console.log(hitungKal.kalori)
console.log(hitungKal.idealKal())