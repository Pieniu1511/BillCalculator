const price = document.querySelector('#price')
const people = document.querySelector('#people')
const select = document.querySelector('select')
const btn = document.querySelector('.count')
const error = document.querySelector('.error')
const cost = document.querySelector('.cost-info')
const totalCost = document.querySelector('.cost')

const checkInputs = () => {
    cost.style.display = 'none'
    if (price.value != '' && price.value > 0 && people.value != '' && people.value > 0 && select.value != 0) {
        error.textContent = ''
        count()
    } else {
        error.textContent = 'Wartości muszą być większe od zera'
    }
}

const count = () => {
    const numb = (Number(price.value) + price.value * select.value) / people.value
    totalCost.textContent = numb.toFixed(2) 
    console.log(typeof(price.value + (price.value * select.value)));
    cost.style.display = 'block'
}

btn.addEventListener('click', checkInputs)