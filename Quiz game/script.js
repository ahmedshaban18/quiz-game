
let question = ["how many people lives in earth" , "4 billion" , "5 billion" , "7 million" , "8 billion"]
let question2 = ["What is the largest planet in our solar system?" , "A) Earth" ,"B) Jupiter" , "C) Mars" , "D) Venus"]
let question3 = ["How many continents are there on Earth?" , "A) 5" ,"B) 6" , "C) 7" , " D) 8"]
let question4 = ["What is the capital of Japan?" , "A) Seoul" ,"B) Beijing" , "C) Bangkok" , "D) Tokyo"]
let question5 = ["Which animal is known as the King of the Jungle?" , "A) Lion" ,"B) Tiger" , "C) Elephant" , " D) Wolf"]
let question6 = ["How many days are there in a leap year?" , "A) 364" ,"B) 365" , "C) 366" , "D) 367"]
let question7 = ["What is the chemical symbol for gold?" , "A) Ag" ,"B) Fe" , "C) Au" , "D) Go"]




let question8 = ["" , "5 dishlion" ,"4 million" , "3 million" , "answer is unknown"]

let question9 = ["Which ocean is the largest?" , "5 dishlion" ,"4 million" , "3 million" , "answer is unknown"]

let question10 = ["Who wrote Romeo and Juliet?" , "5 dishlion" ,"4 million" , "3 million" , "answer is unknown"]


let question11 = ["What is the fastest land animal?" , "5 dishlion" ,"4 million" , "3 million" , "answer is unknown"]


let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let questionOutput = document.getElementById("question")
let score = document.getElementById("score")
let num = Math.floor(Math.random() * 10)
console.log(num)
let answerCorrect
let response1
let response2
let response3
let response4

let userScore = 0

