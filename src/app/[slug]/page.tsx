import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = async () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
          perferendis necessitatibus, assumenda saepe quibusdam vero quaerat
          inventore nihil repudiandae enim cupiditate porro fugit recusandae
          autem eum impedit sit, excepturi adipisci?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$60</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Section Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            assumenda eos amet incidunt aliquid eveniet magni? Cupiditate
            possimus ut beatae eos excepturi quam? Harum illum aspernatur
            nostrum ipsam quo commodi!
          </p>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Section Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            assumenda eos amet incidunt aliquid eveniet magni? Cupiditate
            possimus ut beatae eos excepturi quam? Harum illum aspernatur
            nostrum ipsam quo commodi!
          </p>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Section Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            assumenda eos amet incidunt aliquid eveniet magni? Cupiditate
            possimus ut beatae eos excepturi quam? Harum illum aspernatur
            nostrum ipsam quo commodi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
