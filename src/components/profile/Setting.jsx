import { useState } from "react";

export default function SettingsPage() {
    const [tab, setTab] = useState("Account");

    const tabs = ["Account", "Notifications", "Privacy & Security"];
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
        <div className="min-h-screen text-white p-4 md:p-8 mt-4 md:mt-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Settings</h1>

            <div className="flex flex-wrap gap-2 bg-[#1e293b] rounded-lg p-1 mb-6 w-full overflow-x-auto">
                {tabs.map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`flex-1 min-w-[150px] py-2 px-4 rounded-md font-medium transition-colors duration-200 whitespace-nowrap ${tab === t
                            ? "bg-orange-600 text-white"
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
                                    <div className="font-semibold text-orange-400">{item.title}</div>
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
                            rideUpdates: "Trip Updates",
                            partnerOffers: "Partner Offers",
                            news: "News & Features",
                            rideSummaries: "Trip Summaries",
                            systemAlerts: "System Alerts",
                        };
                        const descriptions = {
                            promotions: "Receive special deals and discounts",
                            rideUpdates: "Notifications about your trips",
                            partnerOffers: "Receive offers from our partners",
                            news: "Updates about new services",
                            rideSummaries: "Get summaries after each trip",
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
                                    className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${value ? "bg-orange-500" : "bg-gray-600"
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
                                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${enabled ? "bg-orange-500" : "bg-gray-700"
                                    }`}
                            >
                                <span
                                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${enabled ? "translate-x-2.5" : "translate-x-0"
                                        }`}
                                />
                            </div>
                        </div>
                    ))}

                </div>
            )}


        </div>
    );
}
