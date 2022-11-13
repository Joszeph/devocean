import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import TitleElement from "./TitleElement";
import Element from "./Element";

const Home = () => {
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
    <HomeContainer>
      <TitleElement />
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <Link to="/element-info">
              <Element item={item} />
            </Link>
          </div>
        ))}
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 740px;
  overflow: auto;
  width: 90%;
  overflow-x: hidden;

  a {
    text-decoration: none;
  }

  height: 700px;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 10px;
    border: 1px solid lightgrey;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`;
