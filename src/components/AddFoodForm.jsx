import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  function getData(event) {
    event.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    console.log(newFood);
    addFood(newFood);
  }

  return (
    <div id="form-component">
      <form id="myForm" onSubmit={getData}>
        <Divider>Add Food Entry</Divider>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label htmlFor="image">Image</label>
        <Input
          type="text"
          value={image}
          name="image"
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <br />

        <label htmlFor="calories">Calories</label>
        <Input
          type="number"
          value={calories}
          name="calories"
          onChange={(e) => setCalories(e.target.value)}
          required
        />
        <br />

        <label htmlFor="servings">Servings</label>
        <Input
          type="number"
          value={servings}
          name="servings"
          onChange={(e) => setServings(e.target.value)}
          required
        />
        <br />

        <Button type="primary" style={{ margin: 10 }} value="Create">
          Create
        </Button>
      </form>
    </div>
  );
}

export default AddFoodForm;