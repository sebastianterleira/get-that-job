import { useEffect, useState } from "react";

export function useLocalStorage(initialValue = {}, localStorageKey) {
  function setInitialDate() {
    const fomLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));

    return fomLocalStorage || initialValue;
  }

  const [value, setValue] = useState(setInitialDate());

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
}
