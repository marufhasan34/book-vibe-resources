import { useContext} from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Context/BookContext";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const expectedBook = books.find((book) => book.bookId == id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;
  const {handleMarkAsRead, handleWishList} = useContext(BookContext);
  console.log(handleMarkAsRead);
  

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-15">
      <div className=" flex items-center justify-center rounded-2xl bg-gray-100">
        <img className="h-96 rounded-2xl" src={image} alt="" />
      </div>
      <div className="w-full">
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <h4 className="font-semibold py-4">By : {author}</h4>
        <div className="divider"></div>
        <h4 className="font-semibold">{category}</h4>
        <div className="divider"></div>
        <p className="font-bold text-xl">
          Review : <span className="text-gray-800 font-light">{review}</span>
        </p>
        <div className="flex gap-2 my-5 font-bold">
          tags :{" "}
          {tags.map((tag, ind) => (
            <div key={ind} className="badge badge-soft badge-success">
              {tag}
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="space-y-4 ">
          <div className="flex justify-baseline font-semibold items-center gap-2">
            <span>Number of pages : </span>{" "}
            <span className="font-bold">{totalPages}</span>
          </div>
          <div className="flex justify-baseline font-semibold items-center gap-2">
            <span>publisher : </span>{" "}
            <span className="font-bold">{publisher}</span>
          </div>
          <div className="flex justify-baseline font-semibold items-center gap-2">
            <span>year Of Publishing : </span>{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </div>
          <div className="flex justify-baseline font-semibold items-center gap-2">
            <span>Rating : </span> <span className="font-bold">{rating}</span>
          </div>
        </div>
        <div className="my-5 flex gap-5">
          <button
            className="btn"
            onClick={() => handleMarkAsRead(expectedBook)}
          >
            Read
          </button>
          <button onClick={() => handleWishList(expectedBook)} className="btn btn-accent">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
