import nlp from 'compromise';

import smsMap from 'constants/sms';

const smsRespond = function(message) {
  let defaultReply = [
    "Sorry, I don't understand",
    "What?",
    "Are u trying to say something?"
  ];
  let reply = {
    dylan: defaultReply[Math.floor(Math.random() * defaultReply.length)]
  }

  let match = false;
  for (var QA of smsMap) {
    for (var question of QA.questions) {
      if (nlp(message).match(question).length) {
        let index = Math.floor(Math.random() * QA.answer.length)
        reply.dylan = QA.answer[index];
        match = true;
        break;
      }
    }
    if (match) {
      break;
    }
  }
  return reply;
}

export default smsRespond;

//age
// what is your age?
// how old are you?
// 

//location
// where do you live?
// where are you at?
// where are you living?

// work
// where do you work?
// what is your company?
// what is your job?
// where your job
// where your company
// 
