let questions = ['How many days does it take for the Earth to orbit the Sun?', "What's the biggest animal in the world?", "What is the largest country in the world?", "How many breaths does the human body take daily?", "Which laptop was the first in the world"]
let answers = ['365', 'The blue whale', "Russia", "20,000 daily", "Toshiba"]
let questio = Array.from(questions)
let allquestions;

let questionsLength = questions.length
let question = document.querySelector('h3')
let compliment = document.querySelector('h4')
let again = document.querySelector('.again')
let section = document.querySelector('.fuck')
let text = document.querySelector('.score')
let startBtn = document.querySelector('.start')
let allBtn = document.querySelectorAll('.btn')
let header = document.querySelector('h1')
let next = document.querySelector('.next')
let all = document.querySelector('.question')
let score = document.querySelector('.got')
let percentT = document.querySelector('.percent')
let percentTo = document.querySelector('.totalPercent')
let count = 0
let totalScore = document.querySelector('.totalScore')
totalScore.textContent = questions.length

startBtn.addEventListener('click', () => {
  let h = document.querySelector('h1')
  let all = document.querySelector('.question')
  all.classList.add('fadeIn')
  startBtn.classList.add('fadeOut')
  h.classList.add('head')
})

document.addEventListener('DOMContentLoaded', init)

function init() {
  let rdm = Math.floor(Math.random() * questions.length);


  question.textContent = questions[rdm]

  switch (question.textContent) {
    case questions[0]:
      console.log('yepppp');
      let ans = ['232', '349', '24', '365']
      let newArr = []
      for (var i = 0, temp = ans, len = ans.length; i < len; i++) {
        let rnd = Math.floor(Math.random() * temp.length)
        newArr.push(temp[rnd])
        temp.splice(rnd, 1)
      }
      allBtn[0].textContent = newArr[0]
      allBtn[1].textContent = newArr[1]
      allBtn[2].textContent = newArr[2]
      allBtn[3].textContent = newArr[3];
      break;
    case questions[1]:
      let ans1 = ['Elephant', 'Bear', 'Lion', 'The blue whale']
      let newArr1 = []
      for (var i = 0, temp = ans1, len = ans1.length; i < len; i++) {
        let rnd = Math.floor(Math.random() * temp.length)
        newArr1.push(temp[rnd])
        temp.splice(rnd, 1)
      }
      allBtn[0].textContent = newArr1[0]
      allBtn[1].textContent = newArr1[1]
      allBtn[2].textContent = newArr1[2]
      allBtn[3].textContent = newArr1[3];
      break;
    case questions[2]:
      let ans2 = ['Nigeria', 'USA', 'China', 'Russia']
      let newArr2 = []
      for (var i = 0, temp = ans2, len = ans2.length; i < len; i++) {
        let rnd = Math.floor(Math.random() * temp.length)
        newArr2.push(temp[rnd])
        temp.splice(rnd, 1)
      }
      allBtn[0].textContent = newArr2[0]
      allBtn[1].textContent = newArr2[1]
      allBtn[2].textContent = newArr2[2]
      allBtn[3].textContent = newArr2[3];
      break;
      /* case questions[4]:
         let ans4 = ['Nigeria', 'Egypt', 'China', 'Ghana']
         let newArr4 = []
         for (var i = 0, temp = ans4, len = ans4.length; i < len; i++) {
           let rnd = Math.floor(Math.random() * temp.length)
           newArr4.push(temp[rnd])
           temp.splice(rnd, 1)
         }
         allBtn[0].textContent = newArr4[0]
         allBtn[1].textContent = newArr4[1]
         allBtn[2].textContent = newArr4[2]
         allBtn[3].textContent = newArr4[3];
         break;*/
    case questions[3]:
      let ans3 = ['20,000 daily', '30,000 daily', '10,000 daily', '15,000 daily']
      let newArr3 = []
      for (var i = 0, temp = ans3, len = ans3.length; i < len; i++) {
        let rnd = Math.floor(Math.random() * temp.length)
        newArr3.push(temp[rnd])
        temp.splice(rnd, 1)
      }
      allBtn[0].textContent = newArr3[0]
      allBtn[1].textContent = newArr3[1]
      allBtn[2].textContent = newArr3[2]
      allBtn[3].textContent = newArr3[3];
      break;
    case questions[4]:
      let ans5 = ['IBM', 'Toshiba', 'Samsung', 'Lenovo']
      let newArr5 = []
      for (var i = 0, temp = ans5, len = ans5.length; i < len; i++) {
        let rnd = Math.floor(Math.random() * temp.length)
        newArr5.push(temp[rnd])
        temp.splice(rnd, 1)
      }
      allBtn[0].textContent = newArr5[0]
      allBtn[1].textContent = newArr5[1]
      allBtn[2].textContent = newArr5[2]
      allBtn[3].textContent = newArr5[3];
      break;
  }
}

allBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let v = answers.includes(btn.textContent)
    if (v) {
      btn.style.background = '#07BD00'
      header.style.color = 'yellow'
      document.body.style.background = '#07BD00'
      count++
      seize(btn)
      next.style.display = 'block'
    } else {
      btn.style.background = 'red';
      document.body.style.background = 'red'
      next.style.display = 'block'
      allBtn.forEach(x => {
        if (answers.includes(x.textContent)) {
          x.style.background = '#07BD00'
        } else {}
      })
      seize2(btn)
    }
  })
})

function seize(btn) {
  allBtn.forEach(b => {
    b.addEventListener('click', () => {
      if (b.textContent != btn.textContent) {
        b.style.background = '#03a9f4'
        document.body.style.background = '#07BD00'
      }
    })
  })
}

