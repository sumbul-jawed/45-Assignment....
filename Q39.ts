// 39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(City: string, country: string){
    // return `${nameOfCity} is in ${country}`;
    console.log(`${City}, ${country}`)
};
city_country("Karachi", "Pakistan");

let mycities = city_country("Karachi","Pakistan");
console.log(mycities);
 

console.log(city_country("Dubai", "UAE"))
console.log(city_country("Riyad", "saudia Arabia"))
console.log(city_country("Tokyo", "Japan"));
