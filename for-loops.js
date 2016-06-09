for (var i = 5; i <= 120; i+=10) {
	console.log("The current value is ",i);
}

for (var i = 4096; i >= 1; i/=2) {
	console.log("the current value is ",i);
}

var pres = ['Washington', 'Lincoln', 'Roosevelt', 'Truman', 'Grant', 'Obama'];

for (var name in pres){
	var spot =+ name+1
	console.log("At Number " + spot + " is " + pres[name]);
}

var antSpecies = {
  "argentine": {},
  "army": {},
  "big headed": {},
  "black": {},
  "bull": {},
  "carpenter": {},
  "crazy": {},
  "fire": {},
  "glider": {},
  "honey pot": {},
  "jack jumper": {}
}
for (var i in antSpecies){
console.log(Object.keys(antSpecies))
}

// for (var i = 0; i <= antSpecies.length; i++) {
// 	console.log(Object.keys(antSpecies));
// }

Object.getOwnPropertyNames(antSpecies).forEach(function(val, idx, array) {
  console.log(obj[val]);
});