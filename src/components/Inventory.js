import React from "react";
import Juice from "./Juice";

const masterInventory = [
  {
    name: 'Tropical',
    brand: 'Coco Nut',
    price: 2.99,
    flavor: 'Pineapple'
  }
];

function Inventory() {
  return (
    <React.Fragment>
    {masterInventory.map((juice, index) =>
          <Juice name={juice.name}
            location={juice.brand}
            price={juice.price}
            flavor={juice.flavor}
            key={index}/>
        )}
    </React.Fragment>
  )
}

export default Inventory;