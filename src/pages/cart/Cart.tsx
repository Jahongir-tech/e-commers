import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Cart Page</h1>
            <Link
                to="/"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default Cart;
