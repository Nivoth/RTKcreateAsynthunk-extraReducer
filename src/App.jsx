import "./App.css";
import { fetchProducts } from "../src/redux/features/products/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "./components/common/cards/CardProduct";
function App() {
  //use dispatch to dispatch an action
  const dispatch = useDispatch();

  //use selector to get the state from the store
  const {products,status,error} = useSelector((state) => state.products);
  //console.log("products",products);

  //use effect to dispatch the action 
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section>
      <h1 className=" text-2xl text-cyan-700 font-bold text-center mt-4">Our Products</h1>
      {status === "loading" && <h1>Loading...</h1>}
      {status === "success" && 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-1">
          {products?.map((product, index) => {
            return (
              <CardProduct
                image={product.image}
                description={product.description}
                title={product.title}
                price={product.price}
                id={product.id}
                key={index}
              />
            );
          })}
        </div>
      }
    </section>
  );
}
export default App;


