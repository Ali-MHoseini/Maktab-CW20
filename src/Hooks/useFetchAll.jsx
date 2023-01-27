import { useState, useEffect } from "react";

const useFetchAll = (url, ddd) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data)=> ddd(data));
  }, [url]);

  return [data];
};

export default useFetchAll;