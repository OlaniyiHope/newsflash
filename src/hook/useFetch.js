import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [error, setError] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://newsflashapi.herokuapp.com/api${url}`
        );
        setData(res.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);
  return { data, error };
};

export default useFetch;
