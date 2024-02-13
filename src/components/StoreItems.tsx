import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formater";

type stroreItemprops = {
  id: number;
  name: string;
  available: number;
  image: string;
  price: number;
};

export function StoreItems({
  id,
  name,
  available,
  image,
  price,
}: stroreItemprops) {

  const { getItemQuantity ,increaseQuantity , decreaseQuantity , removeItem } = useShoppingCart()
  const quantity = getItemQuantity(id) ;
  

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title
          className="d-flex align-items-baseline justify-content-between mb-4"
          style={{ flexGrow: "1" }}
        >
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mb-3">
          Available : {available}
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseQuantity(id)}>+ Add to cart</Button>
          ) :
           <div className="d-flex align-items-center flex-column" style={{gap:'1rem'}}>
                <div className="d-flex align-items-center justify-content-center" style={{gap:'1rem'}}>
                    <Button  onClick={() => decreaseQuantity(id) }>-</Button>
                    <div>
                        <span>{quantity}</span> in cart
                    </div>
                    <Button  onClick={ () => increaseQuantity(id)}>+</Button>
                </div>
                <Button variant="danger"  onClick={() => removeItem(id) }>remove</Button>
           </div>
        }
        </div>
      </Card.Body>
    </Card>
  );
}
