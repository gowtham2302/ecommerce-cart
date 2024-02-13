import { Button, Container, Nav } from "react-bootstrap";
import { Navbar as Navbars } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {

  const {openCart , closeCart , cartQuantity , cart} = useShoppingCart()

  return (
    <Navbars bg="white" sticky="top" className="shadow-sm mb-3" variant="light">
      <Container fluid>
      <Navbars.Brand href="#home"><h3>Store</h3></Navbars.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" active>Products</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
          </Nav>

        {cartQuantity > 0 && (

         <Button onClick={openCart} style={{width:'3rem' , height:'3rem', marginRight:'1.5rem' , backgroundColor:'white'}} variant="outline-dark" className="rounded-circle">
            <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" 
            style={{
                width: '23px',
            }}
            />
            <div className="rounded-circle bg-danger d-flex justify-content-center" style={{
                color:'white',
                width:'1.5rem',
                height:'1.5rem',
                position:'absolute',
                bottom:0,
                right:'1.6rem',
            }}>
                {cart.length}
            </div>
         </Button>
         )}
      </Container>
    </Navbars>
  );
}


