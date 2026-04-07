import { FaRegStar } from "react-icons/fa";
const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 border rounded-2xl border-gray-200 p-6  shadow-sm">
      <figure className="p-8 bg-gray-300 rounded-2xl">
        <img
          className="rounded-2xl h-64"
          src={book.image}
          alt={book.bookName}
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          {book.tags.map((tag, ind) => (
            <div key={ind} className="badge badge-soft badge-success">{tag}</div>
          ))}
        </div>
        <h2 className="card-title py-2 font-bold text-2xl">{book.bookName}</h2>
        <p className="font-semibold text-lg pb-2">by : {book.author}</p>
        <div className="card-actions text-xl justify-between border-t border-dashed border-gray-300 pt-4">
          <div className="font-semibold ">{book.category}</div>
          <div className="font-semibold flex gap-2 items-center">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
