type ResultProps = {
  score: number;
  total: number;
  onRestart: () => void;
};

export default function Result({ score, total, onRestart }: ResultProps) {
  const percent = Math.round((score / total) * 100);

  return (
    <div className="card center">
      <p className="score"> 점수: {score} / {total} ({percent}%)</p>
      <p>수고하셨어요! 다시 도전해 보실래요?</p>
      <button className="button primary" onClick={onRestart}>다시하기</button>
    </div>
  );
}
