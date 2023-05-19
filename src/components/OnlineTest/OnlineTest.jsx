import React, { Component } from "react";
import { quizData } from "./test1";
import Question from "./Question";
import Result from "./Result";
class OnlineTest extends Component {
  state = {
    currentQuestionIndex: 0,
    score: 0,
    quizEnd: false,
  };

  handleAnswer = (selectedOption) => {
    const { currentQuestionIndex, score } = this.state;
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      this.setState({ score: score + 1 });
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      this.setState({ currentQuestionIndex: nextQuestionIndex });
    } else {
      this.setState({ quizEnd: true });
    }
  };

  render() {
    const { currentQuestionIndex, score, quizEnd } = this.state;
    const currentQuestion = quizData[currentQuestionIndex];

    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
        {quizEnd ? (
          <Result score={score} />
        ) : (
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            handleAnswer={this.handleAnswer}
          />
        )}
      </div>
    );
  }
}

export default OnlineTest;