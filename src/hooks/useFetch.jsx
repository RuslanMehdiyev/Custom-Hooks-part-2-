import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [responseJson, setResponseJson] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => setResponseJson(data));
        } else {
          throw new Error(`Error with status: ${res.status}`);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
    return () => {
      setResponseJson(null);
      setError(null);
    };
  }, [url]);
  return [responseJson, isLoading, error];
};
export default useFetch;
