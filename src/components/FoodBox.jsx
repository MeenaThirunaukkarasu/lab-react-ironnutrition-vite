import { Card, Col, Button } from "antd";

function FoodBox({ foods, deleteFoodBox }) {
  const { name, image, servings, calories, id } = foods;

  return (
    <div className="food-box">
      <Col>
        <Card
          title={<span className="custom-card-title">{name}</span>}
          style={{ width: 280, height: 400, margin: 10 }}
        >
          <img src={image} height={60} alt="food" />

          <p>Calories: {calories}</p>
          <p>Servings {servings}</p>

          <p>
            <b>Total Calories: {servings * calories} </b> kcal
          </p>

          <Button
            type="primary"
            style={{ margin: 10 }}
            onClick={() => deleteFoodBox(id)}
          >
            Delete
          </Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;