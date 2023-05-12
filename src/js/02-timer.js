import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const currentDate = Date.now();
console.log(currentDate); 

const dataInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

dataInput.addEventListener = document.addEventListener('input', onInputDate);
startBtn.addEventListener('click', onStartTimer);

// параметри вибору дати
const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
     console.log(selectedDates[0]);
   },
 };

 const fp = flatpickr(dataInput, options);

 function onInputDate(event){
  const targetDate = new Date (event.target.value);
  return console.log(+targetDate);
 }

 console.log(dataInput.selectedDates);

 //console.log(fp.selectedDates[0]);

 function onStartTimer(event){
  console.log(event.target);
 }

//  function timer (targetDate) {
// setInterval(() =>{
//   const delta = targetDate - currentDate;
//   console.log(targetDate);
//   console.log(currentDate);
//   console.log(delta);
//   rendlerTimer(delta);
// }, 1000);
//  }

//  function rendlerTimer(string) {
// console.log(string);
//  }

//  timer(onInputDate());