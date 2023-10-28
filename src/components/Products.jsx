import { useContext } from "react";
import { DataContext } from "../contexts/DataContexts";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Products = () => {
  const { data, addToCart, callToast } = useContext(DataContext);
  const Navigate = useNavigate();
  const handProductsDetail = (id) => {
    Navigate(`/ProductDetail/${id}`);
  };

  return (
    <>
      <ToastContainer />
      {data.map((product,i) => {
        return (
          <div key={i} className="p-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name.toUpperCase()}</Card.Title>
                <hr></hr>
                <Card.Text>
                  Ingredientes
                  {product.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                  <hr></hr>
                  <div className="d-flex justify-content-center">
                    <h3>$ {((product.price).toLocaleString("es-CL"))}</h3>
                  </div>
                </Card.Text>
                <Button
                  className=" m-2 bt-more "
                  variant="primary"
                  onClick={() => handProductsDetail(product.id)}
                >
                  Ver mas 👀
                </Button>
                <Button
                  className="m-2 "
                  variant="danger"
                  onClick={() => {
                    callToast(() => {
                      toast.warn(`Se a agregado una pizza ${product.name}`);
                    });
                    addToCart(product);
                  }}
                >
                  Añadir 🛒
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Products;
