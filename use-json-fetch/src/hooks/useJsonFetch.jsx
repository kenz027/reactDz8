import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts = {}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url, {
      ...opts,
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.status);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
