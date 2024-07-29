import { useDispatch } from "react-redux";
import { setData } from "./QuizWindow/QuestionsSlice";

const getCategory = (program) => {
  if (program === "BCAT") {
    return 19;
  }
};

const handleQuery = async (program, level) => {
  const category = getCategory(program);
  const dispatch = useDispatch();

  const apiUrl = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${level.toLowerCase()}&type=multiple`;

  await fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      //   dispatch(setData(response));
    });
};

export { handleQuery };
