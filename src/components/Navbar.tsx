import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
} from "@heroicons/react/16/solid";

const menuItems = [
  {
    title: "Why Priority Dispatch",
    href: "/",
    active: false,
  },
  {
    title: "Solutions",
    href: "/#",
    active: false,
  },
  {
    title: "Company",
    href: "/#",
    active: false,
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50">
      {/* top dark banner  */}
      <div className="h-12 bg-pdBlue p-4 font-semibold text-gray-50">
        <div className="flex h-full items-center justify-between">
          <div className="flex h-full items-center whitespace-nowrap">
            <MagnifyingGlassIcon className="size-[24px]" />
          </div>
          <div className="flex h-full items-center">
            <a href="/" className="hidden text-pdYellow lg:block">
              Register for a Course
            </a>
            <a
              href="/"
              className="hidden mx-6 rounded-full border-[5px] border-solid border-pdRed px-10 sm:block"
            >
              Request a Demo
            </a>
            <a href="/" className="hidden md:flex text-white items-center">
              Quick Links <ChevronDownIcon className="size-[24px]" />
            </a>
            <a href="/" className="md:hidden">
              <Squares2X2Icon className="size-[16px]" />
            </a>
          </div>
        </div>
      </div>
      {/* bottom light banner  */}
      <div className="h-20 bg-pdLightBlue p-4 font-bold text-pdBlue">
        <div className="flex h-full items-center justify-between">
          <div className="text-[27px] font-extrabold">Priority Dispatch</div>
          <div className="hidden md:flex h-full items-center">
            {menuItems.map((item) => {
              return (
                <button
                  className={`${
                    item.active ? "" : ""
                  }  h-full items-center px-3 md:flex text-lg`}
                  key={item.title}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <Bars3Icon className="md:hidden size-[24px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
