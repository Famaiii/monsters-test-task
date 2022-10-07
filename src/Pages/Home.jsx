import React from "react";
import Card from "../components/Card/Card";

import Pagination from "../components/Pagination/Pagination";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
  onClickWindow,
  setCurrentPage,
  currentPage,
  itemsAmount,
  setItemsAmount,
}) => {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.author.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        onModalWindow={(obj) => onClickWindow(obj)}
        {...item}
      />
    ));
  };


  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Searching by author: ${searchValue}` : "All pictures"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />

          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="clear"
            />
          )}

          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Author..."
          />
        </div>
      </div>

      <div className="sneakers d-flex flex-wrap">{renderItems()}</div>
      <div className="d-flex flex-column align-center ">
        <Pagination
          currentPage={currentPage}
          onChangePage={(number) => setCurrentPage(number)}
        />
        <input
          className="mt-20"
          onChange={(event) => setItemsAmount(event.target.value)}
          name="itemsAmount"
          placeholder="items on page..."
        />
      </div>
    </div>
  );
};

export default Home;
