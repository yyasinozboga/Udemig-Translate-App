import Select from "react-select";
import { en } from "../utils/constants";
import { tr } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages } from "../redux/actions";

const FormSelect = ({
  setSourceLanguage,
  setTargetLanguage,
  sourceLanguage,
  targetLanguage,
  changeTargetLanguage,
  changeLanguages,
}) => {
  const dispatch = useDispatch();
  const { isLoading, error, languages } = useSelector(
    (store) => store.languages,
  );
  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  const newLanguages = languages.map((language) => ({
    label: language.name,
    value: language.code,
  }));

  const handleChangeTargetLanguage = (e) => {
    setTargetLanguage(e.value);
    changeTargetLanguage(e.value);
  };

  const findSelectedOption = (value) => {
    return newLanguages.find((lang) => lang.value === value) || null;
  };

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-2">
      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={true}
        isLoading={isLoading}
        isClearable={true}
        isSearchable={true}
        name="translate"
        options={newLanguages}
        onChange={(e) => setSourceLanguage(e.value)}
        value={findSelectedOption(sourceLanguage)}
      />
      <button
        className="text-white font-medium bg-gray-700 py-2 px-4 rounded-md"
        onClick={changeLanguages}
      >
        Change
      </button>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isSearchable={true}
        name="translate"
        options={newLanguages}
        onChange={handleChangeTargetLanguage}
        value={findSelectedOption(targetLanguage)}
      />
    </div>
  );
};

export default FormSelect;
