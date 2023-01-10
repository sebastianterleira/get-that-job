import { useEffect, useState } from "react";
import Input from "../componente/input";
import { getProducts } from "../service/eatableapi-service";

function SearchPage() {
  const [query, setQuery] = useState("");


  useEffect(() => {
    getProducts().then((data) => {
   console.log(Object.values(data))
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);

  // function handleSubmit(event) {
  //   event.preventDefault();
    
  //   getEatable(query).then(console.log).catch(console.log);
  // }

  return (
    <form>
      <Input 
      name="query" 
      placeholder="Search"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchPage;
