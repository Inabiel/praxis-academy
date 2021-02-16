let dictionaries = [
    {
    nama: {
        'nama_dpn' : 'Nabil',
        nama_blk : 'Izzullah'
    },
    nama_lkp : function(){
        return (this.nama.nama_dpn + ' ' +  this.nama.nama_blk)
    },
    nim : '124568',
    alamat: {
        desa : 'Jati',
        kelurahan : 'Wonokromo',
        kecamatan : 'Pleret',
        provinsi : 'DIY'
    }},
    {
    nama: {
        nama_dpn : 'Sri',
        nama_blk : 'Getuk'
    },
    nama_lkp : function(){
        return(`${this.nama.nama_dpn} ${this.nama.nama_blk}`)
    },
    nim : '382912',
    alamat: {
        desa : 'Jati',
        kelurahan : 'Wonokromo',
        kecamatan : 'Pleret',
        provinsi : 'DIY'        
    }}
]

console.log(dictionaries[0].nama.nama_dpn)