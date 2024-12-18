function hamburg() {
    const links = document.querySelector('.nav-container .links');
    const dropdown = document.querySelector('.dropdown');

    if (links.style.display === 'none' || links.style.display === '') {
        links.style.display = 'flex'; // Affiche les liens
        dropdown && (dropdown.style.transform = 'translateY(0)');
    } else {
        links.style.display = 'none'; // Masque les liens
        dropdown && (dropdown.style.transform = 'translateY(-500px)');
    }
}
function envoyermail() {
    alert('Message Send')
}

function submitQuiz() {
    const answers = {
        q1: "11",
        q2: "Tennis",
        q3: "Brazil",
        q4: "300",
        q5: "1896",
        q6: "6",
        q7: "Basketball",
        q8: "18",
        q9: "Barry Bonds",
        q10: "Hat-trick"
    };

    let score = 0;
    let feedback = "";

    for (let i = 1; i <= 10; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer) {
            if (userAnswer.value === answers[`q${i}`]) {
                score++;
            } else {
                feedback += `<p>Question ${i}: Your answer (${userAnswer.value}) - Correct answer: ${answers[`q${i}`]}</p>`;
            }
        } else {
            feedback += `<p>Question ${i}: No answer selected - Correct answer: ${answers[`q${i}`]}</p>`;
        }
    }

    const resultElement = document.getElementById("quizResult");
    resultElement.innerHTML = `
        <h3>You scored ${score} / 10 points</h3>
        <div style="color: #b74b4b; font-size: 1rem;">
            ${feedback}
        </div>
    `;
    document.getElementById("quizForm").reset();
}
