import { useGetProductsQuery } from "../../redux/api/products";
import { IProduct } from "../../types";
import Stars from "../stars/Stars";
import LikeBtn from "./LikeBtn";
import SeeBtn from "./SeeBtn";
// import Loading from "../loading/Loading"; // Loading componentni import qilish

const Products = () => {
    const { data, isLoading } = useGetProductsQuery("");

    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                {/* <Loading /> */}
            </div>
        );
    }

    const products = data?.products.slice(0, 8) || [];

    return (
        <div className="container grid grid-cols-4 gap-6 my-7">
            {products.map((product: IProduct) => (
                <div key={product.id} className="w-full h-[322px]">
                    <div className="h-[250px] bg-[#F5F5F5] flex justify-center items-center relative group overflow-hidden rounded-sm">
                        <img
                            src={
                                product.images[1]
                                    ? product.images[1]
                                    : product.images[0]
                            }
                            alt={product.title}
                            className="object-contain w-full h-[200px]"
                        />
                        <div className="absolute top-2 flex flex-col gap-2 right-[-50px] group-hover:right-2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                            <LikeBtn product={product} />
                            <SeeBtn product={product} />
                        </div>
                        <div className="absolute bottom-[-50px] group-hover:bottom-0 duration-300 ease-in-out"></div>
                    </div>

                    <div className="flex flex-col pt-4">
                        <h2 className="truncate font-poppins font-medium">
                            {product.title}
                        </h2>
                        <div className="flex gap-2 font-poppins">
                            <p className="text-[#DB4444] font-medium">
                                ${product.price}
                            </p>
                            <Stars rating={product.rating} />
                            <p className="font-medium">({product.stock})</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
