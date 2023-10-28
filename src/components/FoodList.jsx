import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import foodsJson from "../foods.json";
import { useState } from "react";

function FoodList() {
  const [foodList, setFoodList] = useState(foodsJson);
  function deleteFoodBox(id) {
    let newArray = [...foodList];
    newArray = newArray.filter((item) => item.id !== id);
    setFoodList(newArray);
  }

  function addFood(newFood) {
    let newArray = [...foodList];
    newArray.push(newFood);
    console.log(newFood);
    setFoodList(newArray);
  }
  function filteredFood(searchInput) {
    let newArray = [...foodList];
    const filteredArray = newArray.filter((item) =>
      item.name.toLowerCase().includes(searchInput)
    );
    setFoodList(filteredArray);
  }
  return (
    <div className="total-content">
      <Search filteredFood={filteredFood} />
      <AddFoodForm addFood={addFood} />
      <div className="card-container">
        {foodList.length <= 0 ? (
          <h1>Sorry... There are no foods </h1>
        ) : (
          foodList.map((food) => {
            return (
              <FoodBox
                key={food.id}
                foods={food}
                deleteFoodBox={deleteFoodBox}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default FoodList;