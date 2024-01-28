import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight', 
        });
    })
    .catch(() => {
        iziToast.error({ 
            title: 'Error',
            message: `❌ Rejected promise in ${delay}ms`,
            position: 'topRight', 
        });
    });

    ev.currentTarget.reset();
}
