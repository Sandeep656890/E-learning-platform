// Dummy video URLs (use your own or sample URLs)
const videoMap = {
  'video1.mp4': 'https://www.w3schools.com/html/mov_bbb.mp4',
  'video2.mp4': 'https://www.w3schools.com/html/movie.mp4',
  'video3.mp4': 'https://www.w3schools.com/html/mov_bbb.mp4'
};

// Quiz data
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: 1
  },
  {
    question: "Inside which HTML tag do we write JavaScript?",
    options: ["<js>", "<script>", "<javascript>"],
    answer: 1
  }
];

// Load quiz on page load
document.addEventListener("DOMContentLoaded", () => {
  loadQuiz();
  const count = localStorage.getItem('completedLessons') || 0;
  document.getElementById('completed-count').textContent = count;
});

function loadVideo(videoId) {
  const player = document.getElementById('videoPlayer');
  player.src = videoMap[videoId] || videoMap['video1.mp4'];
  player.play();
}

function loadQuiz() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';
  quizData.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'quiz-question';
    div.innerHTML = `<p>${index+1}. ${item.question}</p>` + 
      item.options.map((opt, i) =>
        `<label class="quiz-option">
          <input type="radio" name="q${index}" value="${i}"> ${opt}
        </label>`).join('');
    container.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === item.answer) {
      score++;
    }
  });
  document.getElementById('quiz-result').textContent = `You scored ${score} out of ${quizData.length}`;
}

function markLessonCompleted() {
  let count = parseInt(localStorage.getItem('completedLessons') || 0);
  count++;
  localStorage.setItem('completedLessons', count);
  document.getElementById('completed-count').textContent = count;
}

