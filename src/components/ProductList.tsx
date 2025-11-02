import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="https://openaccess-cdn.clevelandart.org/1987.58/1987.58_web.jpg"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
                    />
                    <Image
                        src="https://live.staticflickr.com/1887/43212654745_03cbefb861_b.jpg"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 w-max ring-demo text-demo py-2 px-4 text-xs hover:bg-demo hover:text-white">
                    Add to cart
                </button>
            </Link>
            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="https://openaccess-cdn.clevelandart.org/1987.58/1987.58_web.jpg"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
                    />
                    <Image
                        src="https://live.staticflickr.com/1887/43212654745_03cbefb861_b.jpg"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 w-max ring-demo text-demo py-2 px-4 text-xs hover:bg-demo hover:text-white">
                    Add to cart
                </button>
            </Link>
            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="https://openaccess-cdn.clevelandart.org/1987.58/1987.58_web.jpg"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
                    />
                    <Image
                        src="https://live.staticflickr.com/1887/43212654745_03cbefb861_b.jpg"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 w-max ring-demo text-demo py-2 px-4 text-xs hover:bg-demo hover:text-white">
                    Add to cart
                </button>
            </Link>
            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="https://openaccess-cdn.clevelandart.org/1987.58/1987.58_web.jpg"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
                    />
                    <Image
                        src="https://live.staticflickr.com/1887/43212654745_03cbefb861_b.jpg"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 w-max ring-demo text-demo py-2 px-4 text-xs hover:bg-demo hover:text-white">
                    Add to cart
                </button>
            </Link>
        </div>
    );
};

export default ProductList;
