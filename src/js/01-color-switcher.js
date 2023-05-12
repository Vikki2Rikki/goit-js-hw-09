const buttonStartContaner = document.querySelector('button[data-start]');
const buttonStopContaner = document.querySelector('button[data-stop]');

let timerId = null;

buttonStartContaner.addEventListener('click', onClickStart);
buttonStopContaner.addEventListener('click', onClickStop);

function onClickStart(event){
   timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
      buttonStartContaner.setAttribute('disabled','disabled');
    }, 1000);

   }
   
function onClickStop(event){
   clearInterval(timerId);
   buttonStartContaner.removeAttribute('disabled');
}

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 }


