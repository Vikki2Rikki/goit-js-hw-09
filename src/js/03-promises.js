function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const formContaner = document.querySelector('.form');
const delayContainer = document.querySelector('input[name="delay"]');
const stepContaner = document.querySelector('input[name="step"]');
const amountContaner = document.querySelector('input[name="amount"]');
const btnContaner = document.querySelector('button');
console.log(btnContaner);


btnContaner.addEventListener('submit', createPromise);
formContaner.addEventListener('input', onInputNumbers);

function onInputNumbers(event){
  
const delay = delayContainer.value;
console.log(delay);

  const step = stepContaner.value;
  console.log(step);

  const position = amountContaner.value;
  console.log(position);
}


//  function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

 
//  createPromise(2, 1500)
//  .then(({ position, delay }) => {
//    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//  })
//  .catch(({ position, delay }) => {
//    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//  });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const val = Math.random();
  if(val > 0.5){
resolve('Yesss!!!');
  } else {
reject('Nooooo((((')
  }

  }, 2000)
});

console.log(promise);

promise.then((value) => {console.log(value);}).catch((err) => {console.log(err);}).finally()