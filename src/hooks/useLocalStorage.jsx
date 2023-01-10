import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    if (window.localStorage.getItem(key))
      return JSON.parse(window.localStorage.getItem(key));
    return initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }, [data]);
  return [data, setData];
}
