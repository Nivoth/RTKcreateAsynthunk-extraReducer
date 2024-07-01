import { useParams } from "react-router-dom";
import { CardProductDetail } from "../../components/common/cards/CardProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductById } from "../../redux/features/products/productSlice";
export default function ProductDetail() {
  //use params to get the id from the url
  const param = useParams();

  //use dispatch to dispatch an action
  const dispatch = useDispatch();

  //use selector to get the state from the store
  const product = useSelector((state) => state.products.singleProduct);

  //use effect to dispatch the action only once
  useEffect(() => {
    dispatch(fetchProductById(`${param.id	}`));
  }, []);
  return (
    <div className="flex justify-center items-center h-[90vh] flex-col">
      <h1 className="text-2xl text-cyan-700 font-bold p-4">Product Details</h1>
      <CardProductDetail
        image={product.images}
        description={product.description}
        title={product.title}
        price={product.price}
      />
    </div>
  )
}
