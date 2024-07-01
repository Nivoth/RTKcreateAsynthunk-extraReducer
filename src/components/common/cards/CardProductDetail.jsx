
import { Card } from "flowbite-react";

export function CardProductDetail({ image, description, title, price}) {
  return (
    <Card className="max-w-sm" imgSrc={image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title || "No product title"}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description || "No product description"}
      </p>
      <p>
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          {price ? price : "No Price"}$
        </span>
      </p>
    </Card>
  );
}
