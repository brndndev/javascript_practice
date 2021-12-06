/* array -> Fuction-
            for
            if

        if x==TMC ---> +1

Notice:
working with fuctions, arrays, bools, intergers, for loops, if statements
*/

// function countSheeps(arrayOfSheep) {
//     let sheepCounter = 17
//     for (let x of arrayOfSheep) {
//         console.log(x);
//     if (x == true) {
//         sheepCounter+=1
//         console.log("This is true")
//     }   else {
//             console.log("This is false")
//         }
//     }
//  return countSheeps(sheepCounter);
// }

// console.log(countSheeps(sheepCounter))

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length
}