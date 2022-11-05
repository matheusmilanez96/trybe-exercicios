const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
//passo 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheMonth = () => {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    
    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
    } else if (day === 4 || day === 11 || day === 18) {
      // Caso o dia for 4, 11 ou 18
      dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}

createDaysOfTheMonth();

//passo 2
const createHolidayButton = (buttonName) => {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  
  buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

//passo 3
const mudarCorHoliday = () => {
  let holidayButton = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday');
  let corDefault = 'rgb(238,238,238)';
  let corNova = 'purple';

  holidayButton.addEventListener('click', () => {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === corNova) {
        holidays[i].style.backgroundColor = corDefault;
      } else {
        holidays[i].style.backgroundColor = corNova;
      }
    }
  });
}

mudarCorHoliday();

//passo 4
const createFridayButton = (buttonName) => {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;

  buttonContainer.appendChild(newButton);
}

createFridayButton("Sexta-feira")

//passo 5
const mudarTextoFriday = (fridaysArray) => {
  let fridayButton = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');
  let newFridayText = "Sextou!!!"

  fridayButton.addEventListener('click', () => {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML !== newFridayText) {
        fridays[i].innerHTML = newFridayText;
      } else {
        fridays[i].innerHTML = fridaysArray[i];
      }
    }
  });
}

let decemberFridays = [ 4, 11, 18, 25 ];
mudarTextoFriday(decemberFridays);