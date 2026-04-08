import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import ListedCard from "./ListedCard";

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(readList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredReadList(sortedData)
      } else if (sortingType === "rating") {
        const sortedData = [...readList].sort(
          (a, b) => a.rating - b.rating,
        );
        setFilteredReadList(sortedData)
      }
    }
  }, [sortingType, readList]);

  if (filteredReadList.length === 0) {
    return (
      <div>
        <h2 className="text-center p-50 text-2xl font-semibold">
          No Read list data Found
        </h2>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      {filteredReadList.map((book, ind) => (
        <ListedCard book={book} key={ind} />
      ))}
    </div>
  );
};

export default ListedReadList;
