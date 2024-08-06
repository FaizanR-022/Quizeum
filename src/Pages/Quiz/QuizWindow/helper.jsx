import { setData } from "./Store/QuestionsSlice";

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

const handleQuery = (dispatch, program, level) => {
  if (!program) {
    return;
  }
  const category = getCategory(program);
  category.map(async (subject) => {
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
  });
};

function capitalizeFirstLetter(string) {
  if (!string) {
    return;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { handleQuery, capitalizeFirstLetter };
