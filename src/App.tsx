import { useState } from 'react';
import { questions } from './data/questions';
import Quiz from './components/Quiz';
import Result from './components/Result';

export default function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleFinish = (finalScore: number) => {
    setScore(finalScore);
    setIsFinished(true);
  };

  const handleRestart = () => {
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="app">
      <h1 className="title">간단 퀴즈</h1>
      {!isFinished ? (
        <Quiz questions={questions} onFinish={handleFinish} />
      ) : (
        <Result score={score} total={questions.length} onRestart={handleRestart} />
      )}
    </div>
  );
}
