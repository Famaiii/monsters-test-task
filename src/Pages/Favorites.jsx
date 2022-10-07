import React from "react";
import Card from "../components/Card/Card";
import { AppContext } from "../App";

const Favorites = () => {
  const { isLoading } = React.useContext(AppContext);

  const localItems = JSON.parse(localStorage.getItem("favorites"));
  const renderFavorites = () => {
    return (isLoading ? [...Array(12)] : localItems).map((item, index) => (
      <Card key={index} loading={isLoading} {...item} />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Favorites</h1>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {localItems ? renderFavorites() : "Add any picture("}
      </div>
    </div>
  );
};

export default Favorites;
