
let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;


function showQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');

    const quizzes = document.querySelectorAll('.quiz-questions');
    quizzes.forEach(quiz => {
        if (quiz.id === topic) {
            quiz.style.display = 'block';
        } else {
            quiz.style.display = 'none';
        }
    });
    showTotalPoints();
}

const correctAnswers = {
    "general-knowledge": { q1: "C", q2: "A" },
    "science": { "science-q1": "C", "science-q2": "B" },
    "computer-science": { "cs-q1": "C", "cs-q2": "C" }
};


function checkAnswers(quizId) {
    const quizAnswers = correctAnswers[quizId];
    if (!quizAnswers) {
        alert('No correct answers defined for this quiz!');
        return;
    }

    let score = 0;


    for (const question in quizAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === quizAnswers[question]) {
            score++;
            totalPoints += 10;
        }
    }


    localStorage.setItem('totalPoints', totalPoints);


    alert(`You scored ${score}/${Object.keys(quizAnswers).length}`);
    showTotalPoints();
}


function showTotalPoints() {
    const pointsDisplay = document.getElementById('points');
    if (pointsDisplay) {
        pointsDisplay.innerHTML = `Your Total Points: ${totalPoints}`;
    }
}


document.addEventListener('DOMContentLoaded', showQuiz);


function checkIfCanRedeem(prizeId) {

    const prizePoints = parseInt(document.getElementById(prizeId).textContent);


    if (totalPoints >= prizePoints) {
        alert(`Congratulations! You redeemed the prize.`);

        totalPoints -= prizePoints;
        localStorage.setItem('totalPoints', totalPoints);
        showTotalPoints();
    } else {
        alert(`Sorry, you don't have enough points to redeem this prize. You need ${prizePoints - totalPoints} more points.`);
    }
}


document.getElementById('redeem-prize1').addEventListener('click', () => checkIfCanRedeem('prize1'));
document.getElementById('redeem-prize2').addEventListener('click', () => checkIfCanRedeem('prize2'));
document.getElementById('redeem-prize3').addEventListener('click', () => checkIfCanRedeem('prize3'));
document.getElementById('redeem-prize4').addEventListener('click', () => checkIfCanRedeem('prize4'));
document.getElementById('redeem-prize5').addEventListener('click', () => checkIfCanRedeem('prize5'));
document.getElementById('redeem-prize6').addEventListener('click', () => checkIfCanRedeem('prize6'));
document.getElementById('redeem-prize7').addEventListener('click', () => checkIfCanRedeem('prize7'));
document.getElementById('redeem-prize8').addEventListener('click', () => checkIfCanRedeem('prize8'));
document.getElementById('redeem-prize9').addEventListener('click', () => checkIfCanRedeem('prize9'));
document.getElementById('redeem-prize10').addEventListener('click', () => checkIfCanRedeem('prize210'));


function checkAnswerAndAddPoints() {

    const userAnswer = document.getElementById('qOfDay').value;


    if (userAnswer.toUpperCase() === 'B') {
        alert("Correct answer! You've earned 100 points.");


        totalPoints += 100;


        localStorage.setItem('totalPoints', totalPoints);
        showTotalPoints();
    } else {
        totalPoints -= 50;
        alert("Sorry, that's incorrect. You've lost 50 points.");
    }
}


function showTotalPoints() {
    const pointsDisplay = document.getElementById('points');
    if (pointsDisplay) {
        pointsDisplay.innerHTML = `Your Total Points: ${totalPoints}`;
    }
}


document.getElementById("submit-answer").addEventListener('click', checkAnswerAndAddPoints);
