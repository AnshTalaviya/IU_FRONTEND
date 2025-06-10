import { useState } from "react";

export default function SettingsPage() {
    const [tab, setTab] = useState("Account");

    const tabs = ["Account", "Notifications", "Privacy & Security", "Preferences"];
    const [notifications, setNotifications] = useState({
        promotions: true,
        rideUpdates: true,
        partnerOffers: false,
        news: true,
        rideSummaries: true,
        systemAlerts: true,
    });

    const toggleNotification = (key) => {
        setNotifications({ ...notifications, [key]: !notifications[key] });
    };                                                              

    return (
        <div className="min-h-screen bg-[#0f172a] text-white p-8 mt-6">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            <div className="flex gap-4 bg-[#1e293b] rounded-lg p-1 mb-6 w-full">
                {tabs.map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`flex-1 py-2 rounded-md font-medium transition-colors duration-200 ${tab === t ? "bg-[#0f172a] text-white" : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {tab === "Account" && (
                <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-2">Account Information</h2>
                    <p className="text-gray-400 mb-6">Manage your account details and personal information</p>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 rounded-md bg-[#0f172a] border border-gray-700 cursor-pointer hover:bg-[#16213a]">
                            <div>
                                <div className="font-semibold text-green-400">Personal Information</div>
                                <div className="text-gray-400 text-sm">Update your name, email, and phone number</div>
                            </div>
                            <span className="text-gray-400">›</span>
                        </div>

                        <div className="flex justify-between items-center p-4 rounded-md bg-[#0f172a] border border-gray-700 cursor-pointer hover:bg-[#16213a]">
                            <div>
                                <div className="font-semibold text-green-400">Password & Security</div>
                                <div className="text-gray-400 text-sm">Change your password and set up two-factor authentication</div>
                            </div>
                            <span className="text-gray-400">›</span>
                        </div>

                        <div className="flex justify-between items-center p-4 rounded-md bg-[#0f172a] border border-gray-700 cursor-pointer hover:bg-[#16213a]">
                            <div>
                                <div className="font-semibold text-green-400">Payment Methods</div>
                                <div className="text-gray-400 text-sm">Add or remove payment options</div>
                            </div>
                            <span className="text-gray-400">›</span>
                        </div>

                        <button className="w-full flex items-center gap-2 text-sm text-white border border-gray-600 px-4 py-2 rounded-md mt-4 hover:bg-gray-700">
                            <span className="text-xl">❓</span>
                            Get help with account issues
                        </button>
                    </div>
                </div>
            )}

            {tab === "Notifications" && (
                <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Notification Settings</h2>
                    <p className="text-gray-400 mb-6">Control which notifications you receive</p>
                    <div className="space-y-4">
                        {[
                            {
                                key: "promotions",
                                label: "Promotions & Offers",
                                description: "Receive special deals and discounts",
                            },
                            {
                                key: "rideUpdates",
                                label: "Ride Updates",
                                description: "Notifications about your rides",
                            },
                            {
                                key: "partnerOffers",
                                label: "Partner Offers",
                                description: "Receive offers from our partners",
                            },
                            {
                                key: "news",
                                label: "News & Features",
                                description: "Updates about new services",
                            },
                            {
                                key: "rideSummaries",
                                label: "Ride Summaries",
                                description: "Get summaries after each ride",
                            },
                            {
                                key: "systemAlerts",
                                label: "System Alerts",
                                description: "Important system notifications",
                            },
                        ].map(({ key, label, description }) => (
                            <div key={key} className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold text-white">{label}</div>
                                    <div className="text-gray-400 text-sm">{description}</div>
                                </div>
                                <button
                                    onClick={() => toggleNotification(key)}
                                    className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${notifications[key] ? "bg-green-500" : "bg-gray-600"
                                        }`}
                                >
                                    <div
                                        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${notifications[key] ? "translate-x-6" : "translate-x-0"
                                            }`}
                                    ></div>
                                </button>
                            </div>
                        ))}
                    </div>

                    <button className="mt-6 w-full border border-gray-700 py-2 rounded-md text-white hover:bg-gray-700">
                        Enable all notifications
                    </button>
                </div>
            )}

            {tab === "Privacy & Security" && (
                <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-2 text-white">Privacy & Security</h2>
                    <p className="text-gray-400 mb-6">Manage your privacy settings and data preferences</p>

                    {[
                        {
                            key: "locationSharing",
                            label: "Location Sharing",
                            description: "Share your location while using the app",
                            enabled: true,
                        },
                        {
                            key: "dataCollection",
                            label: "Data Collection",
                            description: "Allow us to collect usage data to improve services",
                            enabled: true,
                        },
                        {
                            key: "thirdPartySharing",
                            label: "Third-Party Sharing",
                            description: "Share your data with partners for better offers",
                            enabled: false,
                        },
                        {
                            key: "personalization",
                            label: "Personalization",
                            description: "Customize your experience based on usage",
                            enabled: true,
                        },
                    ].map(({ key, label, description, enabled }) => (
                        <div key={key} className="flex justify-between items-center mb-4">
                            <div>
                                <div className="font-semibold text-white">{label}</div>
                                <div className="text-gray-400 text-sm">{description}</div>
                            </div>
                            <div
                                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${enabled ? "bg-green-500" : "bg-gray-700"
                                    }`}
                            >
                                <div
                                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-0"
                                        }`}
                                ></div>
                            </div>
                        </div>
                    ))}

                    <button className="w-full border border-gray-700 py-2 rounded-md text-white mt-6 hover:bg-gray-700">
                        Download my data
                    </button>

                    <button className="w-full bg-red-700 text-white py-2 mt-4 rounded-md hover:bg-red-800">
                        Delete my account
                    </button>
                </div>
            )}

            {tab === "Preferences" && (
                <div className="bg-[#0f172a] p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-2">App Preferences</h2>
                    <p className="text-gray-400 mb-6">Customize your GreenGlide experience</p>

                    {/* App Theme */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">
                                <i className="fas fa-moon"></i>
                            </span>
                            <div>
                                <div className="text-white font-medium">App Theme</div>
                                <div className="text-gray-400 text-sm">Dark mode is currently active</div>
                            </div>
                        </div>
                        <div className="w-12 h-6 flex items-center rounded-full p-1 bg-green-500">
                            <div className="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-6 transition-transform duration-300"></div>
                        </div>
                    </div>

                    {/* App Language */}
                    <div className="mb-6">
                        <div className="flex items-start gap-2 mb-3">
                            <span className="text-green-500 mt-1">
                                <i className="fas fa-globe"></i>
                            </span>
                            <div>
                                <div className="text-white font-medium">App Language</div>
                                <div className="text-gray-400 text-sm">Choose your preferred language</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { code: "US", label: "English", active: true },
                                { code: "IN", label: "Hindi" },
                                { code: "ES", label: "Español" },
                                { code: "FR", label: "Français" },
                                { code: "DE", label: "Deutsch" },
                            ].map(({ code, label, active }) => (
                                <div
                                    key={code}
                                    className={`flex items-center justify-center px-4 py-2 rounded-md font-medium text-sm ${active
                                            ? "bg-green-500 text-black"
                                            : "border border-gray-700 text-white hover:bg-gray-800"
                                        }`}
                                >
                                    <span className="mr-2 text-xs font-bold">{code}</span>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Notifications */}
                    <div className="flex justify-between items-center mt-6">
                        <div className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">
                                <i className="fas fa-desktop"></i>
                            </span>
                            <div>
                                <div className="text-white font-medium">Enable Desktop Notifications</div>
                                <div className="text-gray-400 text-sm">Get notifications when you're using a browser</div>
                            </div>
                        </div>
                        <div className="w-12 h-6 flex items-center rounded-full p-1 bg-gray-700">
                            <div className="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-0 transition-transform duration-300"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
