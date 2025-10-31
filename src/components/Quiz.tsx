import { useState } from 'react';
import type { Question } from '../data/questions';

type QuizProps = {
  questions: Question[];
  onFinish: (finalScore: number) => void;
};


export default function Quiz({ questions, onFinish }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const current = questions[currentIndex];

  const handleSelect = (selectedIndex: number) => {
    if (selectedIndex === current.answerIndex) {
      setScore((s) => s + 1);
    }
    const isLast = currentIndex === questions.length - 1;
    if (isLast) {
      onFinish(selectedIndex === current.answerIndex ? score + 1 : score);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  return (
    <div className="card">
      <div className="footer">
        <span className="badge">{currentIndex + 1} / {questions.length}</span>
        <span>현재 점수: <strong>{score}</strong></span>
      </div>
      <h2 className="question">{current.text}</h2>
      <div className="options">
        {current.options.map((opt, idx) => (
          <button key={idx} className="button" onClick={() => handleSelect(idx)}>
            {opt}
          </button>
        ))}
  </div>
    </div>
  );
}
