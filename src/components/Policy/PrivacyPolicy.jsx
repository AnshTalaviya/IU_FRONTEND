import React from "react";
import { ShieldCheck, Lock, EyeOff, ClipboardList, Mail, Phone, AlertCircle, Cookie, Link, UserX } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-800 text-white py-12 mt-10 px-4 sm:px-6 min-h-screen font-sans">
            {/* Header Section */}
            <section className="max-w-6xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Privacy <span className="text-white">Policy</span>
                </h1>
            </section>

            {/* Policy Content */}
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Introduction */}
                <div className="p-6">
                    <div className="flex items-start mb-3">
                       
                        <h2 className="text-xl font-bold text-white">Introduction</h2>
                    </div>
                    <div className="text-white space-y-3">
                        <p>
                            This privacy policy sets out how Idhar Udhar uses and protects any information that you give Idhar Udhar when you use this website/mobile application for Customers and Driver Partners. This Privacy Policy is an electronic record between you and Idhar Udhar under the Information Technology Act, 2000 together with the Rules framed from time to time.
                        </p>
                        <p>
                            Your privacy matters to SmartShift Logistics Solutions Private Limited (the "Company", "we", "Idhar Udhar", or "us"). By using the Idhar Udhar Apps and the Services, you agree to this Policy.
                        </p>
                        <p>
                            This Privacy Policy ("Policy") describes the policies and procedures on the collection, use, disclosure and protection of your information when you use our website located at https://idharudhar.in/, or the Idhar Udhar mobile applications (collectively, "Idhar Udhar Apps").
                        </p>
                       <p>
                        The terms “you” and “your” refer to the user of the Idhar Udhar Apps. The term “Services” refers to any services offered by Idhar Udhar whether on the Idhar Udhar Apps or otherwise. This Policy is a part of and incorporated within, and is to be read along with, the applicable Terms of Service and the Driver Partner Terms and Conditions based on the user of Idhar Udhar.
                       </p>
                       <p>
                        Idhar Udhar is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
                       </p>
                       <p>
                        By using the Idhar Udhar Apps and the Services, you agree and consent to the collection, transfer, use, storage, disclosure and sharing of your information as described and collected by us in accordance with this Policy. If you do not agree with the Policy, please do not use or access the Idhar Udhar Apps.
                       </p>
                       <p>
                        Idhar Udhar may change this policy from time to time by updating this page. The current version of this policy is effective from 9th March, 2023. You should check this page from time to time to ensure that you are happy with any changes. The first version of this policy was effective from 23rd February 2014. The second version was effective from 11th November, 2022.
                       </p>
                        
                    </div>
                </div>

                {/* Information We Collect  rounded-lg shadow*/}
                <div className="p-6 ">
                    <div className="flex items-start mb-3">
                        {/* <ClipboardList className="text-white mr-3 mt-1 flex-shrink-0" size={20} /> */}
                        <h2 className="text-xl font-bold text-white">What We Collect</h2>
                    </div>
                    <div className="text-white space-y-3">
                        <p>We may collect the following information:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Name and job title</li>
                            <li>Contact information including email address</li>
                            <li>Demographic information such as postcode, address, mobile number, login name, preferences and interests</li>
                            <li>Information for using our Services such as phone number, address, email, billing information, invoices, etc.</li>
                            <li>Other information relevant to customer surveys and/or offers</li>
                            <li>App install, uninstall, and other installed apps information</li>
                            <li>For Driver Partners: location details, profile picture, KYC documents, vehicle documents (insurance, pollution certificate, registration certificate, etc.), bank account details, and call/SMS details</li>
                            <li>Background check and identity verification (driver history, criminal record, right to work)</li>
                            <li>Referral program participation may require access to your contact list (with consent)</li>
                        </ul>
                        <p>
                            You may request to review the information you have provided, and Idhar Udhar shall ensure that any personal or sensitive data found to be inaccurate or deficient shall be corrected or amended. We shall not retain sensitive personal data longer than required.
                        </p>
                    </div>
                </div>

                {/* How We Use Information */}
                <div className="p-6 ">
                    <div className="flex items-start mb-3">
                        {/* <Lock className="text-white mr-3 mt-1 flex-shrink-0" size={20} /> */}
                        <h2 className="text-xl font-bold text-white">WHAT WE DO WITH THE INFORMATION WE GATHER</h2>
                    </div>
                    <div className="text-white space-y-3">
                        <p>We use the information:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>For internal record keeping</li>
                            <li>To improve our Services</li>
                            <li>To enable usage and transactions on the Idhar Udhar Apps</li>
                            <li>To process payments</li>
                            <li>To respond to queries or customer support</li>
                            <li>To send important updates</li>
                            <li>For order tracking, processing, and delivery</li>
                            <li>For any other purpose with your consent</li>
                        </ul>
                        <p>
                            We may periodically send promotional messages using contact details you provide. You may opt out anytime by contacting us at 4410 4410 (add your city code).
                        </p>
                    </div>
                </div>

                {/* Security */}
                <div className="p-6">
                    <div className="flex items-start mb-3">
                        {/* <ShieldCheck className="text-white mr-3 mt-1 flex-shrink-0" size={20} /> */}
                        <h2 className="text-xl font-bold text-white">Security</h2>
                    </div>
                    <div className="text-white">
                        <p>
                            We follow suitable security practices and procedures (as per IT RSP Rules) to safeguard your information. You must keep your account data confidential.
                        </p>
                    </div>
                </div>

                {/* Disclosure */}
                <div className="p-6 ">
                    <div className="flex items-start mb-3">
                        {/* <EyeOff className="text-blackgreen-600 mr-3 mt-1 flex-shrink-0" size={20} /> */}
                        <h2 className="text-xl font-bold textwhite">Disclosure</h2>
                    </div>
                    <div className="text-white space-y-3">
                        <p>We may disclose certain personally identifiable information to third-party services:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Name, email, mobile number, language</li>
                            <li>Device, location, and network carrier info</li>
                            <li>Driver location (collected throughout trip for customer support and tracking)</li>
                        </ul>
                        <p>Shared information may be used for:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>App personalization</li>
                            <li>Behavioural analytics</li>
                            <li>Vendor/consultant/partner integrations</li>
                            <li>Academic research</li>
                            <li>Displaying driver info (name, phone, picture) to customers</li>
                            <li>Legal compliance, fraud detection, and law enforcement purposes</li>
                        </ul>
                    </div>
                </div>

                {/* Deletion of Personal Information */}
                <div className=" p-6">
                    <div className="flex items-start mb-3">
                        {/* <UserX className="text-white mr-3 mt-1 flex-shrink-0" size={20} /> */}
                        <h2 className="text-xl font-bold text-white">Deletion of Personal Information</h2>
                    </div>
                    <div className="text-white space-y-3">
                        <p>
                            Upon your deletion of the Idhar Udhar App or upon request, we will delete your personal data unless retention is required for legal, fraud, or business continuity purposes. Certain geo-location or transaction data may be retained.
                        </p>
                        <p>
                            <span className="font-semibold">Send deletion requests to:</span> itgo@idharudhar.in
                        </p>
                    </div>
                </div>

                {/* Prohibited Activities */}
                <div className="p-6">
                    <div className="flex items-start mb-3">
                        {/* <AlertCircle className="text-white mr-3 mt-1 flex-shrink-0" size={20} /> */}
                        <h2 className="text-xl font-bold text-white">Prohibited Activities</h2>
                    </div>
                    <div className="text-white space-y-3">
                        <p>Under IT Rules 2021, you are prohibited from uploading or sharing any content that:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Belongs to another without rights</li>
                            <li>Is obscene, defamatory, paedophilic, pornographic</li>
                            <li>Infringes IP rights</li>
                            <li>Promotes hate, terrorism, or violates Indian laws</li>
                            <li>Misleads or impersonates</li>
                            <li>Spreads malware or viruses</li>
                        </ul>
                        <p>
                            Non-compliance may lead to access termination and/or content removal.
                        </p>
                    </div>
                </div>

                {/* Withdrawal of Consent */}
                <div className="p-6">
                    <div className="flex items-start mb-3">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white mr-3 mt-1 flex-shrink-0"
                        >
                            <path d="M3 10h10a4 4 0 0 1 4 4v1"></path>
                            <path d="m7 14-4-4 4-4"></path>
                        </svg> */}
                        <h2 className="text-xl font-bold text-white">Withdrawal or Non-Provision of Data</h2>
                    </div>
                    <div className="text-white">
                        <p>
                            You may choose not to provide data or withdraw previously given consent by contacting us in writing. However, this may limit the Services Idhar Udhar can offer.
                        </p>
                    </div>
                </div>

                {/* Cookies */}
                <div className="p-6">
                    <div className="flex items-start mb-3">
                        {/* <Cookie className="text-white mr-3 mt-1 flex-shrink-0" size={20} /> */}
                        <h2 className="text-xl font-bold text-white">How We Use Cookies</h2>
                    </div>
                    <div className="text-white">
                        <p>
                            Cookies help us understand user preferences and improve functionality. You may accept or decline cookies via browser settings. Disabling cookies may limit access to some features.
                        </p>
                    </div>
                </div>

                {/* External Links */}
                <div className=" p-6 ">
                    <div className="flex items-start mb-3">
                        {/* <Link className="text-white mr-3 mt-1 flex-shrink-0" size={20} /> */}
                        <h2 className="text-xl font-bold text-white">Links to Other Websites</h2>
                    </div>
                    <div className="text-white">
                        <p>
                            Links to external websites are not governed by this Privacy Policy. We recommend reviewing the privacy policies of those websites separately.
                        </p>
                    </div>
                </div>

                {/* Third Party Disclosure */}
                <div className="p-6">
                    <div className="flex items-start mb-3">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white mr-3 mt-1 flex-shrink-0"
                        >
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg> */}
                        <h2 className="text-xl font-bold text-white">Disclosure to Third Parties</h2>
                    </div>
                    <div className="text-white">
                        <p>
                            We do not share your personal information with third parties without consent, except where required by law. We may send promotional messages from trusted third-party brands with your consent.
                        </p>
                    </div>
                </div>

                {/* Access Rights */}
                <div className="p-6">
                    <div className="flex items-start mb-3">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white mr-3 mt-1 flex-shrink-0"
                        >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            <line x1="9" y1="10" x2="15" y2="10"></line>
                            <line x1="12" y1="7" x2="12" y2="13"></line>
                        </svg> */}
                        <h2 className="text-xl font-bold text-white">Access to Your Information</h2>
                    </div>
                    <div className="text-whitw">
                        <p>
                            You may request a copy of your personal information under applicable IT Rules. If you find any incorrect or incomplete information, please contact us for correction.
                        </p>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-4 text-white">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                        <div className="flex items-start">
                            {/* <Mail className="text-white mr-3 mt-1 flex-shrink-0" size={18} /> */}
                            <div>
                                <h3 className="font-semibold mb-1">General Inquiries</h3>
                                <p>info@idharudhar.in</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            {/* <Phone className="text-white mr-3 mt-1 flex-shrink-0" size={18} /> */}
                            <div>
                                <h3 className="font-semibold mb-1">Customer Support</h3>
                                <p>help@idharudhar.in</p>
                            </div>
                        </div>
                        <div className="md:col-span-2  p-4 rounded">
                            <h3 className="font-semibold mb-2">Grievance Officer</h3>
                            <p>Abc Abc</p>
                            <p>SwiftSend Innovation Private Limited</p>
                            <p>No. XXXX, XXth Floor, XXXX. XXXX. XXXX</p>
                            <p>xxxxx, XXXX, XXX</p>
                            <p>Gujarat 382330, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;