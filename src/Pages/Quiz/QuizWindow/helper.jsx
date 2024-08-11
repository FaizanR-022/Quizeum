import { clearData, setData } from "./Store/QuestionsSlice";

const bcat = [
  {
    name: "Maths",
    id: 19,
  },
  {
    name: "GK",
    id: 9,
  },
  {
    name: "History",
    id: 23,
  },
];

const ecat = [
  {
    name: "Maths",
    id: 19,
  },
  {
    name: "Computer",
    id: 18,
  },
  {
    name: "Science",
    id: 17,
  },
  {
    name: "GK",
    id: 9,
  },
];

const mdcat = [
  {
    name: "Animals",
    id: 27,
  },
  {
    name: "Science",
    id: 17,
  },
  {
    name: "GK",
    id: 9,
  },
];

const sat = [
  {
    name: "Maths",
    id: 19,
  },
  {
    name: "GK",
    id: 9,
  },
];

// Numbers a/c to category of API
const getCategory = (program) => {
  switch (program) {
    case "BCAT":
      return bcat;
    case "ECAT":
      return ecat;
    case "MDCAT":
      return mdcat;
    case "SAT":
      return sat;

    default:
      break;
  }
};

const handleQuery = async (dispatch, program, level, setLoading) => {
  if (!program) {
    return;
  }
  const category = getCategory(program);
  dispatch(clearData());

  for (let i = 0; i < category.length; i++) {
    const subject = category[i];
    const apiUrl = `https://opentdb.com/api.php?amount=5&category=${
      subject.id
    }&difficulty=${level.toLowerCase()}&type=multiple`;

    await fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        dispatch(
          setData({
            name: subject.name,
            results: response.results,
          })
        );
      });

    // Add a delay of 1 second (1000 milliseconds) before the next iteration
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setLoading(false);
  }

  // let callCount = 0;
  // let endInterval = () => {
  //   clearInterval();
  //   setLoading(false);
  // };
  // setInterval(async () => {
  //   const apiUrl = `https://opentdb.com/api.php?amount=5&category=${
  //     category[callCount].id
  //   }&difficulty=${level.toLowerCase()}&type=multiple`;

  //   await fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       dispatch(
  //         setData({
  //           name: category[callCount].name,
  //           results: response.results,
  //         })
  //       );
  //     });
  //   callCount++;
  //   callCount === category.length - 1 ? endInterval() : null;
  // }, 1000);

  // (async (subject) => {
  //   const apiUrl = `https://opentdb.com/api.php?amount=5&category=${
  //     subject.id
  //   }&difficulty=${level.toLowerCase()}&type=multiple`;

  //   await fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       dispatch(
  //         setData({
  //           name: subject.name,
  //           results: response.results,
  //         })
  //       );
  //     });
  // });
  // category.map(async (subject) => {
  //   const apiUrl = `https://opentdb.com/api.php?amount=5&category=${
  //     subject.id
  //   }&difficulty=${level.toLowerCase()}&type=multiple`;

  //   await fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       dispatch(
  //         setData({
  //           name: subject.name,
  //           results: response.results,
  //         })
  //       );
  //     });
  // });
};

function capitalizeFirstLetter(string) {
  if (!string) {
    return;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { handleQuery, capitalizeFirstLetter, getCategory };
