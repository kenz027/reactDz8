import useJsonFetch from "./hooks/useJsonFetch";

function App() {
  /* const { loading, data, error } = useJsonFetch('http://localhost:7070/data');
  const { loading, data, error } = useJsonFetch('http://localhost:7070/error'); */
  const { loading, data, error } = useJsonFetch(
    "http://localhost:7070/loading"
  );
  return (
    <>
      {loading && <p>loading</p>}
      {data && <p>data</p>}
      {error && <p>error</p>}
    </>
  );
}

export default App;