//deternune the question
//if user click btn 1 saved in response
//
if(num <= 1){
    questionOutput.innerHTML = `<h2>${question[0]}</h2>` ;  
    answer1.innerHTML = `${question[1]}` ;  
    answer2.innerHTML = `${question[2]}` ;  
    answer3.innerHTML = `${question[3]}` ;  
    answer4.innerHTML = `${question[4]}` ; 
    answerCorrect = question[4]
    response1 = question[1]
    response2 = question[2]
    response3 = question[3]
    response4 = question[4] 
  
}else if(num == 2){
     questionOutput.innerHTML = `<h2>${question2[0]}</h2>` ;  
    answer1.innerHTML = `${question2[1]}` ;  
    answer2.innerHTML = `${question2[2]}` ;  
    answer3.innerHTML = `${question2[3]}` ;  
    answer4.innerHTML = `${question2[4]}` ; 
    answerCorrect = question2[2]
    response1 = question2[1]
    response2 = question2[2]
    response3 = question2[3]
    response4 = question2[4]

}else if(num == 3){
     questionOutput.innerHTML = `<h2>${question3[0]}</h2>` ;  
    answer1.innerHTML = `${question3[1]}` ;  
    answer2.innerHTML = `${question3[2]}` ;  
    answer3.innerHTML = `${question3[3]}` ;  
    answer4.innerHTML = `${question3[4]}` ; 
    answerCorrect = question3[4]
    response1 = question3[1]
    response2 = question3[2]
    response3 = question3[3]
    response4 = question3[4]

}else if(num == 4){
     questionOutput.innerHTML = `<h2>${question4[0]}</h2>` ;  
    answer1.innerHTML = `${question4[1]}` ;  
    answer2.innerHTML = `${question4[2]}` ;  
    answer3.innerHTML = `${question4[3]}` ;  
    answer4.innerHTML = `${question4[4]}` ; 
    answerCorrect = question4[4]
    response1 = question4[1]
    response2 = question4[2]
    response3 = question4[3]
    response4 = question4[4]
    
}else if(num == 5){
     questionOutput.innerHTML = `<h2>${question5[0]}</h2>` ;  
    answer1.innerHTML = `${question5[1]}` ;  
    answer2.innerHTML = `${question5[2]}` ;  
    answer3.innerHTML = `${question5[3]}` ;  
    answer4.innerHTML = `${question5[4]}` ; 
    answerCorrect = question5[1]
    response1 = question5[1]
    response2 = question5[2]
    response3 = question5[3]
    response4 = question5[4]
  
}else if(num == 6){
     questionOutput.innerHTML = `<h2>${question6[0]}</h2>` ;  
    answer1.innerHTML = `${question6[1]}` ;  
    answer2.innerHTML = `${question6[2]}` ;  
    answer3.innerHTML = `${question6[3]}` ;  
    answer4.innerHTML = `${question6[4]}` ; 
    answerCorrect = question6[3]
    response1 = question6[1]
    response2 = question6[2]
    response3 = question6[3]
    response4 = question6[4]
 
}else if(num == 7){
     questionOutput.innerHTML = `<h2>${question7[0]}</h2>` ;  
    answer1.innerHTML = `${question7[1]}` ;  
    answer2.innerHTML = `${question7[2]}` ;  
    answer3.innerHTML = `${question7[3]}` ;  
    answer4.innerHTML = `${question7[4]}` ; 
    answerCorrect = question7[3]
    response1 = question7[1]
    response2 = question7[2]
    response3 = question7[3]
    response4 = question7[4]
    
}else if(num == 8){
     questionOutput.innerHTML = `<h2>${question8[0]}</h2>` ;  
    answer1.innerHTML = `${question8[1]}` ;  
    answer2.innerHTML = `${question8[2]}` ;  
    answer3.innerHTML = `${question8[3]}` ;  
    answer4.innerHTML = `${question8[4]}` ; 
    answerCorrect = question8[4]
    response1 = question8[1]
    response2 = question8[2]
    response3 = question8[3]
    response4 = question8[4]
   
}else if(num == 9){
     questionOutput.innerHTML = `<h2>${question9[0]}</h2>` ;  
    answer1.innerHTML = `${question9[1]}` ;  
    answer2.innerHTML = `${question9[2]}` ;  
    answer3.innerHTML = `${question9[3]}` ;  
    answer4.innerHTML = `${question9[4]}` ; 
    answerCorrect = question9[4]
    response1 = question9[1]
    response2 = question9[2]
    response3 = question9[3]
    response4 = question9[4]
    
}
answer1.addEventListener('click' , () => {
    response1
    console.log(response1)
        if(answerCorrect == response1){
        console.log("you are right")
        btn.style.display = 'flex';
        userScore++
        score.innerHTML = `${userScore}`
        
    }else {
        console.log("you are wrong")
    }
})
answer2.addEventListener('click' , () => {
    response2
    console.log(response2)
        if(answerCorrect == response2){
            btn.style.display = 'flex';
            userScore++
        score.innerHTML = `${userScore}`
        console.log("you are right")
    }else {
        console.log("you are wrong")
    }
})


