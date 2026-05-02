import Link from "next/link";


const NotFound = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F3E7] text-[#00ACC1]">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
            <button className="mt-5"><Link href={'/'} className="btn bg-[#00ACC1] text-white">Back to Home</Link></button>
        </div>
        </div>
    );
};

export default NotFound;