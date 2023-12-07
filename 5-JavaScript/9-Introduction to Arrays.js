// 




let superheros = ["Superman", "Batman", "Joker", "Spiderman", "Wonder Woman"];

console.log("Hero 1 is", superheros[0]);
console.log("Hero 5 is", superheros[4]);

superheros[2] = "Docter Strang";
console.log(superheros);

// Push method ( Adding a new value to array)
superheros.push("Deadpool");
console.log(superheros);

// Pop method ( Removing last value in the array)
superheros.pop();
console.log(superheros);

// Array Iteration
for (let i = 0; i <= 4; i++) {
    console.log("Hero", i+1, "is", superheros[i]);
}

// forEach method
superheros.forEach(function(hero) {
    console.log("Hero is", hero);
});

//Array Methods
console.log("Array length is", superheros.length);
console.log("Index of Wonder Woman is", superheros.indexOf("Wonder Woman"));
console.log ("Jonied Array: ", superheros.join("-"));

let slicedArray = superheros.slice(0, 1);
console.log(slicedArray);



