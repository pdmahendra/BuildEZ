import Sidebar from "../../components/dashboard/Sidebar";
// import Header from "../../components/dashboard/Header";
// import SalesChardt from "../../components/dashboard/SalesChart";
import Layout from "../newLayout";
const Dashboard = () => {
  return (
    <Layout>
      <div className="flex min-h-screen">
        <div className="flex-1 flex flex-col">
          {/* <Header /> */}
          <div className="p-6">
            <h3 className="text-3xl font-bold mb-6">
              Welcome to the Admin Dashboard!
            </h3>

            {/* Stats Cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold">Total Sales</h4>
              <p className="text-2xl font-bold mt-2">$24,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold">New Users</h4>
              <p className="text-2xl font-bold mt-2">1,200</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold">Products Sold</h4>
              <p className="text-2xl font-bold mt-2">450</p>
            </div>
          </div> */}

            {/* Charts Section */}
            {/* <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h4 className="text-xl font-semibold mb-4">Sales Overview</h4> */}
            {/* <SalesChart /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
