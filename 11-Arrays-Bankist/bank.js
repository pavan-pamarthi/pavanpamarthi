const account1 = {
    owner: 'pavan kumar',
    movements: [200,450,-400,3000,-650,-130,700,1300],
    interestRate:1.2,
    pin: 1111,
    movementsDates:[
        '2019-11-18t21:31:17.178z',
        '2019-12-23t07:42:02.383z',
        '2020-01-21t08:34:43.232z',
        '2020-02-13t02:23:32.121z',
        '2020-04-22t23:12:21.221z',
        '2020-05-12t01:44:22.442z',
        '2020-06-13t15:22:33.222z',
        '2021-11-29t12:12:12.112z',
        ],
         currency: 'eur',
        locate: 'en-UK', // de-DE
        };

const account2 = {
    owner:'santosh karnena',
    movements:[5000,3400,-1300,8000,-150,-700,70],
    interestRate: 1.5,
    pin: 2222,
    movementsDates:[
        '2019-09-18t21:31:17.128z',
        '2019-10-23t07:42:02.323z',
        '2020-11-21t08:34:43.233z',
        '2020-12-13t02:23:32.178z',
        '2020-01-22t23:12:21.234z',
        '2020-02-12t01:44:22.442z',
        '2020-03-13t15:22:33.222z',
         '2020_04-12t12:12:12.112z',
            ],
            currency: 'eur',
            locate: 'pt-PT', // de-DE`
};

const account3 = {
    owner: 'ram kumar',
    movements: [1200,-200,-600,400,-50,-460,300],
    interestRate: 0.7,
    pin: 3333,
};
 const account4 = {
     owner: 'sai reddy',
     movements: [300,500,-600,5000,-1200,500,-3000,8000],
     interestRate: 1,
     pin: 4444,
 };

 const accounts = [account1, account2, account3, account4]; 

 const labelWelcome = document.querySelector('.welcome');
 const labelDate = document.querySelector('.date');
 const labelBalance = document.querySelector('.balance__value');
 const labelSumIn = document.querySelector('.summary__value--in');
 const labelSumOut = document.querySelector('.summary__value--out');
 const labelSumInterest = document.querySelector('.summary__value--interest');
 const labelTimer = document.querySelector('.timer');


 const containerApp = document.querySelector('.app');
 const containerMovements = document.querySelector('.movements');

 const btnLogin = document.querySelector('.login__btn');

 const btnTransfer = document.querySelector('.form__btn--transfer');

 const btnLoan = document.querySelector('.form__btn--loan');
 const btnClose = document.querySelector('.form__btn--close');
 const btnSort = document.querySelector('.btn--sort');

 const inputLoginUserName = document.querySelector('.user-input');
 const inputLoginPin = document.querySelector('.user-password');
 const inputTranserTo = document.querySelector('.form__input--too');
 const inputTransferAmount = document.querySelector('.form__input--amount');
 const inputLoanAmount = document.querySelector('.form__input--loan--amount');
 const inputCloseUsername = document.querySelector('.form__input--user');
 const inputClosePin = document.querySelector('.form__input--pin');


 const formatMOvementsDate = function(date,locate){
    const calcDaysPassed = (date1,date2) => 
    Math.round(Math.abs(date2-date1) /(1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);

    if(daysPassed === 0) return 'today';
    if(daysPassed === 1) return 'yesterday';
    if(daysPassed <= 7) return `${daysPassed} days ago`;
    // else{
    //     const day = `${date.getDate()}`.padStart(2,0);
    //     const month = `${date.getMonth() + 1}`.padStart(2,0);
    //     const year = date.getFullYear();
        return new Intl.DateTimeFormat(locate).format(date);
    }

    
    
    //const date = calcDisplayDate(new Date(2024,5,21) ,new Date(2021,3,12));

    
    //console.log(date);

    //console.log(acc.movements);
    
 const displayMovements = function(acc, sort = false){
    containerMovements.innerHTML = '';
    //console.log(movements);
    const m = acc.movements.sort((a, b) => a-b);
    // console.log(m, "curren");
    const movs = sort ? acc.movements : m;
    console.log(movs, "ccccd")
    movs.forEach(function(mov,i){
         console.log(mov);
         const type = mov > 0 ? 'deposit' : 'withdrawl';
         
        
         const date = new Date(acc.movementsDates[i]);
         const displayDate = formatMOvementsDate(date,acc.locate);
 
         const html =` 
         <div class="movements__row">
         <div class="movements__type movements__type--${type}">
         ${i+1} ${type}</div>
         <div class="movements__date">${displayDate}</div>
         <div class="movements__value">${mov.toFixed(2)} €</div> 
     </div>`;
     console.log(html)

     containerMovements.insertAdjacentHTML('afterbegin', html);
     });
 };



 const calcDisplayBalance = function(acc){
    acc.balance = acc.movements.reduce((acc,mov) => acc+mov,0);
    labelBalance.textContent = `${acc.balance.toFixed(2)} €`;
 };



 const calcDisplaySummary = function(acc){
     const incomes = acc.movements.filter(mov => mov >0)
     .reduce((acc,mov) => acc + mov, 0);
     labelSumIn.textContent = `${incomes.toFixed(2)} €`;

     const outComes = acc.movements.filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outComes.toFixed(2))} €`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate)/100)
        .filter((int, i, arr) =>{
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
    }

// let currentAccount;
// currentAccount = account1;
// updateInterface(currentAccount);
// containerApp.style.opacity = 100;


 const createUserNames = function(accs){
     accs.forEach(function (acc){
         acc.userName = acc.owner
         .toLowerCase()
         .split(' ')
        .map(name => name[0])
        .join('');
     });
 };
 createUserNames(accounts);

 const movements = [200,450,-400,3000,-650,-130,700,1300];

 createUserNames(accounts);
 //console.log(accounts);

 const deposits = movements.filter(function(mov){
     return mov > 0;
 });

 //console.log(deposits);

 const withdrawls = movements.filter(mov => mov < 0);

//  console.log(movements);
//  console.log(withdrawls);

 const balance = movements.reduce(function(acc, cur, i, arr){
    //  console.log(`iteration ${i} ${acc}`)
     return acc + cur; 
 },
 0);

 console.log(balance);

 const max = movements.reduce((acc, mov) => {
     if(acc > mov) return acc;
     else return mov;
 }, movements[0]);

 //console.log(max);

 const firstWithdrawl = movements.find(mov => mov < 0);
//  console.log(movements);
//  console.log(firstWithdrawl);

 const account = accounts.find(pav => pav.owner ==='santosh karnena');
 //console.log(account);


 btnLogin.addEventListener('click', function(e) {
     e.preventDefault();
    //console.log('login');

    currentAccount = accounts.find
    (acc => acc.userName === inputLoginUserName.value);

    if(currentAccount?.pin === Number(inputLoginPin.value)){
        labelWelcome.textContent = `welcome back, ${
        currentAccount.owner.split(' ')[0]}`;
   
    
    containerApp.style.opacity = 100;


    //const now = new Date();
    const now = new Date();
    const options ={
        hours: 'numeric',
        minutes: 'numeric',
        day : 'numeric',
        month: 'long',
        year: '2-digit',
    };

    // const locate = navigator.language;
    // console.log(locate);
labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locate, options).format(now);

    // const day = `${now.getDate()}`.padStart(2,0);
    // const month = `${now.getMonth() + 1}`.padStart(2,0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2,0);
    // const min = `${now.getMinutes()}`.padStart(2,0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`

    //clear input fields
    inputLoginUserName.value = inputLoginPin.value = '';
    // console.log("workdin", currentAccount);
    updateInterface(currentAccount);
    // console.log("s");
 
        };

 });

 
