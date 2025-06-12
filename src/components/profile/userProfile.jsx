import React, { useEffect, useState } from "react";
import {
  Trash2,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Plus,
  Pencil,
  X,
  Check,
} from "lucide-react";
import PaymentPage from "./payment";
import RecentRides from "./myride";

export default function UserProfile() {
  const [userId, setUserId] = useState(null);
  const [activeTab, setActiveTab] = useState("Saved Locations");
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({});
  const [formData, setFormData] = useState({});
  const [savedLocations, setSavedLocations] = useState([]);
  const [newLocation, setNewLocation] = useState({ name: "", address: "" });

  useEffect(() => {
    const user =
      JSON.parse(localStorage.getItem("user")) || {
        id: "12345",
        fullName: "John Doe",
        email: "john.doe@example.com",
      };
    if (user?.id) {
      setUserId(user.id);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      const res = {
        data: {
          fullName: "Harshil Patel",
          email: "harshil@example.com",
          phone: "123-456-7890",
          address: "123 Green Valley, Ahmedabad",
        },
      };
      setProfile(res.data);
      setFormData({
        name: res.data.fullName,
        email: res.data.email,
        phone: res.data.phone,
        address: res.data.address,
      });
    };

    const fetchLocations = async () => {
      const res = {
        data: [
          { name: "Home", address: "456 Park Avenue, Metropolis" },
          { name: "Work", address: "789 Central Business District, Gotham" },
        ],
      };
      setSavedLocations(res.data);
    };

    fetchProfile();
    fetchLocations();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setProfile({ ...profile, ...formData, fullName: formData.name });
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData({
      name: profile.fullName,
      email: profile.email,
      phone: profile.phone,
      address: profile.address,
    });
    setEditMode(false);
  };

  const handleAddLocation = async () => {
    if (!newLocation.name || !newLocation.address) return;
    setSavedLocations((prev) => [...prev, newLocation]);
    setNewLocation({ name: "", address: "" });
  };

  const handleDeleteLocation = async (name) => {
    setSavedLocations((prev) => prev.filter((loc) => loc.name !== name));
  };

  return (
    <div className="pt-24 px-4 md:px-10 lg:px-20 xl:px-32">
      <div className="min-h-screen bg-white dark:bg-[#0F172A] text-gray-800 dark:text-white py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Profile Card */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md w-full lg:max-w-sm self-start">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-3xl font-bold text-white mb-4">
                {(profile.fullName?.[0] || "").toUpperCase()}
                {editMode && (
                  <Pencil className="absolute bottom-0 right-0 w-5 h-5 bg-white text-green-600 rounded-full p-1" />
                )}
              </div>
              <h2 className="text-xl font-semibold">{profile.fullName}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Member since March 2023
              </p>
              <div className="flex items-center justify-center mt-2">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                <span className="ml-1 text-sm">4.0</span>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-left">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> {profile.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> {profile.phone}
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" /> {profile.address}
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Verified
              </div>
            </div>

            {!editMode ? (
              <button
                onClick={() => setEditMode(true)}
                className="mt-6 w-full bg-green-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition"
              >
                <Pencil className="w-4 h-4" /> Edit Profile
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2 mt-6">
                <button
                  onClick={handleCancel}
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" /> Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" /> Save
                </button>
              </div>
            )}
          </div>

          {/* Right: Tabs + Content */}
          <div className="flex-1">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 md:p-6">
              {!editMode ? (
                <>
                  <div className="flex flex-wrap border-b border-gray-300 dark:border-gray-700 mb-4 gap-2">
                    {["Saved Locations", "Payment Methods", "My Rides"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                          activeTab === tab
                            ? "bg-gray-200 dark:bg-gray-700"
                            : "hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Saved Locations */}
                  {activeTab === "Saved Locations" && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="text"
                          placeholder="Location Name"
                          value={newLocation.name}
                          onChange={(e) =>
                            setNewLocation((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          className="flex-1 px-3 py-2 rounded-md bg-white dark:bg-gray-600 text-black dark:text-white"
                        />
                        <input
                          type="text"
                          placeholder="Address"
                          value={newLocation.address}
                          onChange={(e) =>
                            setNewLocation((prev) => ({
                              ...prev,
                              address: e.target.value,
                            }))
                          }
                          className="flex-1 px-3 py-2 rounded-md bg-white dark:bg-gray-600 text-black dark:text-white"
                        />
                        <button
                          onClick={handleAddLocation}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
                        >
                          <Plus className="w-4 h-4" /> Add
                        </button>
                      </div>

                      {savedLocations.map((loc, i) => (
                        <div
                          key={i}
                          className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-200 dark:bg-gray-700 p-4 rounded-md"
                        >
                          <div>
                            <div className="flex items-center gap-2 font-medium">
                              <MapPin className="text-blue-500 w-5 h-5" />{" "}
                              {loc.name}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 ml-7 mt-1 md:ml-0">
                              {loc.address}
                            </p>
                          </div>
                          <div className="flex gap-3 mt-3 md:mt-0">
                            <button className="text-green-600 text-sm font-medium hover:underline">
                              Book from here
                            </button>
                            <Trash2
                              onClick={() => handleDeleteLocation(loc.name)}
                              className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-700"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Payment Methods */}
                  {activeTab === "Payment Methods" && <PaymentPage />}
                  {/* My Rides */}
                  {activeTab === "My Rides" && <RecentRides />}
                </>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Edit Your Profile</h3>
                  {["name", "phone", "address"].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium capitalize mb-1">
                        {field === "name" ? "Full Name" : field}
                      </label>
                      <input
                        name={field}
                        value={formData[field] || ""}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email || ""}
                      disabled
                      className="w-full px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
