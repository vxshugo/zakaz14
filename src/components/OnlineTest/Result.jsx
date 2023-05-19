import React from "react";

const Result = ({ score }) => {
  return (
    <div>
      <h2>Тест аяқталды</h2>
      <p>Сіздін бағаныз: {score}</p>
    </div>
  );
};

export default Result;