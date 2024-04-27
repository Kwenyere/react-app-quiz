function FinishedScreen({ points, totalPoints, highscore }) {
  const percentageScore = (points / totalPoints) * 100;
  let emoji;
  if (percentageScore === 100) emoji = "🥇";
  if (percentageScore >= 80 && percentageScore < 100) emoji = "🎉";
  if (percentageScore >= 50 && percentageScore < 80) emoji = "😊";
  if (percentageScore >= 30 && percentageScore < 50) emoji = "😢";
  if (percentageScore >= 0 && percentageScore < 30) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span> {emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({Math.ceil(percentageScore)}%)
      </p>
      <p className="highscore">HighScore: {highscore}</p>
    </>
  );
}

export default FinishedScreen;
