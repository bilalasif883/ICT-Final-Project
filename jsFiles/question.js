// Initialize total points from localStorage or set to 0 if not found
let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;

// Function to display the quiz based on the topic
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

    // Display current total points
    showTotalPoints();
}

const correctAnswers = {
    "general-knowledge": { q1: "C", q2: "A" },
    "science": { "science-q1": "C", "science-q2": "B" },
    "computer-science": { "cs-q1": "C", "cs-q2": "C" }
};

// Function to check answers and update points
function checkAnswers(quizId) {
    const quizAnswers = correctAnswers[quizId]; // Get correct answers for the selected quiz
    if (!quizAnswers) {
        alert('No correct answers defined for this quiz!');
        return;
    }

    let score = 0; // Initialize the score

    // Loop through each question and check the selected answer
    for (const question in quizAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === quizAnswers[question]) {
            score++; // Increment score for correct answers
            totalPoints += 10; // Add 10 points per correct answer
        }
    }

    // Save updated total points to localStorage
    localStorage.setItem('totalPoints', totalPoints);

    // Provide feedback and update total points
    alert(`You scored ${score}/${Object.keys(quizAnswers).length}`);
    showTotalPoints();
}

// Function to display total points
function showTotalPoints() {
    const pointsDisplay = document.getElementById('points');
    if (pointsDisplay) {
        pointsDisplay.innerHTML = `Your Total Points: ${totalPoints}`;
    }
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', showQuiz);

// Function to check if the user has enough points to redeem a prize
function checkIfCanRedeem(prizeId) {
    // Get the required points for the selected prize
    const prizePoints = parseInt(document.getElementById(prizeId).textContent);
    
    // Compare user's points with the prize points
    if (totalPoints >= prizePoints) {
        alert(`Congratulations! You can redeem this prize.`);
        // Proceed with redeeming the prize (or any additional actions)
        totalPoints -= prizePoints; // Deduct the points from the total
        localStorage.setItem('totalPoints', totalPoints); // Save updated points to localStorage
        showTotalPoints(); // Update the displayed points
    } else {
        alert(`Sorry, you don't have enough points to redeem this prize. You need ${prizePoints - totalPoints} more points.`);
    }
}

// Example function to handle redeeming Prize 1
document.getElementById('redeem-prize1').addEventListener('click', () => checkIfCanRedeem('prize1'));
document.getElementById('redeem-prize2').addEventListener('click', () => checkIfCanRedeem('prize2'));
// Repeat for other prizes as needed

// Function to check the user's input and add points if the answer is correct
function checkAnswerAndAddPoints() {
    // Get the value of the input field with the ID "points"
    const userAnswer = document.getElementById('qOfDay').value;

    // Check if the answer is correct
    if (userAnswer.toUpperCase() === 'B') {
        alert("Correct answer! You've earned 100 points.");
        
        // Add 100 points to the total
        totalPoints += 100;
        
        // Save the updated total points to localStorage
        localStorage.setItem('totalPoints', totalPoints);
        showTotalPoints();
    } else {
        totalPoints -= 50;
        alert("Sorry, that's incorrect. You've lost 50 points.");
    }
}

// Function to display total points (could be used for updating the displayed points on the page)
function showTotalPoints() {
    const pointsDisplay = document.getElementById('points');
    if (pointsDisplay) {
        pointsDisplay.innerHTML = `Your Total Points: ${totalPoints}`;
    }
}

// Example: Call the checkAnswerAndAddPoints function when a button is clicked
document.getElementById("submit-answer").addEventListener('click', checkAnswerAndAddPoints);
