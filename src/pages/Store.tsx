import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItems } from "../components/StoreItems";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Store() {
  const [name, setname] = useState("");
 
  return (
    <div
      className="p-3 example"
      style={{
        height: "80vh",
        overflowY: "scroll",
      }}
    >
      <div className="mb-3">
        <Form
          className="d-flex align-items-baseline justify-content-center gap-4"
        >
          <Form.Group className="mb-3" controlId="Name">
            <Form.Control
              className="form-control-lg"
              type="text"
              onChange={(e)=>setname(e.target.value)}
              placeholder="Search..."
              style={{ width: "25rem" }}
            />
          </Form.Group>
        </Form>
      </div>
      <Row md={2} lg={3} xs={1} className="g-3">
        {storeItems.filter((item: any) => {
            return name.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(name.toLowerCase())}).map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
