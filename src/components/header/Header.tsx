import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../../static";
import { GoHeart } from "react-icons/go";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-primary">
                <div className="container flex justify-center items-center p-3 gap-4">
                    <p className="text-white font-poppins font-light">
                        Summer Sale For All Swim Suits And Free Express Delivery
                        - OFF 50%!
                    </p>
                    <p className="text-white underline cursor-pointer hover:brightness-75 duration-150 font-poppins font-semibold">
                        ShopNow
                    </p>
                </div>
            </div>
            <div className="bg-white border-b sticky top-0 left-0 z-50">
                <div className="container flex justify-between items-center py-4">
                    <div
                        className="font-inter text-3xl font-bold cursor-pointer hover:text-gray-600 duration-150 select-none"
                        onClick={() => navigate("/")}
                    >
                        Exclusive
                    </div>
                    <div className="flex gap-14">
                        {links?.map((link) => (
                            <NavLink key={link.title} to={link.path}>
                                <div className="py-3 text-[16px] font-medium hover:text-gray-500 duration-150">
                                    {link.title}
                                </div>
                            </NavLink>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <div className="w-[300px] h-[50px] flex justify-around items-center rounded-[4px] bg-[#F5F5F5]">
                            <input
                                placeholder="What are you looking for?"
                                type="text"
                                className="w-[210px] h-[38px] outline-none bg-[#F5F5F5] font-poppins"
                            />
                            <IoSearchOutline className="w-7 h-7" />
                        </div>
                        <GoHeart
                            onClick={() => navigate("/wishlist")}
                            className="w-7 h-7 cursor-pointer hover:text-gray-500 duration-150"
                        />
                        <IoCartOutline
                            onClick={() => navigate("/cart")}
                            className="w-7 h-7 cursor-pointer hover:text-gray-500 duration-150"
                        />
                        <LuUser
                            onClick={() => navigate("/sign-up")}
                            className="w-7 h-7 cursor-pointer hover:text-gray-500 duration-150"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
