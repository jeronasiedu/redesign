import {
  GrAppsRounded,
  BiCookie,
  HiOutlineBriefcase,
  RiSearchLine,
  BsSuitHeart,
  HiOutlineShoppingCart,
} from 'react-icons/all'
import { useEffect, useState } from 'react'
const Navbar = () => {
  const items = [
    { name: 'Catalog', icon: <GrAppsRounded /> },
    { name: 'Best deals', icon: <BiCookie /> },
    { name: 'Become Seller', icon: <HiOutlineBriefcase /> },
  ]
  const [halfScrolled, setHalfScrolled] = useState(false)
  const addClass = () => {
    if (scrollY > 30) {
      setHalfScrolled(true)
    } else {
      setHalfScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', addClass)
    return () => {
      window.removeEventListener('scroll', addClass)
    }
  }, [])
  const icons = [<RiSearchLine />, <BsSuitHeart />, <HiOutlineShoppingCart />]
  return (
    <header
      className={`h-4  bg-white p-8 flex items-center sticky top-0 left-0 z-10 transition-all duration-500 ${
        halfScrolled && 'shadow-md'
      }`}
    >
      <nav className="flex justify-between flex-1 items-center">
        <ul role="list" className="flex gap-2">
          <img
            src="/images/logo.svg"
            className="w-8 h-8 mr-4 cursor-pointer"
            alt="logo"
          />
          {items.map((link, i) => (
            <li
              key={i}
              className="text-dark_p font-medium mx-1 cursor-pointer nav_item"
            >
              <a href="#" className="flex items-center p-1">
                <span className="mr-1">{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-4">
          {icons.map((icon, i) => (
            <li
              key={i}
              className="p-2 bg-light_p rounded-lg cursor-pointer hover:bg-dark_s group transition duration-500"
            >
              <span className="text-dark_s  group-hover:text-light_p transition duration-500">
                {icon}
              </span>
            </li>
          ))}
          <img
            src="/images/avatar.jpg"
            className="object-cover w-8 h-8 rounded-lg cursor-pointer"
            alt="avatar"
          />
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
