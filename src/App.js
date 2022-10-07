import React from "react";
import "./index.scss";
import axios from "axios";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import ModalWindow from "./components/ModalWindow/ModalWindow";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [open, setOpen] = React.useState(false);

  const [currentPage, setCurrentPage] = React.useState(1);

  const [itemsAmount, setItemsAmount] = React.useState(12);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const itemsResponse = await axios.get(
          `https://picsum.photos/v2/list?page=${currentPage}&limit=${itemsAmount}`
        );

        setIsLoading(false);

        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.error(error);
      }
    }

    fetchData();
  }, [currentPage, itemsAmount]);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (event) => {
    setFavorites((prev) => [...prev, event]);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(event);
  };

  const onClickWindow = (event) => {
    localStorage.setItem("modal", JSON.stringify(event));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        favorites,
        onAddToFavorite,
        isLoading,
        setOpen,
        open,
      }}
    >
      <div className="wrapper clear">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
                onClickWindow={onClickWindow}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                itemsAmount={itemsAmount}
                setItemsAmount={setItemsAmount}
              />
            }
          ></Route>

          <Route path="/favorites" element={<Favorites />}></Route>

          <Route path="/orders"></Route>
        </Routes>

        {open ? <ModalWindow open={open} setOpen={setOpen} /> : ""}
      </div>
    </AppContext.Provider>
  );
}

export default App;
