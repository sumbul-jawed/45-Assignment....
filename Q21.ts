// 21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
    name: string
    price: number
}

// create two object.
const book: item ={
    name: "Accounting",
    price: 500
}
const apple: item ={
    name: "apple",
    price: 200
}


console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`book name: ${apple.name}, price: $${apple.price}`)