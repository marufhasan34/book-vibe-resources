import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, getAllReadListFromLocalDB } from "../Utils/LocalDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() =>  getAllReadListFromLocalDB());
  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    addReadListToLocalDB(currentBook)
    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error(" the book is already exist");
    } else {
      setReadList([...readList, currentBook]);
      toast.success(`${currentBook.bookName} is added to list`);
    }
  };
  const handleWishList = (currentBook) => {
    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error(" This book is already in your Read list");
      return;
    }
    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error(" The book is already exist");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to Wish list`);
    }
  };
  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
