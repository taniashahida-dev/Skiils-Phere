'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navlink = ({href,children}) => {
   const path = usePathname()
   const isActive = href==path
//    console.log(path)
    return (
        <div>
            <Link href={href} className={`${isActive?"border-b border-b-purple-500 text-purple-600":href=='/'} text-gray-400 text-lg font-semibold `}>{children}</Link>
        </div>
    );
};

export default Navlink;