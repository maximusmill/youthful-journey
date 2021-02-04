/* Select Dom Elements */
const eye = document.querySelector('img')
const input = document.querySelector('input')
const charLengthInd = document.querySelector('#lengthMeter')

/* Add Event Listener To Image And Toggle Input Type Attribute Value */
eye.addEventListener('click', _ => {
    input.type === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password')
})

/* Add Event Listener To Detect Keydowns */
input.addEventListener('keydown', (event) => {
    /* Store Key Pressed */
    let kp = event.key
    /* Store Input Value Length*/
    let inputLe = input.value.length
    /* Disable Arrow Key Functionality In Input */
    if (kp === 'ArrowUp' || kp === 'ArrowDown' || kp === 'ArrowLeft' || kp === 'ArrowRight') {
        event.preventDefault()
    }
    /* Change Inline Background Color Of Input */
    switch (inputLe) {
        case 0:
            input.style.backgroundColor = 'red'
            break;
        case 3:
            input.style.backgroundColor = 'tomato'
            break;
        case 8:
            input.style.backgroundColor = 'orangered'
            break;
        case 12:
            input.style.backgroundColor = 'orange'
            break;
        case 16:
            input.style.backgroundColor = 'greenyellow'
            break;
        case 20:
            input.style.backgroundColor = 'lightgreen'
        default:
   }
})