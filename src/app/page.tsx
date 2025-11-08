// "use client"; // Use when using hooks and context

import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
// import { useWixClient } from "@/hooks/useWixClient";
import { WixClientServer } from "@/lib/wixClientServer";
// import { useEffect } from "react"

const HomePage = async () => {

  // Uncomment when using hooks and context
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const result = await wixClient.products.queryProducts().find();
  //     console.log(result);
  //   }

  //   getProducts();
  // }, [wixClient])

  // uncomment when using server client
  // const wixClientServer = await WixClientServer();
  // const { items } = await wixClientServer.products.queryProducts().find();

  // console.log(items);

  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
    </div>
  )
}

export default HomePage