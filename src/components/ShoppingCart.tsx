import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formater";
import { CartItems } from "./CartItems";
import storeItems from "../data/items.json"


type shopingcartprops ={
    open:boolean,
}


export function ShoppingCart({open} : shopingcartprops) {

    const {closeCart , cart} = useShoppingCart()

    // console.log(cart)

  return (
    <Offcanvas show={open} placement="end" onHide={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title><h4>Cart</h4></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cart.map(item => (
                    <CartItems key={item.id} {...item}/>
                ))}
                <hr/>
                <div className="ms-auto fw-bold fs-5">
                    Total{"  :  "}
                    {formatCurrency(
                        cart.reduce((total , item) => {
                            const items : any = storeItems.find(i => i.id === item.id)
                            return total + (items?.price || 0) * item.quantity
                        } ,0)
                    )}
                </div>
                <hr></hr>
                <div className="d-flex justify-content-between" >
                    <Button>
                           Scan ID
                    </Button>
                    <Button>
                            buy
                    </Button>
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}
