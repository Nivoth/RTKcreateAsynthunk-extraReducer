import React from "react";
import { Card } from "flowbite-react";
import { useSelector } from "react-redux";
import ProductCart from "../../components/common/cards/ProductCart";
export default function Cart() {
  //fetch items from store using hook useSelector
  const products = useSelector((state) => state?.cart?.items);
  return (
    <div className="flex justify-center items-center h-[80vh] mt-5 ">
      <Card className="w-1/2">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
            Shopping Carts
          </h5>
        </div>
        {products && (
          <div className="overflow-x-auto h-[70vh]">
            {products.map((product, index) => {
              return (
                <ProductCart
                  key={index}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  qty={product.qty}
                  description={product.description}
                />
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}
