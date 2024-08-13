import { clearData, setData } from "./Store/QuestionsSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

const GenAI = new GoogleGenerativeAI("");

let model = GenAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: { responseMimeType: "application/json" },
});

let prompt = `"Generate an array of objects in JSON format. Each object should contain the following:
- name: A string containing the name of the subject
- content: An array of multiple choices question objects.
Each question object should contain:
- question: A string containing the question.
- options: An array of strings containing 4 options including the correct option.
- correct_option: A string containing the correct answer. 

count: 5 questions per subject
Subjects: Maths, English, IQ
Difficulty: Medium`;

const handleApiCall = async () => {
  let result = await model.generateContent(prompt);
  // console.log(data.response.text());
  let data = JSON.parse(result.response.text());
  console.log(data);
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
};

function createMarkup(html) {
  return {
    __html: html,
  };
}
function capitalizeFirstLetter(string) {
  if (!string) {
    return;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export {
  handleQuery,
  capitalizeFirstLetter,
  getCategory,
  createMarkup,
  handleApiCall,
};
