import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";

const ListedCard = ({ book }) => {
  const {
    bookName,
    author,
    image,
    totalPages,
    category,
    tags,
    rating,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex gap-9 border border-gray-200 p-7 mt-5 rounded-2xl">
      <div className="bg-gray-200 rounded-2xl p-7">
        <img className="h-60" src={image} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-2xl">{bookName}</h2>
        <h4 className="text-xl my-3 font-semibold">By : {author}</h4>
        <div className="flex gap-4">
             <span className="font-bold ">Tag :</span>
          {tags.map((tag, ind) => (
            <div key={ind} className="badge badge-soft badge-success">
               #{tag}
            </div>
          ))}
          <p className="flex items-center gap-2"><CiLocationOn /> Year of Publishing : {yearOfPublishing}</p>
        </div>
        <div className="text-gray-500 flex my-5 gap-4">
            <p className=" flex items-center gap-2"><IoMdContact /> Publisher : {publisher}</p>
            <p className=" flex items-center gap-2"><RiPagesLine /> Page : {totalPages}</p>
        </div>
        <div className="divider"></div>
        <div className="flex gap-4 items-center">
            <p className="badge badge-soft badge-primary">Category : {category}</p>
            <p className="badge badge-soft badge-warning">Rating :{rating}</p>
            <button className="py-1 text-white font-semibold px-5 bg-green-500 rounded-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ListedCard;
