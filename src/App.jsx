import FormSelect from "./components/FormSelect";
import FormText from "./components/FormText";
import { useState } from "react";
import { en } from "./utils/constants";
import { tr } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { translateText } from "./redux/actions";

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState(tr.value);
  const [targetLanguage, setTargetLanguage] = useState(en.value);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { result } = useSelector((store) => store.translate);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(translateText({ sourceLanguage, targetLanguage, text }));
  };

  const changeTargetLanguage = (targetLanguage) => {
    dispatch(translateText({ sourceLanguage, targetLanguage, text }));
  };

  const changeLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setText(result);
    dispatch(translateText({ sourceLanguage, targetLanguage, text }));
  };

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="w-1/2">
        <h1 className="text-4xl text-white font-medium mb-3 text-center">
          Translate +
        </h1>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <FormSelect
            setSourceLanguage={setSourceLanguage}
            setTargetLanguage={setTargetLanguage}
            sourceLanguage={sourceLanguage}
            targetLanguage={targetLanguage}
            changeLanguages={changeLanguages}
            changeTargetLanguage={changeTargetLanguage}
          />
          <FormText setText={setText} text={text} />
          <button className="bg-gray-700 py-2 px-4 text-white rounded-md font-medium">
            Translate
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
