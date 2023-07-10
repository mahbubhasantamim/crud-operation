import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import pPhoto from "../assets/img/p.jpg";
import EditProduct from "./EditProduct";

const SingleProduct = () => {
  //Get single product
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${id}`)
      .then((response) => {
        setSingleProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Delete product
  const navigate = useNavigate();
  const deleteProduct = () => {
    axios
      .delete(`http://localhost:3000/api/deleteproduct/${id}`)
      .then((response) => {
        console.log(response.data);
        navigate(-1);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  //Update produc
  const [updateModal, setUpdateModal] = useState(false);
  const openUpdateModal = () => {
    setUpdateModal(!updateModal);
  };
  return (
    <>
      <div className="mt-16">
        <div className="w-8/12 m-auto ">
          <div className="flex m-2 p-8 rounded-md bg-primary-color hover:shadow-lg">
            <img src={pPhoto} alt="" className="w-2/4" />
            <div className="w-2/4 p-6 relative">
              <h2 className="text-2xl font-semibold pb-1">
                {singleProduct.productName}
              </h2>
              <h3 className="text-md font-medium mb-5">
                Price: {singleProduct.productPrice}
              </h3>

              <p>{singleProduct.productDesc}</p>

              <div className="text-left absolute bottom-0 right-0">
                <button
                  className="py-1 px-4 rounded-md bg-orange-400"
                  onClick={openUpdateModal}
                >
                  Edit
                </button>
                <button
                  className="py-1 px-4 rounded-md bg-red-500 ml-2"
                  onClick={deleteProduct}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        {updateModal ? (
          <EditProduct
            openUpdateModal={openUpdateModal}
            singleProduct={singleProduct}
          />
        ) : null}
      </div>
    </>
  );
};
export default SingleProduct;
