for(blah=0;blah<3;blah++){

var pound="#"; 

for (var counter = 0; counter < 10; counter = counter + 1){
     console.log(pound);
     pound=pound+'#';
}

for (var counter = 0; counter < 10; counter = counter + 1){
pound=pound.slice(0,-1);
console.log(pound);
}

}
