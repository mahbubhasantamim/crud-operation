import axios from "axios";
import { useState } from "react";

const Sidebar = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDesc: "",
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
    try {
      const response = await axios.post(
        "http://localhost:3000/api/addproduct",
        {
          productName: String(formData.productName),
          productPrice: String(formData.productPrice),
          productDesc: String(formData.productDesc),
        }
      );
      setFormData({
        productName: "",
        productPrice: "",
        productDesc: "",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h3 className="text-center text-xl font-medium py-3 text-black mb-3">
          Add new product
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="Product name"
              required
              className="p-3 rounded-md mb-3 outline-none"
            />
            <input
              type="number"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleInputChange}
              placeholder="Product price"
              required
              className="p-3 rounded-md mb-3 outline-none"
            />
            <textarea
              name="productDesc"
              value={formData.productDesc}
              onChange={handleInputChange}
              placeholder="Product description"
              required
              className="h-32 p-3 rounded-md mb-3 outline-none"
            />
          </div>
          <input
            type="submit"
            value="Add product"
            className="bg-orange-400 font-medium py-3 px-6 rounded-md w-full cursor-pointer hover:text-white"
          />
        </form>
      </div>
    </>
  );
};

export default Sidebar;
