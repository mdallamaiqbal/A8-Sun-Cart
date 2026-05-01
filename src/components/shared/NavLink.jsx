"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink = ({href,children,className}) => {
    const pathname = usePathname();
    const isActive = href === pathname;
    return (
        <div>
            <Link href={href} className={`pb-2 font-semibold ${isActive ? "border-b-2 border-b-[#00ACC1] text-[#00ACC1] ": "" }${className} `}>
             {children}
            </Link>
        </div>
    );
};

export default NavLink;