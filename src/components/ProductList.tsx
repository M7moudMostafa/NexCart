import { WixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

// Simple function to strip HTML tags and get plain text
const stripHtml = (html: string): string => {
    if (!html) return "";
    // Remove HTML tags and decode HTML entities
    return html
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim();
};

// Get first N characters of description
const getDescriptionPreview = (description: string, maxLength: number = 100): string => {
    const text = stripHtml(description);
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
};

const ITEMS_PER_PAGE = 20;

const ProductList = async ({
    categoryId,
    limit = ITEMS_PER_PAGE,
}: {
    categoryId?: string;
    limit?: number;
}) => {

    const wixClientServer = await WixClientServer();

    const fetchLimit = categoryId ? (limit || ITEMS_PER_PAGE) * 3 : (limit || ITEMS_PER_PAGE);
    const query = wixClientServer.products.queryProducts();
    const res = await query.limit(fetchLimit).find();

    let filteredItems = res.items;
    if (categoryId) {
        filteredItems = res.items.filter((product: products.Product) =>
            product.collectionIds && product.collectionIds.includes(categoryId)
        ).slice(0, limit || ITEMS_PER_PAGE);
    }

    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            {filteredItems.map((product: products.Product) => (
                <Link
                    href="/test"
                    key={product._id}
                    className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                >
                    <div className="relative w-full h-80">
                        <Image
                            src={product.media?.mainMedia?.image?.url || "/product.jpg"}
                            alt="product image"
                            fill
                            sizes="25vw"
                            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
                        />
                        <Image
                            src={product.media?.items?.[1]?.image?.url || "/product.jpg"}
                            alt="product image"
                            fill
                            sizes="25vw"
                            className="absolute object-cover rounded-md"
                        />
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">{product.name}</span>
                        <span className="font-semibold">{product.priceData?.price}$</span>
                    </div>
                    <div className="text-sm text-gray-500">
                        {getDescriptionPreview(product?.description || "")}
                    </div>
                    <button className="rounded-2xl ring-1 w-max ring-demo text-demo py-2 px-4 text-xs hover:bg-demo hover:text-white">
                        Add to cart
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
