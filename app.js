const correctAnswers = ['A', 'B', 'B', 'B', 'A', 'B', 'A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.question1.value, form.question2.value, form.question3.value, form.question4.value, form.question5.value, form.question6.value, form.question7.value, form.question8.value, form.question9.value, form.question10.value];

    //checking answers cycle through forEach method
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    //show result on page
    scrollTo(0, 0);
    result.classList.remove('d-none');

    //score animation
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});



