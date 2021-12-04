// const checkDogs = function (dogsJulia, dogskate) {
//     const dogsJuliaCorrected = dogsJulia.slice();
//     dogsJuliaCorrected.splice(0,1);
//     //console.log(dogsJuliaCorrected);
//     dogsJuliaCorrected.splice(-2)
//     //console.log(dogsJuliaCorrected);
//     const dogs = dogsJuliaCorrected.concat(dogskate);
//     //console.log(dogs);
//     dogs.forEach(function(dog, i){
//         if(dog >= 3){
//             console.log(`dog number ${i=1} is an adult and ${dog} years old`);
//         }
//         else{
//             console.log(`dog ${i+1} is still a puppy`);
//         }
//     })

// };
// checkDogs([3,5,2,12,7],[4,1,15,8,3]);

// const movements = [100,500,-300,1300,-70,500]

// const eurToUsd = 1.1;

// const pavan = movements.map(function (mov){
//     return mov * eurToUsd;
// });
// console.log(pavan);
// console.log(movements);

// const kumar = []

// for(const mov of movements) kumar.push(mov * eurToUsd);
// console.log(kumar);

// const user = 'pavan kumar pamarthi';

// const userName = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//     console.log(userName);


//coding challange 

// const dogs = [
//     {weight: 22, curFood: 250,owners:['alice','bob']},
//     {weight: 8,curFood:200,owners:['matilda']},
//     {weight: 13,curFood: 275, owners: ['sarah', 'john']},
//     {weight: 32, curFood: 340, owners:['micheal']}
// ];

// dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
// //console.log(dogs);

// let dogSarah = dogs.find(dog =>dog.owners.includes('sarah'));
// console.log(dogSarah);
// console.log(`sarah dog is eating to ${dogSarah.curFood > dogSarah.recFod ? 'much':'little'}`);

// const ownersEatTooMuch = dogs
// .filter(dog =>dog.curFood > dog.recFood)
// .flatMap(dog =>dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
// .filter(dog =>dog.curFood < dog.recFood)
// .flatMap(dog =>dog.owners);
// console.log(ownersEatTooLittle);

// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// const checkEatOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog. recFood * 1.1;
// console.log(dogs.some(checkEatOkay));

// console.log(dogs.filter(checkEatOkay));

// const dogSSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogSSorted);

// const littleSorted = dogs.slice().sort((a,b) => a.curFood - b.curFood);
// console.log(littleSorted);



const calcDisplayDate = (date1,date2) => Math.abs(date2-date1) /(1000 * 60 * 60 * 24);

const date = calcDisplayDate(new Date(2024,5,21) ,new Date(2021,3,12));
console.log(date);

