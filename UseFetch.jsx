import React from 'react'
import { useState, useEffect } from "react";

const UseFetch = () => {
  return (
function UseFetch (url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return [data];
});
}

export default UseFetch