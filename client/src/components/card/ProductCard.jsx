import { Link } from "react-router-dom";
import pPhoto from "../../assets/img/p.jpg";

const ProductCard = (props) => {
  return (
    <>
      <div className=" m-2 pb-3 bg-secondary-color hover:cursor-pointer hover:shadow-lg">
        <Link to={`/products/${props.product._id}`}>
          <img src={pPhoto} alt="" className="w-full" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold pb-1">
              {props.product.productName}
            </h2>
            <h3 className="text-md font-medium mb-5">
              Price: {props.product.productPrice}
            </h3>

            <p>{props.product.productDesc}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
