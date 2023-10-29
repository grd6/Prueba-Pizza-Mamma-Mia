import React from "react";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContexts";
import Button from "react-bootstrap/Button";
import Navbarapp from "../components/Navbarapp";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(DataContext);
  const Navigate = useNavigate();

  const redirectHome = () => {
    Navigate(`/`);
  };
  const removeCart = (productId) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity--;
      } else {
        updatedCart.splice(productIndex, 1);
      }
      setCart(updatedCart);
    }
  };
  const addCartList = (productId) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.id === productId);
    updatedCart[productIndex].quantity++;
    setCart(updatedCart);
  };
  console.log("cart", cart.length);
  if (!cart.length) {
    return (
      <>
        <div className="justify-content-center">
          <Navbarapp />
          <div className="d-flex justify-content-center">
            <h1>Carrito de compra esta vacio</h1>
            <div className="d-flex justify-content-center mt-5">
              <Button
                variant="success"
                onClick={() => {
                  Swal.fire(
                    {
                      icon: "warning",
                      title: "🍕 Elige una rica  Pizza MAMMA MIA  primero 🍕",
                      confirmButtonText: "OK",
                      timer: 3000,
                    },
                    Navigate("/")
                  );
                }}
              >
                Volver
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="justify-content-center">
        <Navbarapp />
        <div className="d-flex justify-content-center">
          <h1>Detalle del Pedido</h1>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="d-flex justify-content-center flex-column align-items-start">
            {cart.map((product) => (
              <li className="list" key={product.id}>
                <div className="d-flex mt-5 align-items-center justify-content-center mx-5">
                  <img
                    className="list-cart my-2 mx-5 "
                    src={product.img}
                    alt="shopping cart images"
                  ></img>
                  <div>
                    {product.name.toUpperCase()} <br></br>Precio:{" "}
                    {product.price.toLocaleString("es-CL")}
                  </div>
                  <div className="d-flex  align-items-center ms-5">
                    <Button
                      variant="danger"
                      onClick={() => removeCart(product.id)}
                    >
                      🛒
                    </Button>
                    Cantidad: {product.quantity}
                    <Button
                      variant="primary"
                      onClick={() => addCartList(product.id)}
                    >
                      🛒
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Button
            variant="success"
            onClick={() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Gracias por su compra",
                timer: 3000,
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
            }}
          >
            Pagar
          </Button>
        </div>
      </div>
    );
  }
};
export default Cart;
