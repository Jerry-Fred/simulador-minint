(function () {
  "use strict";

  const LETTERS = ["A", "B", "C", "D", "E", "F"];

  const state = {
    order: [],
    current: 0,
    answers: [], // { chosenIndex, correct }
    locked: false
  };

  const els = {
    cover: document.getElementById("screen-cover"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result"),
    btnStart: document.getElementById("btnStart"),
    btnNext: document.getElementById("btnNext"),
    btnQuit: document.getElementById("btnQuit"),
    btnRestart: document.getElementById("btnRestart"),
    metaCount: document.getElementById("metaCount"),
    quizTab: document.getElementById("quizTab"),
    progressFill: document.getElementById("progressFill"),
    qCategory: document.getElementById("qCategory"),
    qText: document.getElementById("qText"),
    options: document.getElementById("options"),
    explanation: document.getElementById("explanation"),
    verdict: document.getElementById("verdict"),
    explanationText: document.getElementById("explanationText"),
    resultTitle: document.getElementById("resultTitle"),
    resultSummary: document.getElementById("resultSummary"),
    review: document.getElementById("review"),
    stamp: document.getElementById("stamp"),
    stampWord: document.getElementById("stampWord"),
    stampScore: document.getElementById("stampScore"),
    processNum: document.getElementById("processNum")
  };

  function showScreen(id) {
    document.querySelectorAll("[data-screen]").forEach((s) => {
      s.hidden = s.id !== id;
    });
  }

  function shuffledIndices(n) {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function randomProcessNumber() {
    const n = Math.floor(100 + Math.random() * 899);
    return `PROC. Nº ${n}/2026`;
  }

  function init() {
    els.metaCount.textContent = String(QUESTION_BANK.length);
    els.processNum.textContent = randomProcessNumber();
    els.btnStart.addEventListener("click", startQuiz);
    els.btnNext.addEventListener("click", nextQuestion);
    els.btnQuit.addEventListener("click", finishQuiz);
    els.btnRestart.addEventListener("click", startQuiz);
    showScreen("screen-cover");
  }

  function startQuiz() {
    state.order = shuffledIndices(QUESTION_BANK.length);
    state.current = 0;
    state.answers = [];
    state.locked = false;
    showScreen("screen-quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const total = state.order.length;
    const qIndex = state.order[state.current];
    const q = QUESTION_BANK[qIndex];

    state.locked = false;
    els.explanation.hidden = true;
    els.btnNext.hidden = true;

    els.quizTab.textContent = `Questão ${String(state.current + 1).padStart(2, "0")}/${total}`;
    els.progressFill.style.width = `${Math.round((state.current / total) * 100)}%`;

    els.qCategory.textContent = q.category;
    els.qText.textContent = q.question;

    els.options.innerHTML = "";
    q.options.forEach((optionText, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", "false");
      btn.innerHTML = `<span class="option__letter">${LETTERS[i]}</span><span>${optionText}</span>`;
      btn.addEventListener("click", () => selectAnswer(i, qIndex));
      els.options.appendChild(btn);
    });
  }

  function selectAnswer(chosenIndex, qIndex) {
    if (state.locked) return;
    state.locked = true;

    const q = QUESTION_BANK[qIndex];
    const isCorrect = chosenIndex === q.answerIndex;
    state.answers.push({ qIndex, chosenIndex, correct: isCorrect });

    const optionButtons = Array.from(els.options.children);
    optionButtons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answerIndex) {
        btn.classList.add("is-correct");
        btn.setAttribute("aria-checked", i === chosenIndex ? "true" : "false");
      } else if (i === chosenIndex) {
        btn.classList.add("is-wrong");
        btn.setAttribute("aria-checked", "true");
      } else {
        btn.classList.add("is-muted");
      }
    });

    els.verdict.textContent = isCorrect ? "Correto." : "Incorreto.";
    els.verdict.className = "explanation__verdict " + (isCorrect ? "ok" : "err");
    els.explanationText.textContent = q.explanation;
    els.explanation.hidden = false;

    const isLast = state.current === state.order.length - 1;
    els.btnNext.textContent = isLast ? "Ver resultado" : "Seguinte";
    els.btnNext.hidden = false;
    els.btnNext.focus();
  }

  function nextQuestion() {
    const isLast = state.current === state.order.length - 1;
    if (isLast) {
      finishQuiz();
      return;
    }
    state.current += 1;
    renderQuestion();
  }

  function finishQuiz() {
    const total = QUESTION_BANK.length;
    const answered = state.answers.length;
    const correct = state.answers.filter((a) => a.correct).length;
    const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    els.progressFill.style.width = "100%";

    let stampWord = "REPROVADO";
    let stampColor = "var(--stamp-red)";
    if (pct >= 70) { stampWord = "APTO"; stampColor = "var(--ok)"; }
    else if (pct >= 50) { stampWord = "LIMIAR"; stampColor = "var(--gold)"; }
    els.stampWord.textContent = stampWord;
    els.stampScore.textContent = `${correct}/${answered}`;
    els.stamp.style.setProperty("--stamp-color", stampColor);
    els.stamp.style.animation = "none";
    void els.stamp.offsetWidth; // reinicia a animação a cada resultado
    els.stamp.style.animation = "";

    els.resultTitle.textContent = "Resultado do simulado";
    els.resultSummary.textContent = answered < total
      ? `Respondeste a ${answered} de ${total} perguntas · ${correct} corretas (${pct}%).`
      : `Acertaste ${correct} de ${total} perguntas — ${pct}% de aproveitamento.`;

    els.review.innerHTML = "";
    state.answers.forEach((a, i) => {
      const q = QUESTION_BANK[a.qIndex];
      const li = document.createElement("li");
      li.className = "review__item " + (a.correct ? "is-ok" : "is-err");
      const chosenText = q.options[a.chosenIndex];
      const correctText = q.options[q.answerIndex];
      li.innerHTML = `
        <p class="review__q">${i + 1}. ${q.question}</p>
        <p class="review__answer">A tua resposta: <b>${chosenText}</b></p>
        ${a.correct ? "" : `<p class="review__answer">Resposta correta: <b>${correctText}</b></p>`}
      `;
      els.review.appendChild(li);
    });

    showScreen("screen-result");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
