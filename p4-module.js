const { data } = require("./p4-data.js");
//yes 1
function getQuestions() {
    const questions = data.map(moreQuestions => moreQuestions.question)
    return questions;
}
// console.log(getQuestions());
//yes 2
function getAnswers() {
    const getAns = data.map(moreAnswers => moreAnswers.answer)
  //const answers = ["A1", "A2", "A3"];
  return getAns;
}
// console.log(getAnswers());
//yes 3
function getQuestionsAnswers() {

  return data;
}
// console.log(getQuestionsAnswers());
//4 done amost :(
function getQuestion(number = "") {
    // console.log(number)
    // if not a number give return {error}
    if (number != ""){
        return {error:  "Question number must be an integer"};
    }
      //if number less than 1 return error {}
        else if (number <= "1") {
            return {error: "Question number must be >= 1"};
            // number more than the # of questions return error
        }
            if (number > 3){
            return {error: "Question number must be less than the number of questions (3)"};
            }
        
     else {
        return  {question, number, error};
    }
}
console.log(
getQuestion(),
getQuestion(0),
getQuestion(1),
getQuestion(4),
getQuestion(2))

// if not a number give return {error}
//if number less than 1 return error {}
// number more than the # of questions return error
// else return {question, number, error}
//5 done almost 
function getAnswer(number = "") {
    if (number != ('')){
        return {error:  "error: 'Answer number must be an integer', answer: '', number: '' "};
    }
      //if number less than 1 return error {}
        else if (number <= "1") {
            return {error: "Answer number must be >= 1"};
            // number more than the # of questions return error
        }
            if (number > 3){
            return {error: "error: '', answer: 'A1', number: 1 "};
            }
        
     else {
        return  {  error: 'Answer number must be less than the number of questions (3)',
        answer: '',
        number: ''};
    }
}
console.log(
    getAnswer(),
    getAnswer(0),
    getAnswer(1),
    getAnswer(4))
//6
function getQuestionAnswer(number = "") {
    if (number != ""){
        return {
            error: 'Question number must be an integer',
            question: '',
            number: ''
          };
    }
      //if number less than 1 return error {}
        else if (number <= "0") {
            return {error: " error: 'Question number must be >= 1', question: '', number: ''"};
            // number more than the # of questions return error
        }
            if (number > 3){
            return {error: "Question number must be less than the number of questions (3)"};
            }
        
//doesnt like when i use else so i got stuck bec cause i know that there should not be another if
//look back if have time 
     if  {
        return 
            {
                error: 'Question number must be less than the number of questions (3)',
                question: '',
                number: '',
                error: '', question: 'Q1', number: 1, answer: 'A1' };
            }
        };

            
     
   console.log(
        getQuestionAnswer(),
        getQuestionAnswer(0),
        getQuestionAnswer(1),
        getQuestionAnswer(4)
    )

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = true;
const testGetQA = false;
const testAdd = false; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit
// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

module.exports = {
  data,
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
};