function seize2(btn) {
  allBtn.forEach(b => {
    b.addEventListener('click', () => {
      if (b.textContent != btn.textContent) {
        b.style.background = '#03a9f4'
        document.body.style.background = 'red'
        // document.body.style.background = '#580404'
      }
    })
  })
}

next.addEventListener('click', () => {

  rep()
  if (questions.length == 0) {
    // document.body.classList.add('fuck')
    // document.body.style.background = '#363636'
  }
  for (var i = 0, tem = questions, len = questions.length; i < len; i++) {
    let rd = Math.floor(Math.random() * tem.length)
    question.innerText = tem[rd]
    tem.splice(rd, 1)
    // console.log(questions);
    switch (question.textContent) {
      case 'How many days does it take for the Earth to orbit the Sun?':

        let ans = ['232', '349', '24', '365']
        let newArr = []
        for (var i = 0, temp = ans, len = ans.length; i < len; i++) {
          let rnd = Math.floor(Math.random() * temp.length)
          newArr.push(temp[rnd])
          temp.splice(rnd, 1)
        }
        allBtn[0].textContent = newArr[0]
        allBtn[1].textContent = newArr[1]
        allBtn[2].textContent = newArr[2]
        allBtn[3].textContent = newArr[3];
        break;
      case "What's the biggest animal in the world?":
        let ans1 = ['Elephant', 'Bear', 'Lion', 'The blue whale']
        let newArr1 = []
        for (var i = 0, temp = ans1, len = ans1.length; i < len; i++) {
          let rnd = Math.floor(Math.random() * temp.length)
          newArr1.push(temp[rnd])
          temp.splice(rnd, 1)
        }
        allBtn[0].textContent = newArr1[0]
        allBtn[1].textContent = newArr1[1]
        allBtn[2].textContent = newArr1[2]
        allBtn[3].textContent = newArr1[3];
        break;
      case "What is the largest country in the world?":
        let ans2 = ['Nigeria', 'USA', 'China', 'Russia']
        let newArr2 = []
        for (var i = 0, temp = ans2, len = ans2.length; i < len; i++) {
          let rnd = Math.floor(Math.random() * temp.length)
          newArr2.push(temp[rnd])
          temp.splice(rnd, 1)
        }
        allBtn[0].textContent = newArr2[0]
        allBtn[1].textContent = newArr2[1]
        allBtn[2].textContent = newArr2[2]
        allBtn[3].textContent = newArr2[3];
        break;
      case "How many breaths does the human body take daily?":
        let ans3 = ['20,000 daily', '30,000 daily', '10,000 daily', '15,000 daily']
        let newArr3 = []
        for (var i = 0, temp = ans3, len = ans3.length; i < len; i++) {
          let rnd = Math.floor(Math.random() * temp.length)
          newArr3.push(temp[rnd])
          temp.splice(rnd, 1)
        }
        allBtn[0].textContent = newArr3[0]
        allBtn[1].textContent = newArr3[1]
        allBtn[2].textContent = newArr3[2]
        allBtn[3].textContent = newArr3[3];
        break;
        /*  case "Which country is the most populated in Africa":
            let ans4 = ['Nigeria', 'Egypt', 'China', 'Ghana']
            let newArr4 = []
            for (var i = 0, temp = ans4, len = ans4.length; i < len; i++) {
              let rnd = Math.floor(Math.random() * temp.length)
              newArr4.push(temp[rnd])
              temp.splice(rnd, 1)
            }
            allBtn[0].textContent = newArr4[0]
            allBtn[1].textContent = newArr4[1]
            allBtn[2].textContent = newArr4[2]
            allBtn[3].textContent = newArr4[3];
            break;*/
      case "Which laptop was the first in the world":
        let ans5 = ['IBM', 'Toshiba', 'Samsung', 'Lenovo']
        let newArr5 = []
        for (var i = 0, temp = ans5, len = ans5.length; i < len; i++) {
          let rnd = Math.floor(Math.random() * temp.length)
          newArr5.push(temp[rnd])
          temp.splice(rnd, 1)
        }
        allBtn[0].textContent = newArr5[0]
        allBtn[1].textContent = newArr5[1]
        allBtn[2].textContent = newArr5[2]
        allBtn[3].textContent = newArr5[3];
        break;
    }

  }

})
console.log(questions);


function rep() {
  if (questions.includes(question.innerText)) {
    questions.splice(questions.indexOf(question.innerText), 1)
  }
  if (questions.length == 0) {
    all.classList.add('fadeOut')
    again.style.opacity = '1'
    again.style.pointerEvents = 'all'
    let question = document.querySelector('h3')
    text.style.opacity = '1'
    score.textContent = count;
    let percent = (count / questionsLength) * 100
    percentT.textContent = Math.floor(percent)
    if (percent >= 80) {
      percentTo.style.color = '#07BD00'
    } else if (percent >= 50) {
      percentTo.style.color = 'yellow'
    } else {
      percentTo.style.color = 'red'
      compliment.style.opacity = '1'
    }
  }
  console.log(questions);
  document.body.style.background = 'linear-gradient(90deg, #00B4DB, #0083B0)'
  allBtn.forEach(b => {
    b.style.background = '#03a9f4'
  })
  next.style.display = 'none'

  allBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      let v = answers.includes(btn.textContent)
      if (v) {
        btn.style.background = '#07BD00'
        header.style.color = 'yellow'
        document.body.style.background = '#07BD00'
        seize(btn)
        next.style.display = 'block'
      } else {
        btn.style.background = 'red';
        document.body.style.background = 'red'
        next.style.display = 'block'
        allBtn.forEach(x => {
          if (answers.includes(x.textContent)) {
            x.style.background = '#07BD00'
          } else {}
        })
        seize2(btn)
      }
    })
  })
}

again.addEventListener('click', () => {
  location.reload()
})