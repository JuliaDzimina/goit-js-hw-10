import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from '../img/bi_x-octagon.svg';

// reference from HTML
const refs = {
    dateTime: document.querySelector('input#datetime-picker'),
    dataDay: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
    buttonStart: document.querySelector('[data-start]'),
  };

//The initial state of the button
refs.buttonStart.disabled = true;

//Event listener
refs.buttonStart.addEventListener('click', startTimer);


//Flatpickr & iziToast
let userSelectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];   

        if (userSelectedDate < Date.now()) {
            refs.buttonStart.disabled = true;
          iziToast.error({
              message: 'Please choose a date in the future',
              position: 'topRight',
              iconUrl: iconError,
              messageColor: '#FFF',
              backgroundColor: '#EF4040',
              messageSize: '16px',
          });
      } else {
        refs.buttonStart.disabled = false;

        }
    },
  };
  
flatpickr('#datetime-picker', options);

// Calculation and redetermination of time


function startTimer() {
    

    const selectedDate = setInterval(() => {
     const currentTime = new Date();
     let targetTime = userSelectedDate- currentTime;
       const convertedData =  convertMs(targetTime);
       refs.dataDay.textContent = addLeadingZero(convertedData.days);
       refs.dataHours.textContent = addLeadingZero(convertedData.hours);
       refs.dataMinutes.textContent = addLeadingZero(convertedData.minutes);
       refs.dataSeconds.textContent = addLeadingZero(convertedData.seconds);
       targetTime -= 1000;

       refs.dateTime.disabled = true;
       refs.buttonStart.disabled = true;


      if (targetTime <= 0) {
       clearInterval(selectedDate);
       refs.dateTime.disabled = false;
     }
    }, 1000);
    
   };

   // Identify the time format
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  };


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
  };