import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconError from '../img/bi_x-octagon.svg';
import iconOk from '../img/bi_check2-circle.svg';

const form = document.querySelector('form');
form.addEventListener('submit', onFormSubmit);

function createPromise(delay, state){
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (state === "fulfilled") {
            resolve();
        } else {
            reject();
        }
    }, delay);
});
return promise;
};

function  onFormSubmit(ev){
    ev.preventDefault(); 
    
    const delay = form.elements.delay.value;
    const state = form.elements.state.value;
    
    createPromise(delay, state)
    .then(() => {
        iziToast.success({ 
            title: 'OK',
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            iconUrl: iconOk,
            titleColor: '#FFF',
            messageColor: '#FFF',
            backgroundColor: '#59A10D',
            messageSize: '16px',
            

        });
    })
    .catch(() => {
        iziToast.error({ 
            title: 'Error',
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight', 
            iconUrl: iconError,
            titleColor: '#FFF',
            messageColor: '#FFF',
            backgroundColor: '#EF4040',
            messageSize: '16px',
        });
    });

    ev.currentTarget.reset();
}
