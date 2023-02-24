import React from 'react';
import CharCard from './CharCard';

const Favorites = ({ favorites, removeFromFavorites }) => {
    console.log('favorites', favorites);
    return (
        <div>
            {favorites.map(fav => {
                return <CharCard char={fav} removeFromFavorites={removeFromFavorites} />
            })}
        </div>
    )
};

export default Favorites;