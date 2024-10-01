import { useContext } from "react";
import { Card } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";
import AddToCartButton from "../components/AddToCartButton";
import { Link } from "react-router-dom";

function Home() {
  const { pizzaData } = useContext(PizzaContext);
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {pizzaData.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={pizza.img}
                  alt={`Imagen ${pizza.name}`}
                />
                <Card.Body>
                  <Card.Title>Pizza {pizza.name}</Card.Title>
                  <Card.Text>
                    <strong>Ingredientes:</strong>{" "}
                    <ul>
                      {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Text>
                    <strong>Precio:</strong> ${pizza.price}
                  </Card.Text>
                  <div className="button-container">
                    <Link to={`/pizza/${pizza.id}`}> Ver más</Link>
                    <AddToCartButton
                      variant="dark"
                      item={pizza}></AddToCartButton>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
