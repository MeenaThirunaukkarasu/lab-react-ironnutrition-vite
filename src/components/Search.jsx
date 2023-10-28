import { Divider, Input } from "antd";

function Search({ filteredFood }) {
  const handleChange = (e) => {
    const searchInput = e.target.value;
    console.log(searchInput);
    filteredFood(searchInput);
  };

  return (
    <div>
      <Divider>Search</Divider>
      <label htmlFor="name">Search:</label>
      <Input type="text" onChange={handleChange}></Input>
    </div>
  );
}

export default Search;