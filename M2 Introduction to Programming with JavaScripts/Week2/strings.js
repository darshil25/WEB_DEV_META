//some arrays methods works in strings but not all
//ex. .pop() won't work in strings

var nam = 'Shyam';
var job = 'berozgar';

for(var i=0; i<nam.length; i++){
    console.log(nam[i]);
}

console.log(nam + job); //in js + operator work as concat method in strings
console.log(nam.concat(job));