answer3.addEventListener('click' , () => {
    response3
    console.log(response3)
        if(answerCorrect == response3){
        console.log("you are right")
        userScore++
        score.innerHTML = `${userScore}`
        btn.style.display = 'flex';
    }else {
        console.log("you are wrong")
    }
})
answer4.addEventListener('click' , () => {
    response4
    console.log(response4)
    if(answerCorrect == response4){
        userScore++
        score.innerHTML = `${userScore}`
        console.log("you are right")
        btn.style.display = 'flex';
    }else {
        console.log("you are wrong")
        
    }
})
let btn = document.getElementById('btn')
let nextLevel;
btn.addEventListener('click' , () => {
    nextLevel = Math.floor(Math.random() * 10)
   if(nextLevel <= 1){
    questionOutput.innerHTML = `<h2>${question[0]}</h2>` ;  
    answer1.innerHTML = `${question[1]}` ;  
    answer2.innerHTML = `${question[2]}` ;  
    answer3.innerHTML = `${question[3]}` ;  
    answer4.innerHTML = `${question[4]}` ; 
    answerCorrect = question[4]
    response1 = question[1]
    response2 = question[2]
    response3 = question[3]
    response4 = question[4] 
    btn.style.display = 'none';
    
}else if(nextLevel == 2){
     questionOutput.innerHTML = `<h2>${question2[0]}</h2>` ;  
    answer1.innerHTML = `${question2[1]}` ;  
    answer2.innerHTML = `${question2[2]}` ;  
    answer3.innerHTML = `${question2[3]}` ;  
    answer4.innerHTML = `${question2[4]}` ; 
    answerCorrect = question2[2]
    response1 = question2[1]
    response2 = question2[2]
    response3 = question2[3]
    response4 = question2[4]
    btn.style.display = 'none';

   
}else if(nextLevel == 3){
     questionOutput.innerHTML = `<h2>${question3[0]}</h2>` ;  
    answer1.innerHTML = `${question3[1]}` ;  
    answer2.innerHTML = `${question3[2]}` ;  
    answer3.innerHTML = `${question3[3]}` ;  
    answer4.innerHTML = `${question3[4]}` ; 
    answerCorrect = question3[4]
    response1 = question3[1]
    response2 = question3[2]
    response3 = question3[3]
    response4 = question3[4]
    btn.style.display = 'none';

    
}else if(nextLevel == 4){
     questionOutput.innerHTML = `<h2>${question4[0]}</h2>` ;  
    answer1.innerHTML = `${question4[1]}` ;  
    answer2.innerHTML = `${question4[2]}` ;  
    answer3.innerHTML = `${question4[3]}` ;  
    answer4.innerHTML = `${question4[4]}` ; 
    answerCorrect = question4[4]
    response1 = question4[1]
    response2 = question4[2]
    response3 = question4[3]
    response4 = question4[4]
    btn.style.display = 'none';

  
}else if(nextLevel == 5){
     questionOutput.innerHTML = `<h2>${question5[0]}</h2>` ;  
    answer1.innerHTML = `${question5[1]}` ;  
    answer2.innerHTML = `${question5[2]}` ;  
    answer3.innerHTML = `${question5[3]}` ;  
    answer4.innerHTML = `${question5[4]}` ; 
    answerCorrect = question5[1]
    response1 = question5[1]
    response2 = question5[2]
    response3 = question5[3]
    response4 = question5[4]
    btn.style.display = 'none';

    
}else if(nextLevel == 6){
     questionOutput.innerHTML = `<h2>${question6[0]}</h2>` ;  
    answer1.innerHTML = `${question6[1]}` ;  
    answer2.innerHTML = `${question6[2]}` ;  
    answer3.innerHTML = `${question6[3]}` ;  
    answer4.innerHTML = `${question6[4]}` ; 
    answerCorrect = question6[3]
    response1 = question6[1]
    response2 = question6[2]
    response3 = question6[3]
    response4 = question6[4]
    btn.style.display = 'none';


}else if(nextLevel == 7){
     questionOutput.innerHTML = `<h2>${question7[0]}</h2>` ;  
    answer1.innerHTML = `${question7[1]}` ;  
    answer2.innerHTML = `${question7[2]}` ;  
    answer3.innerHTML = `${question7[3]}` ;  
    answer4.innerHTML = `${question7[4]}` ; 
    answerCorrect = question7[3]
    response1 = question7[1]
    response2 = question7[2]
    response3 = question7[3]
    response4 = question7[4]
    btn.style.display = 'none';

    
}else if(nextLevel == 8){
     questionOutput.innerHTML = `<h2>${question8[0]}</h2>` ;  
    answer1.innerHTML = `${question8[1]}` ;  
    answer2.innerHTML = `${question8[2]}` ;  
    answer3.innerHTML = `${question8[3]}` ;  
    answer4.innerHTML = `${question8[4]}` ; 
    answerCorrect = question8[4]
    response1 = question8[1]
    response2 = question8[2]
    response3 = question8[3]
    response4 = question8[4]
    btn.style.display = 'none';

    
}else if(nextLevel == 9){
     questionOutput.innerHTML = `<h2>${question9[0]}</h2>` ;  
    answer1.innerHTML = `${question9[1]}` ;  
    answer2.innerHTML = `${question9[2]}` ;  
    answer3.innerHTML = `${question9[3]}` ;  
    answer4.innerHTML = `${question9[4]}` ; 
    answerCorrect = question9[4]
    response1 = question9[1]
    response2 = question9[2]
    response3 = question9[3]
    response4 = question9[4]
    btn.style.display = 'none';

   
}
})