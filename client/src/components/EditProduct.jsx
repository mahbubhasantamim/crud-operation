import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = (props) => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    productName: props.singleProduct.productName,
    productPrice: props.singleProduct.productPrice,
    productDesc: props.singleProduct.productDesc,
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: [value],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/updateproduct/${id}`, {
        productName: String(formData.productName),
        productPrice: Number(formData.productPrice),
        productDesc: String(formData.productDesc),
      });

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 bg-secondary-color p-10">
        <h3 className="text-center text-xl font-medium py-3 text-black mb-3">
          Update product
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="Product name"
              className="p-3 rounded-md mb-3 outline-none"
            />
            <input
              type="number"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleInputChange}
              placeholder="Product price"
              className="p-3 rounded-md mb-3 outline-none"
            />
            <textarea
              name="productDesc"
              value={formData.productDesc}
              onChange={handleInputChange}
              placeholder="Product description"
              className="h-32 p-3 rounded-md mb-3 outline-none"
            />
          </div>
          <input
            type="submit"
            value="Update"
            className="bg-green-500 font-medium py-3 px-6 rounded-md w-full cursor-pointer hover:text-white mb-4"
          />
          <button
            className="bg-orange-400 font-medium py-3 px-6 rounded-md w-full cursor-pointer hover:text-white"
            onClick={props.openUpdateModal}
          >
            Cancle
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