const updateInterface = function(acc){
    displayMovements(acc);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);


}

let currentAccount;

 currentAccount = account1;
 updateInterface(currentAccount);
  containerApp.style.opacity = 100;
 
  const now = new Date();
  const day = `${now.getDate()}`.padStart(2,0);
  const month = `${now.getMonth() + 1}`.padStart(0,2);
  const year = now.getFullYear();
  const hour = now.getHours();
  const min = now.getMinutes();
  labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

 btnTransfer.addEventListener('click', function(e){
     e.preventDefault();
     const amount = Number(inputTransferAmount.value);
     const recieverAcc = accounts.find(acc => acc.userName === inputTranserTo.value);
    // console.log('btnTransfer');

    inputTransferAmount.value = inputTranserTo.value = '';

    

     if(amount > 0 && recieverAcc && currentAccount.balance >= amount &&
        recieverAcc.userName !== currentAccount.userName){
            //console.log(currentAccount.movements);
            currentAccount.movements.push(-amount);
            //console.log(currentAccount.movements);
            recieverAcc.movements.push(amount); 

            currentAccount.movementsDates.push(new Date().toISOString());
            recieverAcc.movementsDates.push(new Date().toISOString());
            //console.log('success');
            updateInterface(currentAccount);
        }
 })

 btnLoan.addEventListener('click', function(e){
     e.preventDefault();
     const amount = Math.floor(inputLoanAmount.value);
     if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
            currentAccount.movements.push(amount);
            //recieverAcc.movements.push(amount);
            currentAccount.movementsDates.push(new Date().toISOString());

            //updateUI
        updateInterface(currentAccount);
         }
        inputLoanAmount.value = '';
 })

 btnClose.addEventListener('click', function(e){
    e.preventDefault();

    
    if(inputCloseUsername.value === currentAccount.userName 
        && Number(inputClosePin.value) === currentAccount.pin)
        {
            const index = accounts.findIndex(acc => acc.userName === currentAccount.userName);
            //console.log(index);
            accounts.splice(index, 1);

    containerApp.style.opacity = 0;

        }
        inputCloseUsername.value = inputClosePin.value = '';
        
 })

