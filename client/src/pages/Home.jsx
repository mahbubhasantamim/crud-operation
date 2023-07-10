import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/card/ProductCard";

const Home = () => {
  //Get all product
  const [getProducts, setGetProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setGetProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //SEARCH
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.get(
        `http://localhost:3000/api/search?pName=${encodeURIComponent(
          searchTerm
        )}`
      );

      // setSearchResults(response.data);

      setGetProducts(response.data.products);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const products =
    getProducts.length === 0 ? (
      <p>Add some product</p>
    ) : (
      getProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))
    );

  return (
    <>
      <div>
        <div className="flex justify-between items-center px-20 py-6 mb-1 bg-secondary-color">
          <div>
            <p className=" text-3xl font-medium">
              <Link to="/">E-Shop</Link>
            </p>
          </div>
          <form onSubmit={handleSearch}>
            <div className="flex">
              <input
                type="text"
                name="pName"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="p-2 outline-none"
              />
              <input
                type="submit"
                value="Search"
                className="text-white bg-orange-400 py-1 px-3 rounded-r-md"
              />
            </div>
          </form>
        </div>

        <div className="flex">
          <div className="bg-secondary-color w-1/4 p-8 h-screen">
            <Sidebar />
          </div>
          <div className="w-3/4 p-8">
            <div className="grid grid-cols-4">{products}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
