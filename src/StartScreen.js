function StartScreen({ numQues }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQues} questions to test your React mastery</h3>
      <button>Let's start</button>
    </div>
  );
}

export default StartScreen;
