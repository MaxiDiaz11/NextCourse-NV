"use client";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 mt-6 items-center justify-center">
      <SimpleWidget
        href="/dashboard/counter"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        label="Contador"
        subtitle="Productos en carrito de compras"
        title={counter.toString()}
      />
    </div>
  );
};
