import { useState } from "react";

const useTaskForm = (title, description) => {
  const [isTitleValid, setTitleValid] = useState(true);
  const [isDescriptionValid, setDescriptionValid] = useState(true);

  const validateForm = () => {
    setTitleValid(title.trim() !== "");
    setDescriptionValid(description.trim() !== "");
  };

  const isFormValid = () => isTitleValid && isDescriptionValid;

  return {
    isFormValid,
    validateForm,
  };
};

export default useTaskForm;
