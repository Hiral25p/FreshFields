// get all radio buttons
const radios = document.querySelectorAll('input[type="radio"]');

// initialize answer object to store selected answers
const answers = {};

// add event listener to each radio button
radios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    // get the name of the question (e.g. "q1", "q2", etc.)
    const question = event.target.name;
    
    // get the value of the selected answer
    const answer = event.target.value;
    
    // update the answer object
    answers[question] = answer;
  });
});

// add event listener to the form submit button
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  // check if all questions have been answered
  const allAnswered = Object.keys(answers).length === 10;
  
  if (allAnswered) {
    // do something with the answers (e.g. send to server)
  } else {
    alert('Please answer all questions!');
  }
});
