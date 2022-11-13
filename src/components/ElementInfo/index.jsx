import React from "react";
import { useState, useEffect } from "react";
import "./element-info.css";

import Places from '../Places'

const ElementInfo = () => {


  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    };
    getItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch(
      "https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f"
    );
    const data = await res.json();

    return data;
  };

  return (
    <div className="infoWrapper">
      {items.map((item, i) => (
        <div key={item.id}>
          <div className="infoImg">
            <img src={item.image} alt="img" />
          </div>
          <div className="infoText">
            <div className="contacts">
              <div className="con1">
                <h3>Address</h3>
                <p> {item.address.number} {item.address.street} </p>
                <p> {item.address.city}, {item.address.country}  {item.address.zip}</p>
              </div>
              <div className="con2">
                <h3>Contact</h3>
                <p>{item.phone}</p>
                <p>{item.email}</p>
              </div>
            </div>
            <div className="places">
              <h3>Nearby Places</h3>
                  <Places items={items}/>
            </div>
          </div>
        </div>
      ))[0]}
    </div>
  );
};

export default ElementInfo;
