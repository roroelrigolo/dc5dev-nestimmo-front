'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children, ...props }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`hover:underline hover:underline-offset-4 hover:text-cprimary ${isActive ? 'text-cprimary' : ''}`}>
            {children}
        </Link>
    );
};

const Navbar = () => {
    return ( 
        <nav className="flex justify-center items-center p-5 border-b">
            <div className="flex gap-x-4">
                <NavLink href="/">NestImmo</NavLink>
                <NavLink href="/posts">Posts</NavLink>
                <NavLink href="/categories">Catégories</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;