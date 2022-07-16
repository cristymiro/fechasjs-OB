const fecha = new Date();
alert(fecha);


const miFecha = new Date(1993, 8, 18);
console.log(miFecha);


let masTarde = fecha.getTime() >= miFecha.getTime();
console.log(masTarde)

console.log(miFecha.getDate());
console.log(miFecha.getMonth()+1);
console.log(miFecha.getFullYear()); 

