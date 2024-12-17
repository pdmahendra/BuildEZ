"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = ({ setIsOpen }) => {
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("accessToken");
    localStorage.removeItem('user');
    router.push("/login");
  };

  const handleSidebar = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="md:w-64 bg-gray-800 text-white flex flex-col">
      <nav className="flex-1 mt-4">
        <button
          className="md:hidden text-2xl text-white focus:outline-none absolute right-3"
          onClick={handleSidebar}
        >
          ☰
        </button>
        <ul className="space-y-4 px-4 max-md:py-8">
          <li className="">
            <Link
              href="/dashboard/products"
              className="text-lg hover:text-gray-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/categories"
              className="text-lg hover:text-gray-300"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/contacts"
              className="text-lg hover:text-gray-300"
            >
              View Messages
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-lg hover:text-gray-300"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer or Additional Section */}
      {/* <div className="p-4 border-t border-gray-700 text-center text-gray-400">
        © 2024 BuilEz
      </div> */}
    </div>
  );
};

export default Sidebar;
