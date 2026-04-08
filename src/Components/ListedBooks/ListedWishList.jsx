import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import ListedCard from "./ListedCard";

const ListedWishList = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);

  const [filteredWishList, setFilteredWishList] = useState(wishList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredWishList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
        setFilteredWishList(sortedData);
      }
    }
  }, [sortingType, wishList]);

  if (filteredWishList.length === 0) {
    return (
      <div>
        <h2 className="text-center p-50 text-2xl font-semibold">
          No Wish list data Found
        </h2>
      </div>
    );
  }
  return (
    <div>
      {filteredWishList.map((book, ind) => (
         <ListedCard book={book} key={ind} />
      ))}
    </div>
  );
};
export default ListedWishList;
