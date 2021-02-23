// Select Dom Elements
const eye = document.querySelector('img')
const input = document.querySelector('input')
const charLengthInd = document.querySelector('#lengthMeter')
const charStrengthSpcInd = document.querySelector('#strengthSpcMeter')
let specialCount = 0


// Add Event Listener To Image And Toggle Input Type Attribute Value 
eye.addEventListener('click', _ => {
   input.type === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password')
})

// Add Event Listener To Detect Keydowns
input.addEventListener('keypress', event => {
   // Store Input Value Length
   let inputLe = input.value.length
   // Store Input Value
   let inputVa = input.value
   // Regex Pattern
   let regPattern = /[!#%&|a-zA-Z]/g
   // Store Regex Match Result
   let checkSpc = inputVa.match(regPattern)
   // Loop Over Array And Match Special Character
   checkSpc.forEach(checksps => {
      switch (checksps) {
         case '!':
            console.log('exc matched')
            specialCount ++
           return  charStrengthSpcInd.textContent = specialCount 
            break;
         case '#':
            console.log('pound matched')
            break;
         case '%':   
            console.log('percent matched')
            break;
         case '&':
            console.log('and sign')
            break ;  
         case null:
            console.log(null)
            break
         default:
            console.log('no matches')
      }
   })

console.log(specialCount)


   // console.log(checkSpc)

   // for(let i = 0; i < makeArr.length; i++){
   //   if(makeArr[i][i] === '!' /*|| makeArr[i] === '#' || makeArr[i] === '%' || makeArr[i] === '^' || makeArr[i] === '&'*/) {
   //      console.log('special character')
   //     }
   //     console.log(makeArr)
   // }

   // checkSpc.length > 4? charStrengthSpcInd.textContent = checkSpc : console.log('no characters') 



   // console.log(result)

   // for(let i = 0; i < result.length; i++) {
   //    if(i === 3) {
   //       alert('3 entered')
   //    }
   // }

   // Update DOM 
   // charStrengthSpcInd.textContent = checkSpc 

   // console.log(inputVa) 
   // Change Inline Background Color Of Input
   //  switch (inputLe) {
   //      case 0:
   //          input.style.backgroundColor = 'red'
   //          break;
   //      case 3:
   //          input.style.backgroundColor = 'tomato'
   //          break;
   //      case 8:
   //          input.style.backgroundColor = 'orangered'
   //          break;
   //      case 12:
   //          input.style.backgroundColor = 'orange'
   //          break;
   //      case 16:
   //          input.style.backgroundColor = 'greenyellow'
   //          break;
   //      case 20:
   //          input.style.backgroundColor = 'lightgreen'
   //      default:
   // }
})