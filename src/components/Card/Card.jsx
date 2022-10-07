import React from "react";
import classes from "./Card.module.scss";
import MyLoader from "./Loader";

import { AppContext } from "../../App";

const Card = ({
  id,
  onFavorite,
  author,
  download_url,
  onModalWindow,
  favorited = false,
  loading = false,
}) => {
  const { setOpen } = React.useContext(AppContext);

  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickFavorite = () => {
    onFavorite({ id, parentId: id, download_url });
    setIsFavorite(!isFavorite);
  };

  let onClickButton = () => {
    onModalWindow({ id, parentId: id, download_url });
    setOpen(true);
  };

  return (
    <div className={classes.card}>
      {loading ? (
        <MyLoader />
      ) : (
        <>
          {/* Это фрагмент,который заменяет создание лишнего родительского <div>*/}
          <h5 className="">{author}</h5>
          <img width={155} height={112} src={download_url} alt="Sneakers" />
          <div className="d-flex justify-center">
            {onFavorite && (
              <div className="mt-20" onClick={onClickFavorite}>
                <img
                  src={
                    isFavorite
                      ? "/img/heart-liked.svg"
                      : "/img/heart-unliked.svg"
                  }
                  alt="unliked"
                />
              </div>
            )}
          </div>
        </>
      )}

      <button onClick={onClickButton} className="mt-20">
        ✨ Modal Window
      </button>
    </div>
  );
};

export default Card;
