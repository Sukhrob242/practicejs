let answers = []
let questions = [
     'what is your name' ,
     'How old are you',
     'where is your home '
]

for ( let  i = 0 ; i < questions.length; i++) {
   answers[i] = prompt(questions[i]) 
}

console.log(answers);