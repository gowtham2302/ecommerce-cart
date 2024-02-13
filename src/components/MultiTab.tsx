import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Store } from "../pages/Store";
import { Button } from "react-bootstrap";

export default function MultiTab() {
  const [counts, setCounts] = useState([1]);

  function handleTab() {
    setCounts((counts) => {
      let a = counts.length - 1;
      return [...counts, counts[a] + 1];
    });
  }

  function handlesubTab() {
    if (counts.length == 1) return 
    counts.pop();
    setCounts([...counts]);
  }

  return (
    <>
    <div className="d-flex justify-content-end">
      <Button onClick={handleTab} style={{ height: "2.5rem" }}>
        +
      </Button>
      &nbsp;
      <Button onClick={handlesubTab} style={{ height: "2.5rem" }}>
        -
      </Button>
    </div>
    <div >
      <Tabs defaultActiveKey="1">
        {counts.map((count) => (
          <Tab eventKey={count} title={count} key={count}>
            <Store />
          </Tab>
        ))}
      </Tabs>
    </div>
    </>
  );
}
