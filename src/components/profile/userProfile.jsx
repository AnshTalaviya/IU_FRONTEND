// import React, { useState } from "react";
// import {
//   Trash2,
//   MapPin,
//   Phone,
//   Mail,
//   ShieldCheck,
//   Plus,
//   Pencil
// } from "lucide-react";

// const initialProfile = {
//   name: "John Doe",
//   email: "anshtalaviya22@gmail.com",
//   phone: "+1234567890",
//   address: "Andheri West, Mumbai, 400053"
// };

// const savedLocations = [
//   {
//     icon: <MapPin className="text-blue-500" />, name: "Home",
//     address: "123 Palm Grove, Andheri West, Mumbai, 400053"
//   },
//   {
//     icon: <MapPin className="text-purple-500" />, name: "Office",
//     address: "Techpark One, Goregaon East, Mumbai, 400063"
//   },
//   {
//     icon: <MapPin className="text-pink-500" />, name: "Gym",
//     address: "Fitness Hub, Juhu, Mumbai, 400049"
//   }
// ];

// export default function UserProfile() {
//   const [activeTab, setActiveTab] = useState("Saved Locations");
//   const [editMode, setEditMode] = useState(false);
//   const [profile, setProfile] = useState(initialProfile);
//   const [formData, setFormData] = useState(initialProfile);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     setProfile(formData);
//     setEditMode(false);
//   };

//   const handleCancel = () => {
//     setFormData(profile);
//     setEditMode(false);
//   };

//   return (
//     <div className="mt-20 px-4 md:px-12 lg:px-20">
//       <div className="min-h-screen bg-white dark:bg-[#0F172A] text-gray-800 dark:text-white py-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Profile Card */}
//           <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
//             <div className="flex flex-col items-center">
//               <div className="relative w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-3xl font-bold text-white mb-4">
//                 JD
//                 {editMode && <Pencil className="absolute bottom-0 right-0 w-5 h-5 bg-white text-green-600 rounded-full p-1" />}
//               </div>
//               <h2 className="text-xl font-semibold mb-1">{profile.name}</h2>
//               <p className="text-sm text-gray-500 dark:text-gray-300">Member since March 2023</p>
//               <div className="flex items-center mt-2">
//                 {Array(4).fill(null).map((_, i) => (
//                   <span key={i} className="text-yellow-400">★</span>
//                 ))}
//                 <span className="ml-1 text-sm">4.0</span>
//               </div>
//             </div>
//             <div className="mt-6 space-y-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <Mail className="w-4 h-4" /> {profile.email}
//               </div>
//               <div className="flex items-center gap-2">
//                 <Phone className="w-4 h-4" /> {profile.phone}
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-4 h-4" /> {profile.address}
//               </div>
//               <div className="flex items-center gap-2">
//                 <ShieldCheck className="w-4 h-4 text-green-400" /> Verified
//               </div>
//             </div>

//             {!editMode && (
//               <button
//                 onClick={() => setEditMode(true)}
//                 className="mt-6 w-full bg-green-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-700"
//               >
//                 ✏️ Edit Profile
//               </button>
//             )}

//             {editMode && (
//               <div className="flex gap-2 mt-6">
//                 <button
//                   onClick={handleCancel}
//                   className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
//                 >
//                   ✖ Cancel
//                 </button>
//                 <button
//                   onClick={handleSave}
//                   className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
//                 >
//                   ✅ Save
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Right Side Panel */}
//           <div className="md:col-span-2">
//             {editMode ? (
//               <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl">
//                 <h3 className="text-lg font-semibold mb-6">Edit Your Profile</h3>
//                 <div className="space-y-5">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Full Name</label>
//                     <input name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Email Address</label>
//                     <input name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Phone Number</label>
//                     <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Address</label>
//                     <input name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700" />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl space-y-6">
//                 <div className="flex gap-4 border-b border-gray-300 dark:border-gray-600 pb-2">
//                   {['Saved Locations', 'Payment Methods', 'My Rides', 'Account Settings'].map(tab => (
//                     <button
//                       key={tab}
//                       onClick={() => setActiveTab(tab)}
//                       className={`px-4 py-2 rounded-t-md text-sm font-medium ${activeTab === tab ? 'bg-gray-200 dark:bg-gray-700' : 'bg-transparent'} hover:bg-gray-200 dark:hover:bg-gray-700`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                 </div>
//                 {activeTab === "Saved Locations" && (
//                   <div>
//                     <div className="flex justify-between items-center mb-4">
//                       <h3 className="text-lg font-semibold">Your Saved Locations</h3>
//                       <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md">
//                         <Plus className="w-4 h-4" /> Add Location
//                       </button>
//                     </div>
//                     {savedLocations.map((loc, i) => (
//                       <div key={i} className="flex justify-between items-center p-4 my-4 rounded-lg bg-gray-200 dark:bg-gray-700">
//                         <div>
//                           <div className="flex items-center gap-2 font-medium">{loc.icon} {loc.name}</div>
//                           <p className="text-sm text-gray-600 dark:text-gray-300 ml-6">{loc.address}</p>
//                         </div>
//                         <div className="flex items-center gap-4">
//                           <button className="text-green-600 dark:text-green-400 text-sm hover:underline">Book from here</button>
//                           <Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import {
    Trash2,
    MapPin,
    Phone,
    Mail,
    ShieldCheck,
    Plus,
    Pencil,
} from "lucide-react";
import axios from "axios";
import PaymentPage from "./payment";
import RecentRides from "./myride";

const userId = "683707c01b7fbb7f175fd159";
const API_BASE = "http://localhost:5000";

