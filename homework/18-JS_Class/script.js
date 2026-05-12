class Car{

constructor(brand,model,year,color){
this.brand=brand;
this.model=model;
this.year=year;
this.color=color;

}
getInfo(){
return `Սա ${this.brand} ${this.model} է,արտադրված ${this.year} թվականին `;
}
getAge(){
    return 2026-this.year;
}
}

const car1= new Car("Toyota","Corolla",2020,"white")
const car2=new Car("BMW","X5",2022,"black")


const cars=[car1,car2];
cars.forEach(car=>{
   console.log(car.getInfo()) ;
   console.log("Տարիք:",car.getAge());
});