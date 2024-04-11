import { Metadata } from "next";
import { CardCounter } from "@/app/shopping-cart/components";

export const metadata: Metadata = {
  title: "Shopping Cart Counter",
  description: "Contador de productos en el carrito",
  keywords: "counter, carrito, productos",
};

const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CardCounter value={20} />
    </div>
  );
};

export default CounterPage;
