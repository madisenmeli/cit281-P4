const myFunctions = require("fastify")();
const { error } = require("console");
const {
  data,
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-module");
// Handle GET verb for / route using Fastify // 2. Note use of "chain" dot notation syntax fastify.get("/", (request, reply) => {
//1 done (i think)
fastify.get("/cit/questions", (request, reply) => {
  const questions = getQuestions();
  const response = {
    error: "",
    statusCode: 200,
    questions: questions,
  };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringfry(response));
});
//2 done
fastify.get("/cit/answers", (request, reply) => {
  const getAns = getAnswers();
  const response = {
    error: "",
    statusCode: 200,
    answers: getAns,
  };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringfry(response));
});
//3 done
fastify.get("/cit/qanda", (request, reply) => {
  const data = getQuestionsAnswers();
  const response = {
    error: "",
    statusCode: 200,
    qanda: data,
  };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringfry(response));
});
//parse Int returns an integer in string form
//questfornum? 
//4
fastify.get("/cit/question/:number", (request, reply) => {
  const { number } = request.params;
  let nummm = parseInt(number);
  let ques = getQuestion(nummm);
  console.log(ques);
  let questForNummm = {
    error: error,
    statusCode: 200,
    question: ques.question,
    number: nummm,
  };
});
reply
  .code(200)
  .header("Content-Type", "application/json; charset=utf-8")
  .send(JSON.stringfry(response));

//5
fastify.get("/cit/answer/:number", (request, reply) => {
  const { number } = request.params;
  let nummm = parseInt(number);
  let ques = getAnswer(nummm);
  console.log(ques);
  let questForNummm = {
    error: error,
    statusCode: 200,
    question: ques.question,
    number: nummm,
  };
});
reply
  .code(200)
  .header("Content-Type", "application/json; charset=utf-8")
  .send(JSON.stringfry(response));

//6
fastify.get("/cit/questionandAnswer/:number", (request, reply) => {
  const { number } = request.params;
  let nummm = parseInt(number);
  let ques = getQuestionAnswer(nummm);
  console.log(ques);
  let newAns = {
    error: error,
    statusCode: 200,
    question: ques.question,
    number: nummm,
  };
});
reply
  .code(200)
  .header("Content-Type", "application/json; charset=utf-8")
  .send(JSON.stringfry(response));

// 2. Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
