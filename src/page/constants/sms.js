const what = '(what|whats|wht|wats|wat)';
const your = '(your|ur)';
const are = '(are|r)';
const you = '(you|u)';
const hello = '(hello|hi|hey|yo|hiya|heya)';
const how = '(how|hows)';
const where = '(where|wher|whre|whered|wheres|were)';
const study = '(study|studying|studyin)';
const school = '(school|skool)';
const live = '(living|live|located|livin|at)';
const work = '(werk|work|wrk|working|wrking|werking)';

const greetQA = {
  questions: [hello],
  answer: ["Hi!", "Hey", "Hello"]
};

const howAreYouQA = {
  questions: [
    `${how} is? it going?`,
    `${how} ${are} ${you}`
  ],
  answer: ["I'm chillin", "Nothing much" , "Nothing"]
};

const ageQA = {
  questions: [
    `${what}? is? ${your}? age`,
    `how old ${are}? ${you}?`
  ],
  answer: ["I'm 19 years old", "I'm 19"]
}

const educationQA = {
  questions: [
    `${where} ${are}? ${you} ${study}`,
    `${where} * ${school}`
  ],
  answer: ["I'm studying computer enginnering at the university of waterloo"]
}

const homeQA = {
  questions: [
    `${where} . ${you} ${live}`
  ],
  answer: ["I live in waterloo, ontario, canada."]
}

const jobQA = {
  questions: [
    `${where} . ${you}? ${work}`,
    `${what}? is? ${your} job`
  ],
  answer: ["I work at trifacta as a software developer."]
}

const nameQA = {
  questions: [
    `${what}? is? ${your} name`,
    `who ${are}? ${you}`
  ],
  answer: ["I'm Dylan Park.", "My name is Dylan Park."]
}

const smsMap = [
  greetQA,
  howAreYouQA,
  ageQA,
  educationQA,
  homeQA,
  jobQA,
  nameQA
];

export default smsMap;

