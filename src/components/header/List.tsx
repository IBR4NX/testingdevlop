import { Link } from "react-router-dom";
 const navigation = [
  { name: "Home", href: "/" },
  { name: "Search", href: "/search" },
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "services" },
  { name: "Support", href: "/test" },
//   { name: "Help", href: "#" }, 
];
function List() {
  return (
    <>
        <ul className="  flex flex-col gap-4 -mr-4 m-px -ml-1 border-gray-950/10   dark:border-white/25 ">
          {navigation.map((item) => (
            <li key={item.name} className=" -ml-0.5   hover:border-l">
              <Link to={item.href} 
              className={`
               hover:transform-cpu  hover:pl-4 block w-full py-1 px-3  rounded-r-full transition-[padding] duration-200 ease-in-out rounded-4xlxl text-base/6 font-semibold `}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
    </>
  );
}

export default List;
