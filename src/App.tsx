import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [updatedValue, setUpdatedValue] = useState(value);
  const [isShowButtonClicked, setIsShowButtonClicked] = useState(false);
  const previousDisplayedValue = useRef('');

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const submitInputValue = () => {
    setUpdatedValue(value);
    setIsShowButtonClicked(false);
  };

  const showInputValue = () => {
    setIsShowButtonClicked(true);
  };

  useEffect(() => {
    previousDisplayedValue.current = updatedValue;
  }, [updatedValue])

  return (
    <div className="__mainField">
      <div className="__inputField">
        <input
          type="text"
          placeholder=" ...."
          className="__inputBox"
          onChange={handleInputValue}
          value={value}
        />
        <button className="__submitButton" onClick={submitInputValue}>
          Submit
        </button>
      </div>
      <div className="__displayField">
        <button className="__showButton" onClick={showInputValue}>
          Show
        </button>
        <h1 className="__display__">
          {isShowButtonClicked ? updatedValue : previousDisplayedValue.current}
        </h1>
      </div>
    </div>
  );
}

export default App;
