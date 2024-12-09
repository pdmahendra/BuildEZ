"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("accessToken");
    router.push("/login");
  };
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <nav className="flex-1 mt-4">
        <ul className="space-y-4 px-4">
          <li>
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
