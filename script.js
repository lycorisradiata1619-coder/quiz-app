const questions = [
  {
    text: '世界で最も面積が大きい国はどこですか？',
    options: ['カナダ', 'アメリカ合衆国', 'ロシア', '中国'],
    correct: 2,
  },
  {
    text: '元素記号「Fe」が表す元素は何ですか？',
    options: ['金（きん）', '銅（どう）', '銀（ぎん）', '鉄（てつ）'],
    correct: 3,
  },
  {
    text: '次のうち、シェイクスピアが書いた作品はどれですか？',
    options: ['神曲', 'ハムレット', 'レ・ミゼラブル', '罪と罰'],
    correct: 1,
  },
  {
    text: '太陽系で最も大きな惑星はどれですか？',
    options: ['土星', '海王星', '天王星', '木星'],
    correct: 3,
  },
  {
    text: '光が真空中を1秒間に進む距離は約何kmですか？',
    options: ['約3万km', '約30万km', '約300万km', '約3,000km'],
    correct: 1,
  },
];

const LABELS = ['A', 'B', 'C', 'D'];

const SCORE_MESSAGES = [
  { min: 5, icon: '🏆', text: '完璧です！満点達成おめでとうございます！' },
  { min: 4, icon: '🌟', text: 'すばらしい！あと一歩で満点でした！' },
  { min: 3, icon: '👍', text: 'なかなか良い結果です！' },
  { min: 1, icon: '📚', text: 'もう少し！次はきっと上手くいきます。' },
  { min: 0, icon: '💪', text: 'これからです！一緒に知識を増やしていきましょう。' },
];

let current = 0;
let score = 0;

const quizScreen    = document.getElementById('quiz-screen');
const resultScreen  = document.getElementById('result-screen');
const questionText  = document.getElementById('question-text');
const optionsList   = document.getElementById('options-list');
const feedbackEl    = document.getElementById('feedback');
const btnNext       = document.getElementById('btn-next');
const progressFill  = document.getElementById('progress-fill');
const currentQEl    = document.getElementById('current-q');
const totalQEl      = document.getElementById('total-q');
const scoreDisplay  = document.getElementById('score-display');
const scoreMessage  = document.getElementById('score-message');
const resultIcon    = document.getElementById('result-icon');

totalQEl.textContent = questions.length;

btnNext.addEventListener('click', () => {
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
});

document.getElementById('btn-restart').addEventListener('click', () => {
  current = 0;
  score = 0;
  resultScreen.style.display = 'none';
  quizScreen.style.display = 'block';
  renderQuestion();
});

function renderQuestion() {
  const q = questions[current];

  currentQEl.textContent = current + 1;
  progressFill.style.width = `${(current / questions.length) * 100}%`;

  questionText.textContent = q.text;
  feedbackEl.className = 'feedback';
  feedbackEl.textContent = '';
  btnNext.style.display = 'none';

  optionsList.innerHTML = '';
  q.options.forEach((optText, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-label">${LABELS[i]}</span>${optText}`;
    btn.addEventListener('click', () => handleAnswer(i));
    li.appendChild(btn);
    optionsList.appendChild(li);
  });
}

function handleAnswer(selected) {
  const q = questions[current];
  const buttons = optionsList.querySelectorAll('.option-btn');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add('correct');
    } else if (i === selected) {
      btn.classList.add('incorrect');
    }
  });

  if (selected === q.correct) {
    score++;
    feedbackEl.className = 'feedback correct';
    feedbackEl.textContent = '✓ 正解！';
  } else {
    feedbackEl.className = 'feedback incorrect';
    feedbackEl.textContent = `惜しい！正解は「${q.options[q.correct]}」でした。`;
  }

  btnNext.style.display = 'block';
  btnNext.textContent = current === questions.length - 1 ? '結果を見る' : '次の問題へ →';
}

function showResult() {
  quizScreen.style.display = 'none';
  resultScreen.style.display = 'block';
  progressFill.style.width = '100%';

  scoreDisplay.textContent = `${score} / ${questions.length}`;

  const entry = SCORE_MESSAGES.find(m => score >= m.min);
  resultIcon.textContent = entry.icon;
  scoreMessage.textContent = entry.text;
}

renderQuestion();
