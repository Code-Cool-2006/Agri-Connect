import { useEffect, useState } from "react";
import { supabase } from "../Services/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        navigate("/login"); // redirect if not logged in
      } else {
        setUser(data.user);
      }
    };

    getUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const profile = user?.user_metadata;

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-green-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Agri Platform</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">
          Welcome, {profile?.role === "farmer" ? "Farmer" : "Buyer"} 👋
        </h2>
        <p className="mb-6 text-gray-600">Email: {user.email}</p>

        {/* Role-specific sections */}
        {profile?.role === "farmer" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Farmer cards */}
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="font-bold text-lg">📦 Upload Crop</h3>
              <p className="text-gray-500 mt-2">
                List your crops with details and price.
              </p>
              <button
                onClick={() => navigate("/marketplace")}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Go to Marketplace
              </button>
            </div>

            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="font-bold text-lg">🚜 Rent Equipment</h3>
              <p className="text-gray-500 mt-2">
                Share or rent farming equipment.
              </p>
              <button
                onClick={() => navigate("/equipment")}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Equipment Section
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Buyer cards */}
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="font-bold text-lg">🛒 Browse Crops</h3>
              <p className="text-gray-500 mt-2">
                View crops and buy directly from farmers.
              </p>
              <button
                onClick={() => navigate("/marketplace")}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Explore Marketplace
              </button>
            </div>

            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="font-bold text-lg">🌦 Weather Advisory</h3>
              <p className="text-gray-500 mt-2">
                Check weather conditions in farming regions.
              </p>
              <button
                onClick={() => navigate("/weather")}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Weather Updates
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
