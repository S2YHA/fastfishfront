// const tuple: readonly [string, number] = ['qwe', 5]

// tuple.push(4)

//////////////////////////////////////////////////////

// const name_e: string = 'name' // explicit typing

// const name_i = 'name' // implicit - infer the type of a variable based on its initialization value

// noImplicitAny disable implicit in compiler

//////////////////////////////////////////////////////

// Setting strictNullChecks to true will raise an error that you have not made a guarantee that the loggedInUser exists before trying to use it.

//////////////////////////////////////////////////////

// let x: unknown

// x = 23
// if(x > 23) console.log('bad')
// if(typeof x === 'number' && x > 23) console.log('good')

//////////////////////////////////////////////////////

// interface a {
//     q: string;
//     w: number;
//     e: number;
// }

// type tpick = Pick<a, 'q' | 'w'>

// const tconst: tpick = {
//     q: 'qweqweqw',
//     w: 123,
//     // e: 234 // blad
// }

// type tomit = Omit<a, 'w'>

// const tomiconst = {
//     q: 'qweqweqw',
//     // w: 123, // blad
//     e: 234
// }

// type X = Partial<a>

interface a {
  q(x: number): string
}
interface a {
  q(x: string, y: number): number
}
interface a {
  q(x: number): string
}
