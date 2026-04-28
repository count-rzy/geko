// // function tari(year) {
// //     return 2026 - year
// // }

// // const year = 1945
// // const age = tari(year);

// // console.log(`duq ${age} tarekan eq`)

// function tiv(number) {
//   return number ** 3;
// }

// console.log(tiv(3))

//function  naxadasutyun(str){
 //   return str.charAt(0).toUpperCase() + str.slice(1);
//}

//console.log(naxadasutyun('jdeb ijgs igie'))

//class Fish{
 //   constructor(anun, gin, qanak){
    //   this.anun = anun
  //     this.gin = gin
//       this.qanak = qanak
//    }
//}

//const fugu = new Fish('fugu', '$400', 'liqy')

//console.log(fugu)

class Transport{
    constructor(tesak, qanak){
this.tesak = tesak
this.qanak = qanak

    }
}

class Info extends Transport{
    constructor(tesak, qanak, model, gin){
        super(tesak, qanak)
    this.gin = gin 
    this.model = model
}

    info(){
    console.log(`aha dzer ${this.tesak}nery, ${this.qanak} hat ${this.model} modeli, voronq arjen ${this.gin}`)
}
}

const avto = new Info('inqnatir', 2, 'Airbus A350',  '$16.000.000')

avto.info()