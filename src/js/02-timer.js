import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';
 
const dataInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');


const PROMPT_DELAY = 1000;

let delta = 0;
let targetDate = null;
let timerId = null;

startBtn.addEventListener('click', onStartTimer);
startBtn.disabled = true;

// параметри вибору дати
const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
    targetDate = selectedDates[0];
    startBtn.disabled = true;
    if(targetDate < Date.now()){
      Report.failure(
          'Oppss...',
          '"Please choose a date in the future"',
          'Okay',
          );
          return;
    }
    startBtn.disabled = false;
   },
 };

 flatpickr(dataInput, options);

 

 function onStartTimer(){
  const date = new Date (dataInput.value);
  targetDate = +date;

  const timerId = setInterval(() => {
    const currentDate = Date.now();
    delta = targetDate - currentDate;
  
    if (delta > 0){

 days.textContent = addLeadingZero(convertMs(delta).days);
 hours.textContent = addLeadingZero(convertMs(delta).hours);
 minutes.textContent = addLeadingZero(convertMs(delta).minutes);
 seconds.textContent = addLeadingZero(convertMs(delta).seconds);
 
    }else  {
        clearTimeout(timerId);
        Report.success(
          'Time is over',
          '"Select new target time"',
          'Okay',
          );
        return 
    } 
  }, PROMPT_DELAY);
 }


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
  return String(value).padStart(2, '0');
}


