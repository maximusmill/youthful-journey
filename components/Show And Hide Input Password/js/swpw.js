/* Select Dom Elements */
const eye = document.querySelector('img')
const input = document.querySelector('input')

/* Add Event Listener To Image And Toggle Input Type Attribute Value */
eye.addEventListener('click', _ => {
    input.type === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password')
})