export default function UserProfile() {
    const [activeTab, setActiveTab] = useState("Saved Locations");
    const [editMode, setEditMode] = useState(false);
    const [profile, setProfile] = useState({});
    const [formData, setFormData] = useState({});
    const [savedLocations, setSavedLocations] = useState([]);
    const [newLocation, setNewLocation] = useState({ name: "", address: "" });

    // Fetch profile and locations on load
    useEffect(() => {
        const fetchProfile = async () => {
            const res = await axios.get(`${API_BASE}/api/user/profile?userId=${userId}`);
            setProfile(res.data);
            setFormData({
                name: res.data.fullName,
                email: res.data.email,
                phone: res.data.phone,
                address: res.data.address,
            });
        };

        const fetchLocations = async () => {
            const res = await axios.get(`${API_BASE}/api/user/locations?userId=${userId}`);
            setSavedLocations(res.data);
        };

        fetchProfile();
        fetchLocations();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        await axios.put(`${API_BASE}/api/user/profile`, {
            userId,
            fullName: formData.name,
            phone: formData.phone,
            address: formData.address,
        });
        setProfile({ ...profile, ...formData });
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

        await axios.post(`${API_BASE}/api/user/locations`, {
            userId,
            name: newLocation.name,
            address: newLocation.address,
        });

        const res = await axios.get(`${API_BASE}/api/user/locations?userId=${userId}`);
        setSavedLocations(res.data);
        setNewLocation({ name: "", address: "" });
    };

    const handleDeleteLocation = async (name) => {
        await axios.delete("/api/user/locations", {
            data: { userId, name },
        });

        const res = await axios.get(`${API_BASE}/api/user/locations?userId=${userId}`);
        setSavedLocations(res.data);
    };

    return (
        <div className="mt-20 px-4 md:px-12 lg:px-20">
            <div className="min-h-screen bg-white dark:bg-[#0F172A] text-gray-800 dark:text-white py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <div className="flex flex-col items-center">
                            <div className="relative w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-3xl font-bold text-white mb-4">
                                {profile.fullName?.[0] || "U"}
                                {editMode && (
                                    <Pencil className="absolute bottom-0 right-0 w-5 h-5 bg-white text-green-600 rounded-full p-1" />
                                )}
                            </div>
                            <h2 className="text-xl font-semibold mb-1">{profile.fullName}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                                Member since March 2023
                            </p>
                            <div className="flex items-center mt-2">
                                {Array(4)
                                    .fill(null)
                                    .map((_, i) => (
                                        <span key={i} className="text-yellow-400">
                                            ★
                                        </span>
                                    ))}
                                <span className="ml-1 text-sm">4.0</span>
                            </div>
                        </div>
                        <div className="mt-6 space-y-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" /> {profile.email}
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" /> {profile.phone}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> {profile.address}
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-green-400" /> Verified
                            </div>
                        </div>

                        {!editMode && (
                            <button
                                onClick={() => setEditMode(true)}
                                className="mt-6 w-full bg-green-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-700"
                            >
                                ✏️ Edit Profile
                            </button>
                        )}

                        {editMode && (
                            <div className="flex gap-2 mt-6">
                                <button
                                    onClick={handleCancel}
                                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
                                >
                                    ✖ Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                                >
                                    ✅ Save
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Side Panel */}
                    <div className="md:col-span-2">
                        {editMode ? (
                            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl">
                                <h3 className="text-lg font-semibold mb-6">Edit Your Profile</h3>
                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            name="email"
                                            disabled
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Address
                                        </label>
                                        <input
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl space-y-6">
                                <div className="flex gap-4 border-b border-gray-300 dark:border-gray-600 pb-2">
                                    {[
                                        "Saved Locations",
                                        "Payment Methods",
                                        "My Rides",
                                        "Account Settings",
                                    ].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-4 py-2 rounded-t-md text-sm font-medium ${activeTab === tab
                                                    ? "bg-gray-200 dark:bg-gray-700"
                                                    : "bg-transparent"
                                                } hover:bg-gray-200 dark:hover:bg-gray-700`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                                {activeTab === "Saved Locations" && (
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold">
                                                Your Saved Locations
                                            </h3>
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    value={newLocation.name}
                                                    onChange={(e) =>
                                                        setNewLocation((prev) => ({
                                                            ...prev,
                                                            name: e.target.value,
                                                        }))
                                                    }
                                                    className="px-2 py-1 rounded bg-white text-black"
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
                                                    className="px-2 py-1 rounded bg-white text-black"
                                                />
                                                <button
                                                    onClick={handleAddLocation}
                                                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md"
                                                >
                                                    <Plus className="w-4 h-4" /> Add
                                                </button>
                                            </div>
                                        </div>
                                        {savedLocations.map((loc, i) => (
                                            <div
                                                key={i}
                                                className="flex justify-between items-center p-4 my-4 rounded-lg bg-gray-200 dark:bg-gray-700"
                                            >
                                                <div>
                                                    <div className="flex items-center gap-2 font-medium">
                                                        <MapPin className="text-blue-500" /> {loc.name}
                                                    </div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 ml-6">
                                                        {loc.address}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <button className="text-green-600 dark:text-green-400 text-sm hover:underline">
                                                        Book from here
                                                    </button>
                                                    <Trash2
                                                        onClick={() => handleDeleteLocation(loc.name)}
                                                        className="w-4 h-4 text-red-500 cursor-pointer"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {activeTab === "Payment Methods" && (
                                    <PaymentPage />
                                )}
                                {activeTab === "My Rides" && (
                                    <RecentRides />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
