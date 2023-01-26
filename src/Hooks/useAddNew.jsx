import { useState, useEffect } from "react";

const useAddNew = (url, newItem) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newItem),
    }))
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url, newItem]);

  return [data];
};

export default useAddNew;