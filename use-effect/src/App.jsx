import { useEffect, useState } from "react";
import Details from "./components/Details";
import List from "./components/List";
import { Context } from "./context/Context";
export const getRandId = () => self.crypto.randomUUID();
function App() {
  const [nameList, setNameList] = useState([]);
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    getNameList();
  }, []);
  async function getNameList() {
    const response = await fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    );
    const data = await response.json();
    setNameList(data);
  };

  async function getDetails(id) {
    setIsLoading(true);
    const response = await fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
    );
    const data = await response.json();
    setDetails(data);
    setIsLoading(false);
  }
  return (
    <div className="App">
    <Context.Provider value={{
      getDetails:(id)=> getDetails(id), 
      setDetails: ()=>setDetails()}}>
      <List list={nameList}/>
      {details && <Details details={details} isLoading={isLoading}/>}
    </Context.Provider>
    </div>
  );
}

export default App;
