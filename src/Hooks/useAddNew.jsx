import { useState, useEffect } from "react";

const useAddNew = (url, newItem) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => setData(res.ok));
  }, [url, newItem]);

  return [data];
};

export default useAddNew;