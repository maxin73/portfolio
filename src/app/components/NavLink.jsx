import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link 
    href={href} 
    className="block py-3 pl-4 sm:text-xl rounded md:p-0 hover:text-gray-400">
      {title}
    </Link>
  )
}

export default NavLink;