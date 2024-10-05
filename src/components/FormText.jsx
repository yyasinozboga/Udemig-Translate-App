import { useSelector } from "react-redux";
import Loader from "./Loader";

const FormText = ({ setText, text }) => {
  const { isLoading, error, result } = useSelector((store) => store.translate);

  return (
    <div className="grid grid-cols-2 gap-28">
      <textarea
        className="resize-none h-[300px] outline-none rounded-md p-2 text-lg"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="h-[300px] p-2 bg-gray-500 text-white text-lg rounded-md">
        {isLoading ? <Loader /> : <p>{result}</p>}
      </div>
    </div>
  );
};

export default FormText;
