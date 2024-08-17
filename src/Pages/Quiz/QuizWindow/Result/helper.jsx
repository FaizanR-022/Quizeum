export const generateResult = (data) => {
  const result = [];
  for (const subject of data) {
    let correct = 0;
    let wrong = 0;
    let skip = 0;

    subject.content.map((question) => {
      if (!question.selectAnswer) {
        skip += 1;
      } else if (question.selectAnswer === question.correct_option) {
        correct += 1;
      } else {
        wrong += 1;
      }
    });

    result.push({
      name: subject.name,
      correct: correct,
      wrong: wrong,
      skip: skip,
      points: correct * 3 - wrong,
    });
  }

  return result;
};