//  console.log(accounts);

 btnSort.addEventListener('click', function(e){
     e.preventDefault();
    //  console.log(currentAccount.movements);
     const  m = currentAccount.movements;
     displayMovements(m,true);
 })



//  console.log(movements.includes(-130));


//some and every  methods
 let anyDeposits = movements.some(acc => acc.movements);
//  console.log(anyDeposits);
 const allDeposists = movements.every(mov => mov > 0);
//  console.log(allDeposists);

const arr = [1,2,3,[4,5,6],7,8]
// console.log(arr.flat());

const arrLength = [1,[2,3],[4,[5,6],[7,8]]]
// console.log(arrLength.flat(2));


// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const accountBalance = allMovements.reduce((acc,mov) => acc + mov, 0);
// console.log(accountBalance);

const overallBalance = accounts.map(acc => acc.movements)
.flat().reduce((acc,mov) => acc + mov, 0);
// console.log(overallBalance);

const overallBalance2 = accounts.flatMap(acc => acc.movements)
.reduce((acc,mov) => acc + mov, 0);
// console.log(overallBalance);



//practice coding

// const bankDepositSum = accounts.map(acc => acc.movements).flat()
// .filter(mov => mov > 0)
// .reduce((cur, sum) => cur + sum, 0);
// console.log(bankDepositSum);

// // num of deposts

// const numDeposits1000 = accounts.flatMap(acc => acc.movements)
// .filter(mov => mov >=1000);
// console.log(numDeposits1000);

// const numDeposits1000 = accounts.flatMap(acc => acc.movements)
// .reduce((mov,cur) => cur > 1000 ? mov+1 : mov, 0);
// console.log(numDeposits1000);

// const {deposits, withdrawls} = accounts.flatMap(acc => acc.movements)
// .reduce((count, cur) =>{ 
// count[cur > 0 ? 'deposits' : 'withdrawls'] +=cur;
// return count;
// },
// {deposits : 0, withdrawls : 0}
// );
// console.log(deposits,withdrawls)

const convertTitleCase = function(title){
    const exceptions = ['a', 'an', 'and', 'the','but','or', 'nn','in','with'];
    const titleCase = title.toLowerCase()
    .split(' ')
    .map(word => exceptions.includes (word) ? word : word[0].
    toUpperCase() + word.slice(1)).join(' ')
    return titleCase;
}
// console.log(convertTitleCase('this is nice title'));
// console.log(convertTitleCase('this is a LONG title but not too log'));
// console.log(convertTitleCase('and here is another title with EXAMPLE'));



// const account1 = {
//     owner: 'pavan pamarhti',
//     movements: [200,455.23,-306.5,25000,-642.21,133.9,79.97,1300],
//     interestRate: 1.2,
//     pin: 1111,
//     movementsDates:[
//         '2019-11-18t21:31:17.178z',
//         '2019-12-23t07:42:02.383z',
//         '2020-01-21t08:34:43.232z',
//         '2020-02-13t02:23:32.121z',
//         '2020-04-22t23:12:21.221z',
//         '2020-05-12t01:44:22.442z',
//         '2020-06-13t15:22:33.222z',
//         '2020_08-12t12:12:12.112z',
//     ],
//     currency: 'eur',
//     lcate: 'pt-PT', // de-DE
// };


// const account2 = {
//     owner: 'ram santosh',
//     movements: [800,555.23,-506.5,35000,-12020.21,1333.9,178.97,13000],
//     interestRate: 1.6,
//     pin:2222,
//     movementsDates:[
//         '2019-09-18t21:31:17.128z',
//         '2019-10-23t07:42:02.323z',
//         '2020-11-21t08:34:43.233z',
//         '2020-12-13t02:23:32.178z',
//         '2020-01-22t23:12:21.234z',
//         '2020-02-12t01:44:22.442z',
//         '2020-03-13t15:22:33.222z',
//         '2020_04-12t12:12:12.112z',
//     ],
//     currency: 'eur',
//     lcate: 'pt-PT', // de-DE
// };

 

 


 





