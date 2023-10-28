import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContexts";
import { ToastContainer, toast } from "react-toastify";
import NotFound from "../views/NotFound";

const ProductDetail = () => {
  const { data, addToCart, callToast } = useContext(DataContext);
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProductById = async () => {
    try {
      const selectedProduct = data.find((item) => item.id === id);
      console.log(selectedProduct);
      if (selectedProduct) {
        setProduct(selectedProduct);
      } else {
        console.error("No se encontró el producto");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProductById();
  }, [data, id]);

  console.log(data);
  console.log(id);
  console.log(product);
  return (
    <>
      <ToastContainer />
      <div className="p-2">
        {console.log(product)}
        <div className="d-flex justify-content-center">
          {product.img ? (
            <Card style={{ width: "60rem" }} className="flex-xl-row mt-5">
              <div
                className=" img-fluid d-flex justify-content-center"
                style={{ width: "90rem" }}
              >
                {product.img ? (
                  <Card.Img
                    variant="top"
                    src={product.img}
                    className="img-product align-items-center" alt="pizza"
                  />
                ) : (
                  <div>No hay imagen disponible</div>
                )}
              </div>

              <Card.Body>
                <Card.Title className="name text-center">
                  {product.name}
                </Card.Title>
                <hr></hr>
                <Card.Text className="mb-3">
                  {product.desc}
                  <hr></hr>
                  Ingredientes
                  <ul>
                    {product.ingredients &&
                      product.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                  </ul>
                  <hr></hr>
                  <div className="">
                    <h3>$ {(product.price).toLocaleString("es-CL")}</h3>
                  </div>
                </Card.Text>

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
          ) : (
            <NotFound message="Articulo no encontrado" />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
