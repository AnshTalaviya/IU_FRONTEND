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
        <div className="min-h-screen bg-[#0f172a] text-white p-4 md:p-8 mt-4 md:mt-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Settings</h1>

            <div className="flex flex-wrap gap-2 bg-[#1e293b] rounded-lg p-1 mb-6 w-full overflow-x-auto">
                {tabs.map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`flex-1 min-w-[150px] py-2 px-4 rounded-md font-medium transition-colors duration-200 whitespace-nowrap ${tab === t
                            ? "bg-[#0f172a] text-white"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Account Tab */}
            {tab === "Account" && (
                <div className="bg-[#1e293b] p-4 md:p-6 rounded-lg shadow-lg space-y-4">
                    <h2 className="text-xl md:text-2xl font-semibold">Account Information</h2>
                    <p className="text-gray-400 mb-4">Manage your account details and personal information</p>

                    {/* Responsive Grid for Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                title: "Personal Information",
                                description: "Update your name, email, and phone number",
                            },
                            {
                                title: "Password & Security",
                                description: "Change your password and set up two-factor authentication",
                            },
                            {
                                title: "Payment Methods",
                                description: "Add or remove payment options",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center p-4 rounded-md bg-[#0f172a] border border-gray-700 cursor-pointer hover:bg-[#16213a]"
                            >
                                <div>
                                    <div className="font-semibold text-green-400">{item.title}</div>
                                    <div className="text-gray-400 text-sm">{item.description}</div>
                                </div>
                                <span className="text-gray-400">›</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full flex items-center gap-2 text-sm text-white border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-700 mt-2">
                        <span className="text-xl">❓</span>
                        Get help with account issues
                    </button>
                </div>
            )}


            {/* Notifications Tab */}
            {tab === "Notifications" && (
                <div className="bg-[#1e293b] p-4 md:p-6 rounded-lg shadow-lg space-y-4">
                    <h2 className="text-xl md:text-2xl font-semibold">Notification Settings</h2>
                    <p className="text-gray-400">Control which notifications you receive</p>

                    {Object.entries(notifications).map(([key, value]) => {
                        const labels = {
                            promotions: "Promotions & Offers",
                            rideUpdates: "Ride Updates",
                            partnerOffers: "Partner Offers",
                            news: "News & Features",
                            rideSummaries: "Ride Summaries",
                            systemAlerts: "System Alerts",
                        };
                        const descriptions = {
                            promotions: "Receive special deals and discounts",
                            rideUpdates: "Notifications about your rides",
                            partnerOffers: "Receive offers from our partners",
                            news: "Updates about new services",
                            rideSummaries: "Get summaries after each ride",
                            systemAlerts: "Important system notifications",
                        };
                        return (
                            <div key={key} className="flex justify-between items-center flex-wrap gap-2">
                                <div>
                                    <div className="font-semibold text-white">{labels[key]}</div>
                                    <div className="text-gray-400 text-sm">{descriptions[key]}</div>
                                </div>
                                <button
                                    onClick={() => toggleNotification(key)}
                                    className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${value ? "bg-green-500" : "bg-gray-600"
                                        }`}
                                >
                                    <span
                                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${value ? "translate-x-2.5" : "translate-x-0"
                                            }`}
                                    />
                                </button>
                            </div>
                        );
                    })}

                    <button className="mt-4 w-full border border-gray-700 py-2 rounded-md text-white hover:bg-gray-700">
                        Enable all notifications
                    </button>
                </div>
            )}

            {/* Privacy & Security Tab */}
            {tab === "Privacy & Security" && (
                <div className="bg-[#1e293b] p-4 md:p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">Privacy & Security</h2>
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
                        <div key={key} className="flex justify-between items-center mb-4 flex-wrap gap-2">
                            <div>
                                <div className="font-semibold text-white">{label}</div>
                                <div className="text-gray-400 text-sm">{description}</div>
                            </div>
                            <div
                                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${enabled ? "bg-green-500" : "bg-gray-700"
                                    }`}
                            >
                                <span
                                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${enabled ? "translate-x-2.5" : "translate-x-0"
                                        }`}
                                />
                            </div>
                        </div>
                    ))}

                    <button className="w-full border border-gray-700 py-2 rounded-md text-white mt-4 hover:bg-gray-700">
                        Download my data
                    </button>

                    <button className="w-full bg-red-700 text-white py-2 mt-4 rounded-md hover:bg-red-800">
                        Delete my account
                    </button>
                </div>
            )}

            {/* Preferences Tab */}
            {tab === "Preferences" && (
                <div className="bg-[#0f172a] p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-2">App Preferences</h2>
                    <p className="text-gray-400 mb-6">Customize your Idhar Udhar experience</p>

                    {/* Preferences Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* App Theme */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-[#1e293b] p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                                <span className="text-green-500 mt-1">
                                    <i className="fas fa-moon"></i>
                                </span>
                                <div>
                                    <div className="text-white font-medium">App Theme</div>
                                    <div className="text-gray-400 text-sm">Dark mode is currently active</div>
                                </div>
                            </div>
                            <div className="relative inline-flex items-center h-5 rounded-full w-11 px-1 transition-colors duration-300 bg-green-500">
                                <span className="inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 translate-x-2.5" />
                            </div>
                        </div>

                        {/* Desktop Notifications */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-[#1e293b] p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                                <span className="text-green-500 mt-1">
                                    <i className="fas fa-desktop"></i>
                                </span>
                                <div>
                                    <div className="text-white font-medium">Desktop Notifications</div>
                                    <div className="text-gray-400 text-sm">Get notifications when you're using a browser</div>
                                </div>
                            </div>
                            <div className="w-12 h-6 flex items-center rounded-full p-1 bg-gray-700">
                                <div className="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-0 transition-transform duration-300"></div>
                            </div>
                        </div>

                        {/* App Language - full width even in 2-cols */}
                        <div className="md:col-span-2 bg-[#1e293b] p-4 rounded-lg">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-green-500 mt-1">
                                    <i className="fas fa-globe"></i>
                                </span>
                                <div>
                                    <div className="text-white font-medium">App Language</div>
                                    <div className="text-gray-400 text-sm">Choose your preferred language</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
                    </div>
                </div>
            )}

        </div>
    );
}
