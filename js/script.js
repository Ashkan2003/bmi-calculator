let $ = document
const weightInput = $.querySelector('#weight')
const heightInput = $.querySelector('#height')
const weightVal = $.querySelector('#weight-val')
const heightVal = $.querySelector('#height-val')
const bmiResult = $.querySelector('#result')
const categoryElem = $.querySelector('#category')



function bmiCalculator() {

    let weightInputValue = weightInput.value
    let heightInputValue = heightInput.value

    weightVal.innerHTML = weightInputValue + "kg (Weight)"
    heightVal.innerHTML = heightInputValue + "cm (height)"


    let bmiValue = (weightInputValue / (Math.pow(heightInputValue / 100, 2))).toFixed(1) // bmi formole = weight(kg) / hight(m)*hight(m) . with toFixed() method ,we decrise the digit to 1 digit

    bmiResult.innerHTML = bmiValue

    if (bmiValue < 18.5) { // کم وزنی
        categoryElem.innerHTML = 'Under Weight'
        bmiResult.style.color = '#ffc44d'
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) { // وزن نرمال
        categoryElem.innerHTML = 'Normal Weight'
        bmiResult.style.color = '#0be881'
    } else if (bmiValue >= 25 && bmiValue < 29.9) { // اضافه وزن
        categoryElem.innerHTML = 'Over Weight'
        bmiResult.style.color = '#ff884d'
    } else { //چاق
        categoryElem.innerHTML = 'Obese'
        bmiResult.style.color = '#ff5e4d'
    }
}






weightInput.addEventListener('input', bmiCalculator) // when the input value change it fires the oninput event
heightInput.addEventListener('input', bmiCalculator) // when the input value change it fires the oninput event