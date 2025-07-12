import React from 'react';

const ServicesAgreement = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="p-6 text-center border-b border-gray-700">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">SERVICES AGREEMENT</h1>
          <p className="text-gray-300">
            THIS SERVICES AGREEMENT ("Agreement") is made and executed on the "Execution Date" and commencing on the "Effective Date".
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-8">
          {/* Parties Section */}
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">First Party</h3>
                <p className="font-semibold">SwiftSend Innovation Private Limited</p>
                <div className="mt-2">
                  <p className="font-medium">Registered Office:</p>
                  <p className="text-gray-300">No. A - 501, A – 502, B – 504, B – 505 and B - 506, Fifth Floor at Universal Business Park, Chandivali Farm Road, Off. Saki Vihar Road, Andheri (East), Mumbai - 400 072, Maharashtra</p>
                </div>
                <div className="mt-2">
                  <p className="font-medium">Corporate Office:</p>
                  <p className="text-gray-300">BCM Prime, 1st cross, BDA Layout, Guruppanan Palya, Tavarekere extension, Bannerghatta Road, Bangalore 560 041, Karnataka</p>
                </div>
                <p className="mt-2 text-gray-400 italic">
                  (hereinafter referred to as the "<strong>Idhar Udhar</strong>" / "We" / "Us" / "Our", which expression, if the context otherwise requires, shall mean and include its successors, assigns and Affiliates).
                </p>
              </div>

              <div className="border border-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Second Party</h3>
                <p className="text-gray-300">Name of the owner/ rider of the Vehicle(s) provider -</p>
                <div className="mt-2 space-y-2 text-gray-300">
                  <p>a) PAN card number -</p>
                  <p>b) Aadhaar Number -</p>
                  <p>c) Driving License Number -</p>
                </div>
                <p className="mt-2 text-gray-400 italic">
                  (As per the documents provided and attached to the Agreement)
                </p>
                <p className="mt-2 text-gray-400 italic">
                  (hereinafter referred to as the "Service Provider" / "You" / "yourself" / "your", which expression, unless repugnant to the context hereof, shall mean and include its successors and assigns).
                </p>
              </div>
            </div>
          </section>

          {/* Recitals Section */}
          <section className="mb-8 border-b border-gray-700 pb-6">
            <h2 className="text-xl font-bold mb-4">Recitals</h2>
            <div className="space-y-4">
              <p>
                WHEREAS,
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                <li>
                  <strong>Idhar Udhar</strong> is an on-demand logistics' services provider engaged in the business of transportation of goods of its customers from one place to the another, under the brand name of <strong>Idhar Udhar</strong>; and
                </li>
                <li>
                  <strong>Idhar Udhar</strong> avails services of riders/ service provider in the course of its regular business
                </li>
                <li>
                  Service Provider is an individual / entity who is an independent commercial Vehicle operator and / or rider, who agrees to provide services of renting/ hiring of motor vehicle, with operator to <strong>Idhar Udhar</strong>, and has agreed to make himself available for the services of <strong>Idhar Udhar</strong> for the purposes as stated herein based on the terms and conditions attached with this Agreement.
                </li>
              </ol>
            </div>
          </section>

          {/* Key Terms Table */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4"> Terms</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="border border-gray-600 p-2 text-left">Term</th>
                    <th className="border border-gray-600 p-2 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-700 p-2">Term</td>
                    <td className="border border-gray-700 p-2 text-gray-300">As per clause 3 (Term and Termination) of the Agreement.</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-900">
                    <td className="border border-gray-700 p-2">Services to be provided / availed, as the case may be</td>
                    <td className="border border-gray-700 p-2 text-gray-300">As below and in accordance with General Terms and Conditions of the Agreement</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-700 p-2">Fees / Charges</td>
                    <td className="border border-gray-700 p-2 text-gray-300">As below and in accordance with General Terms and Conditions of the Agreement</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-900">
                    <td className="border border-gray-700 p-2">Details of Vehicles</td>
                    <td className="border border-gray-700 p-2 text-gray-300">As per Annexure IA and the documents attached to the Agreement.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 p-2">Name of the Owner of the Vehicle (if different from the rider)</td>
                    <td className="border border-gray-700 p-2 text-gray-300">As per Annexure IB and the documents attached to the Agreement.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 p-2">Attachments forming part of the Agreement</td>
                    <td className="border border-gray-700 p-2 text-gray-300">This Agreement contains following documents which are, and shall form, an integral part of this Agreement:
                       <ol className="list-decimal mt-2 pl-6 space-y-2 text-gray-300">
              <li>The General Terms and Conditions in Appendix A;</li>
              <li>The Additional Terms and Conditions for 2W (Two-Wheeler) in Appendix B;</li>
              <li>The Additional Terms and Conditions for 3W (Three-Wheeler) and 4W (Four-Wheeler) in Appendix C;</li>
              <li>Details of the Vehicle(s) and rider including No Objection Certificate(s) for non-owned Vehicle in Annexure IA & Annexure IB;</li>
            </ol>
            <p className="mt-4 text-gray-300">
              Reference to this Agreement shall include the applicable above documents and the General Terms and Conditions of <strong>Idhar Udhar</strong>.
            </p>
                    </td>
                  </tr>
                </tbody>
              </table>
               <p className="mt-4 text-gray-400 italic">
              (The Service Provider and <strong>Idhar Udhar</strong> are hereinafter collectively referred to as the "Parties" and individually each as a "Party" and the word Service Provider and You, shall include its rider(s), as well).
            </p>
            </div>
          </section>

        

          {/* Notice Section */}
          <section className="mb-8 bg-gray-900 border-l-4 border-yellow-500 p-4">
            <p className="font-bold mb-2">PLEASE ENSURE THAT YOU READ AND UNDERSTAND ALL THE CLAUSES BEFORE YOU PROVIDE SERVICES TO <strong>Idhar Udhar</strong>, AS YOU SHALL BE BOUND BY ALL THE TERMS AND CONDITIONS CONTAINED HEREIN upon your Acceptance.</p>
            <p className="font-semibold">YOUR ACCEPTANCE / SHALL OPERATE AS A BINDING AGREEMENT BETWEEN YOU AND <strong>Idhar Udhar</strong> IN RESPECT OF THE VENDOR SERVICES TO <strong>Idhar Udhar</strong>.</p>
          </section>

          {/* Main Clauses */}
          <section className="space-y-8">
            {/* Clause 1 */}
            <div className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-bold mb-4">1. APPLICABILITY AND VALIDITY</h2>
              <div className="space-y-4 text-gray-300">
                <p><span className="font-semibold">1.1.</span> This document is an electronic record as per the provisions of Information Technology Act, 2000 and rules framed thereunder, as applicable, and the provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000.</p>
                <p><span className="font-semibold">1.2.</span> This electronic record is generated by a computer system and does not require any physical or digital signatures.</p>
                <p><span className="font-semibold">1.3.</span> Your Acceptance is a valid consent to be bound by this Agreement for using <strong>Idhar Udhar</strong> for the purpose of receiving and delivering the Vendor Services.</p>
                <p><span className="font-semibold">1.4.</span> Your engagement with <strong>Idhar Udhar</strong> to provide Vendor Services to <strong>Idhar Udhar</strong> is subject to your acceptance of the clauses, as specified in this Agreement. <strong>Idhar Udhar</strong> reserves the right to change, modify, add, or remove these clauses / terms and conditions, in part or in whole. It is your responsibility and duty to check the terms and conditions of <strong>Idhar Udhar</strong> periodically for the changes, if any. Your continued use of <strong>Idhar Udhar</strong> following the posting of changes will mean that You accept and agree to the changes, if any, made by <strong>Idhar Udhar</strong>.</p>
                <p><span className="font-semibold">1.5.</span> By accepting this Agreement, You further agree and consent to the collection, transfer, use, storage, disclosure and sharing of your information (personally identifiable or not), as per the applicable law(s). The data collected shall be utilised for improving Vendor Services to <strong>Idhar Udhar</strong> and in particular for the reason of internal record keeping, security and statutory disclosures, if any, as per the applicable law(s). You further agree to the Privacy Policy of <strong>Idhar Udhar</strong> as available on the website of <strong>Idhar Udhar</strong></p>
              </div>
            </div>

            {/* Clause 2 */}
            <div className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-bold mb-4">2. TERMS OF SERVICE</h2>
              <div className="space-y-4 text-gray-300">
                <p><span className="font-semibold">2.1.</span> You shall not have more than one active <strong>Idhar Udhar</strong> vendor registration which you are further prohibited from selling, trading, or otherwise transferring to another party;</p>
                <p><span className="font-semibold">2.2.</span> Service Provider/ rider Information shall be true and correct and there will be no information that could impact your performance to render Vendor Services pursuant to this Agreement, shall be hidden from <strong>Idhar Udhar</strong> at any point of time. In case of furnishing of inaccurate data, <strong>Idhar Udhar</strong> reserves the right to deregister and/or suspend/terminate and/or take appropriate legal proceedings against the Vendor without prior notice.;</p>
                <p><span className="font-semibold">2.3.</span> You acknowledge and agree that You may be subject to certain background and driving record verification as and when required from time to time;</p>
                <p><span className="font-semibold">2.4.</span> You shall not use any, information pertaining to the <strong>Idhar Udhar</strong> customer, including, but not limited thereto any confidential information, according to and available with <strong>Idhar Udhar</strong>, for any purpose other than perform your obligations under or in connection with this Agreement;</p>
                <p><span className="font-semibold">2.5.</span> You shall ensure that all valid documents related to the vehicle such as a comprehensive valid insurance(s) are obtained and retained by you during the term of this agreement. Further, you shall ensure that all documents pertaining to each consignment such as invoices, description of the goods, insurance on the goods obtained by the customer (if any)etc. have been obtained by You during the term of this Agreement;</p>
                <p><span className="font-semibold">2.6.</span> You will have a functioning smartphone, active mobile number having the ability to read and send communication/message regarding the order/trip details including customer details, kms and time reading, amount paid by the customer and to convey to <strong>Idhar Udhar</strong> and/or <strong>Idhar Udhar</strong> verified agents.</p>
                <p><span className="font-semibold">2.7.</span> You will be a part of the standard vendor ratings process which will be dependent upon the transparent process and parameters of <strong>Idhar Udhar</strong>, failure to adhere with the rating process will have an impact on the Vendor Services and the decision / action consequent thereupon will be solely decided by <strong>Idhar Udhar</strong>;</p>
                <p><span className="font-semibold">2.8.</span> During the performance of Vendor Services, the Vehicle shall not be pilfered or tampered with and in case of any pilferage or tampering, the same shall be reported immediately by You to us;</p>
                <p><span className="font-semibold">2.9.</span> You must be aware of the prominent destinations and routes, both outside and within the Location or territory in which you will be rendering the Vendor Services;</p>
                <p><span className="font-semibold">2.10.</span> Pricing/trip fare, incentives & discounts provided to Customers of <strong>Idhar Udhar</strong> will be decided by <strong>Idhar Udhar</strong> at its sole and absolute discretion;</p>
                <p><span className="font-semibold">2.11.</span> You shall ensure and shall be solely responsible to ensure that before the pickup, the device / phone is available for <strong>Idhar Udhar</strong> for tracking and making the Vendor Services smooth. Your phone should not be busy for long, unavailable or switched off. Doing this, may lead to deductions in the amounts to be paid to You by adjusting the vendor pricing due to compensation paid to the customer, if any, given to the customer with the amount to be paid to You. Such deductions may extend up to any quantum of the amounts to be paid to You and would be decided at the sole and absolute discretion of <strong>Idhar Udhar</strong>;</p>
                <p><span className="font-semibold">2.12.</span> You shall be liable for all claim(s) and demand(s) raised by any third-party, at all times, in respect of the Vehicle (owned or hired). <strong>Idhar Udhar</strong> may or may not verify the details of the Vehicle used by You. In case of any claim(s), as to the title of the Vehicle between the registered owner of the Vehicle and You, <strong>Idhar Udhar</strong> shall not be held responsible for the same. You shall be liable to indemnify <strong>Idhar Udhar</strong> in case of the loss of it's brand value, goodwill, loss of business, direct or indirect claims, claims from accident and / or offenses under the Applicable Laws, etc. during the term of this Agreement and arising due to the direct or indirect acts of yours.</p>
                <p><span className="font-semibold">2.13.</span> Any statutory compliance with respect to each consignment such as procurement of GST invoices and E-way bill shall primarily be the responsibility of the customer, and prior to picking-up the consignment, You shall be duty bound to collect all the requisite documents from the customer, that are necessary for the transportation of the consignment.</p>
                <p><span className="font-semibold">2.14.</span> You shall be liable to intimate to <strong>Idhar Udhar</strong>, within 24 hours, with regard to any disputes arising out of the Vendor Services and obligations and / or any legal expenses [including but not limited to charges incurred for releasing of seized Vehicle(s), advocate's fees and ancillary expenses] incurred by you while completing the trip, for no fault of yours. <strong>Idhar Udhar</strong> shall do all that is necessary to assist You to release the seized Vehicle(s) and safeguard your interests upon being intimated within the prescribed time period, as above, and upon internal investigation of the notified incident at <strong>Idhar Udhar</strong> end. In case of failure on your part to intimate <strong>Idhar Udhar</strong> within the specified time period, <strong>Idhar Udhar</strong> shall not be held liable and responsible for any costs, expenses and losses incurred by You in this behalf;</p>
                <p><span className="font-semibold">2.15.</span> You shall indemnify <strong>Idhar Udhar</strong> in accordance with the provisions of this Agreement;</p>
                <p><span className="font-semibold">2.16.</span> You shall be solely liable for all offences and penalties relating to the Vendor Services; and</p>
                <p><span className="font-semibold">2.17.</span> Any damage / loss / theft / misappropriation of consignment occurring during the rendering of the Vendor Services, on account of reasons attributable to Vendor, shall be completely indemnified by the Vendor to <strong>Idhar Udhar</strong>.</p>
              </div>
            </div>

            {/* Clause 3 */}
            <div className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-bold mb-4">3. TERM AND TERMINATION</h2>
              <div className="space-y-4 text-gray-300">
                <p><span className="font-semibold">3.1.</span> The Agreement shall commence w.e.f. the Effective Date and shall be valid for a period of 1 (one) year unless terminated by <strong>Idhar Udhar</strong>.</p>
                <p><span className="font-semibold">3.2.</span> The Agreement shall be automatically renewed unless terminated as per the Agreement.</p>
                <p><span className="font-semibold">3.3.</span> <strong>Idhar Udhar</strong> reserves the right to suspend or terminate this Agreement, at any point of time, without assigning any reason whatsoever or notice to the Service Provider.</p>
                <p><span className="font-semibold">3.4.</span> Termination of this Agreement shall be without prejudice to the acquired rights and obligations of <strong>Idhar Udhar</strong> existing on the date of termination (including any right to take action in respect of the circumstances giving rise to termination) and shall not affect any other rights and remedies available to <strong>Idhar Udhar</strong>.</p>
              </div>
            </div>

            {/* Clause 4 */}
            <div className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-bold mb-4">4. CONSIDERATION, CHARGES AND TAXES</h2>
              <div className="space-y-4 text-gray-300">
                <p><span className="font-semibold">4.1.</span> In consideration for performance of the Vendor Services, the Service Provider shall be entitled to receive Fees as notified by <strong>Idhar Udhar</strong> from time to time subject to deduction/collections of applicable Taxes.</p>
                <p><span className="font-semibold">4.2.</span> The applicable fees for the services shall be communicated to You on the application of <strong>Idhar Udhar</strong> prior to acceptance of the consignment which will be subject to variations (if any) including but not limited to changes in the route, any delay, etc during the performance of the services.</p>
                <p><span className="font-semibold">4.3.</span> All payments due to the Service Provider shall be made by a crossed pay order cheque in favor of Service Provider or through net banking / NEFT / RTGS etc., as decided by <strong>Idhar Udhar</strong> from time to time.</p>
                <p><span className="font-semibold">4.4.</span> The Service Provider acknowledges and agrees that in the event, any Tax proceedings are initiated against <strong>Idhar Udhar</strong>, the Service Provider shall fully cooperate with <strong>Idhar Udhar</strong> by furnishing the relevant information related to the supply provided to <strong>Idhar Udhar</strong> on a timely basis as may be required by <strong>Idhar Udhar</strong>. Furthermore, all the damages and other costs incurred by <strong>Idhar Udhar</strong> due to any fault of the Service Provider, the Service Provider shall indemnify <strong>Idhar Udhar</strong> for all such damages and other costs.</p>
                <p><span className="font-semibold">4.5.</span> The Fees payable to the Service Provider is inclusive of all applicable central, state, and other Taxes and levies applicable in the hands of the Service Provider. Further, <strong>Idhar Udhar</strong> shall withhold applicable income tax on the payments being made to the Service Provider.</p>
                <p><span className="font-semibold">4.6.</span> The Service Provider shall be solely responsible to pay the Taxes or any other applicable taxes with respect to the provision of Vendor Services provided to <strong>Idhar Udhar</strong>.</p>
                <p><span className="font-semibold">4.7.</span> In case of cash bookings, You shall collect on behalf of <strong>Idhar Udhar</strong>, the transportation with customer (as displayed on the application of <strong>Idhar Udhar</strong> or if otherwise agreed upon by <strong>Idhar Udhar</strong> and the You at the time of accepting the said booking), parking charges, additional night surcharge (where applicable) and any fee or levy presently payable or hereinafter imposed by Applicable Law(s) or required to be paid for the Service.</p>
                <p><span className="font-semibold">4.8.</span> Toll charges will be payable by the customer (whether by way of cash or credit, as previously agreed between <strong>Idhar Udhar</strong> and the Customer as applicable, when the Vehicle that is in use and crosses a toll post.</p>
              </div>
            </div>

            {/* Clause 5 */}
            <div className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-bold mb-4">5. RELATIONSHIP</h2>
              <div className="space-y-4 text-gray-300">
                <p><span className="font-semibold">5.1.</span> The relationship between You and <strong>Idhar Udhar</strong> is that of independent contractors and on a principal-to-principal basis. Nothing in this Agreement shall be construed as creating a partnership, joint venture, employer-employee, agency, or other relationship between the Parties.</p>
                <p><span className="font-semibold">5.2.</span> You covenant that all Persons assigned by You (not by way of transfer) to perform Vendor Services under this Agreement shall be your employees or contractors and under no circumstances shall such Persons be deemed to be employees / workers of <strong>Idhar Udhar</strong>.</p>
              </div>
            </div>

            {/* Clause 6 */}
            <div className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-bold mb-4">6. RPO AND NON-DISPARAGEMENT</h2>
              <div className="space-y-4 text-gray-300">
                <p><span className="font-semibold">6.1.</span> The Service Provider shall provide the Vendor Services with the due care, skill and diligence of a reasonable prudent operator ("RPO") and shall ensure that any person appointed/ by the Service Provider while performing under this Agreement shall provide the Vendor Services to the best of his/her ability and in accordance with the standards of an RPO.</p>
                <p><span className="font-semibold">6.2.</span> For the purposes of this Agreement, a "RPO" means a person seeking in good faith to perform its contractual obligations and in so doing and in the general conduct of its undertaking, exercises that degree of skill, diligence, prudence and foresight which would reasonably and ordinarily be expected from a skilled and experienced operator complying with all Applicable Laws and statutory obligations, engaged in same type of undertaking, under the same or similar circumstances and conditions and any reference to the standards of a RPO will be construed accordingly.</p>
                <p><span className="font-semibold">6.3.</span> Specifically, the Service Provider shall ensure that the services are provided in compliance with the Motor Vehicles Act, 1988, Motor Transport Workers Act, 1961 or any Rules made thereunder, Carriage by Road Act 2007 and Carriage by Road Rule 2011 and in strict compliance with the provisions of any Applicable Laws along with this Agreement;</p>
                <p><span className="font-semibold">6.4.</span> The Service Provider agrees to provide the Vendor Services in a manner so as to advance the business interests and goodwill of <strong>Idhar Udhar</strong>. Specifically, the Service Provider agrees not to, and shall ensure that its riders do not, (a) form any union, trusts, association, society or any other type of entity; or (b) hold meetings, conference or any other form of gathering of 5 or more, to discuss this Agreement, the Services and payments provided hereunder and/or the regular business affairs of <strong>Idhar Udhar</strong>;</p>
                <p><span className="font-semibold">6.5.</span> The Service Provider shall not directly or indirectly engage in any conduct averse to the best interests of <strong>Idhar Udhar</strong>. The Service Provider shall not, and shall ensure that its riders and other employees do not disparage or make any negative comments (either oral or in writing) about, <strong>Idhar Udhar</strong> or any of its officers, employees, directors or other representatives;</p>
                <p><span className="font-semibold">6.6.</span> The Service Provider shall be liable for on all cases as may be initiated through the Vehicle during the engagement hours while providing the services; and</p>
                <p><span className="font-semibold">6.7.</span> Notwithstanding anything contained anywhere in this Agreement, breach of this Clause 21(i) by the Service Provider shall entitle <strong>Idhar Udhar</strong> to terminate this Agreement and <strong>Idhar Udhar</strong> shall be entitled for all indemnification from the Service Provider, as per this Agreement.</p>
                <p><span className="font-semibold">6.8.</span> You have the appropriate and current level of training, expertise and experience to provide the Vendor Services in a professional manner with due skill, care and diligence;</p>
                <p><span className="font-semibold">6.9.</span> the appropriate and current level of training, expertise, and experience to provide the Vendor Services in a professional manner with due skill, care, and diligence and high standards of professionalism, service, and courtesy.</p>
                <p><span className="font-semibold">6.10.</span> all license(s), permit(s), approval(s) and authority(ies) to the Vehicle utilized by You, that are necessary to provide Vendor Services, have been obtained by You and further, any statutory compliance required for the running of such Vehicle in the Location or the territory in which Vendor Services are to be provided, have to be obtained by You at your own cost(s).</p>
              </div>
            </div>

            {/* Clause 7 */}
            <div className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-bold mb-4">7. BRANDING AND ADVERTISING TERMS</h2>
              <div className="space-y-4 text-gray-300">
                <p><span className="font-semibold">7.1.</span> The Vehicles registered with <strong>Idhar Udhar</strong> from time to time by the Service Providers for providing Vendor Services can be branded/advertised with the logo and content of <strong>Idhar Udhar</strong> as per the terms and conditions specified by <strong>Idhar Udhar</strong> in this regard. The Service Provider shall ensure that such brand affixation is carried out only by the vendors identified by <strong>Idhar Udhar</strong>.</p>
                <p><span className="font-semibold">7.2.</span> The Service Provider and/or the rider(s) may not opt-out of any branding / advertising program of <strong>Idhar Udhar</strong> or its customers (as applicable) and stop branding / advertising on its Vehicle(s) during the subsistence of this agreement. Further, the Service Provider and/or its rider(s) shall be solely liable and accountable for any responsibility(ies) / liability(ies) / loss(es) / action(s) / penalty(ies) by any government, regional transport office(s) / police/ local / regulatory body(ies) arising during the time they opted for such branding/advertising activity any such-opt out from branding / advertising program of <strong>Idhar Udhar</strong> or stoppage of branding / advertising their Vehicles, by the Service Provider and/or the rider(s).</p>
                <p><span className="font-semibold">7.3.</span> The Service Provider and/or the rider(s) shall comply with all the applicable law(s) / regulations for branding / advertising on its Vehicle(s) as defined by the state/central transport corporation/authority. The Service Provider and/or the rider(s) shall be solely responsible for compliance with the laws / regulations of the state/central transport corporation/authority (including the regional transport offices where the Vehicle got registered, local bodies, regulatory agencies (local / state / central) i.e. ensuring to get the <strong>Idhar Udhar</strong> branding approval in their Vehicle from the respective regional transport offices/state transport authority, where the Vehicle got registered within the prescribed time period. The Service Provider and/or the rider(s) shall be solely responsible for any liability, loss, action and / or penalty arising out of any noncompliance with the applicable laws in relation to such branding / advertising and <strong>Idhar Udhar</strong> will not be responsible for such liability in any manner;</p>
                <p><span className="font-semibold">7.4.</span> Non-adherence of this Clause by the Service Provider and/or the rider(s) shall be deemed to be a breach of this Agreement by the Service Provider and/or the rider(s) and <strong>Idhar Udhar</strong> may terminate this Agreement without any notice and further, the Service Provider and/or the rider(s) agrees to indemnify <strong>Idhar Udhar</strong> from and against and in respect of any or all liabilities, losses, charges and expenses (including legal fees and costs on a full indemnity basis), claims, demands, actions and proceedings, which <strong>Idhar Udhar</strong> may incur or sustain directly or indirectly from any breach by Service Provider and/or the rider(s) of its obligations here under or any breach of Service Provider's and/or the rider(s's representations and warranties, or by any reason, or in real action to the provision or proposed provision of the services by Service Provider and/or its rider(s) and Service Provider and/or the rider(s) shall forthwith pay all such sums forthwith on demand by <strong>Idhar Udhar</strong> in writing.</p>
                <p><span className="font-semibold">7.5.</span> The Service Provider explicitly accepts and consents to share the Service Provider/ rider Information with <strong>Idhar Udhar</strong>, including the submission of copies of such documents as provided by You with any financial lending institution(s) and/or insurance broker entities, if it is proved within reason that you have availed a service from them for which You are consenting the same. You forego the right to claim any damages from <strong>Idhar Udhar</strong> in the event any such financial facility and/or liability which has been availed by you. You also agree that <strong>Idhar Udhar</strong> will not be liable for any damages arising as a result of such disclosure of your information. <strong>Idhar Udhar</strong> retains the right to withhold pending dues and terminate your services on an immediate basis in such cases.</p>
                <p><span className="font-semibold">7.6.</span> The Service Provider hereby acknowledges and agrees to the use of his/her photographs by <strong>Idhar Udhar</strong> for certain purposes, which may include usage of the Service Provider and his vehicle photographs in <strong>Idhar Udhar</strong> internal communications and presentations, training materials, marketing and advertisement activities, including without limitation, online advertisement, social media and offline advertisement. The Service Provider hereby consents to sharing of his/her photographs by <strong>Idhar Udhar</strong> with third parties for the aforesaid purposes. The Service Provider further agrees to the Privacy Policy of <strong>Idhar Udhar</strong> as available on its in website of <strong>Idhar Udhar</strong> (www.idharudhar.in) on the link https://idharudhar.in/privacy-policy.</p>
              </div>
            </div>

            {/* Clause 8 */}
            <div className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-bold mb-4">8. ELECTRONIC SIGNATURES</h2>
              <div className="space-y-4 text-gray-300">
                <p>The Parties agree that the electronic signature of a party to this Agreement shall be as valid as an original signature of such party and shall be effective to bind such party to this Agreement. The parties agree that the electronically signed document (including this Agreement) shall be deemed</p>
                <p>(i) to be "written" or "in writing,"
                  <br />
                  (ii) to have been signed and <br /> (iii) to constitute a record established and maintained in the ordinary course of business and an original written record when printed from electronic files. Such paper copies or "printouts," if introduced as evidence in any judicial, arbitral, mediation or administrative proceeding, will be admissible between the parties to the same extent as physical signed document.</p>
              </div>
            </div>

            {/* Signature Section */}
            <div className="mt-12 pt-6 border-t border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-bold mb-4">For and on behalf of SwiftSend Innovation Private Limited</p>
                  <div className="border-t-2 border-gray-600 pt-4">
                    <p>Authorized Signatory</p>
                    <p>Name:</p>
                    <p>Designation:</p>
                    <p>Date:</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold mb-4">For and on behalf of the Service Provider</p>
                  <div className="border-t-2 border-gray-600 pt-4">
                    <p>Signature:</p>
                    <p>Name:</p>
                    <p>Date:</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Appendices */}
        <div className="p-6 md:p-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold mb-6">APPENDICES</h2>

          {/* Appendix A */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">APPENDIX A - GENERAL TERMS AND CONDITIONS</h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="font-bold mb-2">1. DEFINITIONS</h4>
                <p>Unless defined or the context otherwise provides or requires, the following words and expressions used in this Agreement shall have the meaning as provided to them herein below:</p>
                <div className="mt-4 space-y-3">
                  <p><span className="font-semibold">"Acceptance"</span> means your affirmative action of, (i) clicking on the box against the words "I Accept / Agree" or (ii) by "logging-in" / "signing-in" on the application of <strong>Idhar Udhar</strong>, provided at the end of this Agreement (including its annexure and the General Terms and Conditions), by which action, You unequivocally accept and agree to the Agreement and any modifications thereof;</p>
                  <p><span className="font-semibold">"Affiliates"</span> means any corporation, association, or other entity that directly or indirectly owns, is owned by, or is under common ownership with the <strong>Idhar Udhar</strong>, either currently or during subsistence of this Agreement.</p>
                  <p><span className="font-semibold">"Agreement"</span> shall mean the Services Agreement executed between <strong>Idhar Udhar</strong> and the Service Provider pursuant to which, the Service Provider has agreed to provide Vendor Services to <strong>Idhar Udhar</strong>;</p>
                  <p><span className="font-semibold">"Applicable Law"</span> shall mean and include any law, statute, ordinance, rule, regulation, guideline, policy, notification, circular or other pronouncement or any similar form of decision of, or determination by or any interpretation, administration and other pronouncements having the effect of law of the Republic of India or any other applicable jurisdiction by State, Municipality, Court, Tribunal, Government, Ministry, Government-Department, Commission, Arbitrator or board having the effect of law in India, as in effect or which may come in effect on a future date;</p>
                  <p><span className="font-semibold">"Business Day"</span> means a day (other than national gazette holidays, and bank holidays in the territory / location / place of execution of this Agreement) on which nationalized banks are generally open in India for the conduct of banking business and comprising of normal working hours, it is however clarified that a working day for <strong>Idhar Udhar</strong> at any Location, shall always be a Business Day for the Service Provider for the Location in which the Service Provider is providing the Vendor Services;</p>
                  <p><span className="font-semibold">"rider Information"</span> shall mean and include any personal data collected from the rider including know your client documents with rider's bank, copies of valid Government issued Vehicle registration certificate, Vehicle insurance copy, driving license, identity proof, residence proof, location data, proof of ownership, credit bureau score, registration(s) and compliance under welfare legislations for rider and any other information that <strong>Idhar Udhar</strong> may deem fit;</p>
                  <p><span className="font-semibold">"Effective Date"</span> shall mean the date on which the Service Provider accepted this Agreement and the General Terms and Conditions of <strong>Idhar Udhar</strong> by clicking "accept" or "agree" or by "logging- in" / "signing-in" on the application of <strong>Idhar Udhar</strong>.</p>
                  <p><span className="font-semibold">"Vendor Services / Services"</span> shall be the services provided by the Service Provider to <strong>Idhar Udhar</strong> of making vehicles and operators available for <strong>Idhar Udhar</strong>'s logistics / transportation services in reference to the order provided by customers of <strong>Idhar Udhar</strong> on the application of <strong>Idhar Udhar</strong>;</p>
                  <p><span className="font-semibold">"Fees"</span> means the consideration payable by <strong>Idhar Udhar</strong> to the Vendor/ rider for providing the Vendor Services;</p>
                  <p><span className="font-semibold">"Governmental Authority"</span> means any governmental agency, semi-governmental or judicial entity or authority, department of law and order including the Police personnel of any rank (including, without limitation, any stock exchange or any self-regulatory organisation established under statute);</p>
                  <p><span className="font-semibold">"Intellectual Property Rights"</span> shall mean and include the copyright (whether registered or not), patents including rights of filing patents, trademarks, trade names, trade dresses, house marks, collective marks, associate marks and the right to register them, designs (both industrial and layout), geographical indicators, moral rights, broadcasting rights, displaying rights, distribution rights, selling rights, reproducing rights, domain names, internet address, graphics, artwork, links, information, logos, software, configuration, marketing and distribution material and any other intellectual property right in the website of <strong>Idhar Udhar</strong> and / or its application, which are used by and / or owned by <strong>Idhar Udhar</strong>;</p>
                  <p><span className="font-semibold">"Tax"</span> means all forms of present and future taxes (including but not limited to direct and indirect Taxes), deductions, withholdings, duties, imposts, levies, cesses, fees, charges, social security contributions and rates imposed, levied, collected, withheld or assessed by any Governmental Authority or other taxing authority in India or elsewhere and any interest, additional taxation, penalty, surcharge, cess or fine in connection therewith and "Taxes" shall be construed accordingly;</p>
                  <p><span className="font-semibold">"Termination Date"</span> shall mean the date on which this Agreement shall stand terminated by <strong>Idhar Udhar</strong>;</p>
                  <p><span className="font-semibold">"General Terms and Conditions"</span> or "Vendor/ rider T&C" or "Terms and Conditions" refers to the Vendor/ rider Terms and Conditions, which are forming part of this Agreement under Annexure B and/or C and are also available on the website and application of <strong>Idhar Udhar</strong>, as may be amended by <strong>Idhar Udhar</strong> from time to time;</p>
                  <p><span className="font-semibold">"Person"</span> means any natural person, limited or unlimited liability company, corporation, partnership (whether limited or unlimited), proprietorship, Hindu undivided family, trust, union, association, Governmental Authority or any agency or political subdivision thereof or any other entity that may be treated as a person under the Applicable Law;</p>
                  <p><span className="font-semibold">"Vehicle"</span> shall mean the vehicles used by the Vendor/ rider and includes the ones plying on non- renewable resources as well as renewable resources but not limited to electric vehicles, which will be used for performing the Vendor Services;</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">2. INTERPRETATION</h4>
                <div className="space-y-4">
                  <p>Unless the context of this Agreement otherwise provides or requires:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>the recitals, annexures, terms and conditions, attachments, fees receipts, invoices and schedules shall constitute an integral and operative part of this Agreement;</li>
                    <li>a word or an expression, which denotes a natural person shall include an artificial person (and vice versa), any one gender shall include the other genders, the singular shall include the plural (and vice versa);</li>
                    <li>Heading and bold typeface in this Agreement are for convenience only and shall be ignored for the purposes of interpretation;</li>
                    <li>The use of the word "including" followed by a specific example(s) in these Agreement, shall not be construed as limiting the meaning of the general wording preceding it;</li>
                    <li>The rule of construction, if any, that any clause should be interpreted against the parties responsible for drafting and preparation thereof, shall not apply;</li>
                    <li>Reference to any clause, article, section or schedule shall mean a reference to a clause, article, section or schedule of these Agreement, unless specified otherwise;</li>
                    <li>Reference to any Applicable Law shall mean a reference to that law as amended, consolidated, supplemented or replaced.</li>
                    <li>all references to this agreements, documents or other instruments include all documents attached to this Agreement (subject to all relevant approvals) a reference to this agreement, document or instrument as amended, supplemented, substituted, novated or assigned from time to time;</li>
                    <li>unless the context otherwise requires, the singular includes the plural and vice versa;</li>
                    <li>the words 'hereof', 'herein', and 'hereto' and words of similar import when used with reference to a specific Clause in, or Schedule to, this Agreement shall refer to such Clause in, or Schedule to, this Agreement, and when used otherwise than in connection with specific Clauses or Schedules, shall refer to the Agreement as a whole;</li>
                    <li>headings and the use of bold typeface shall be ignored in its construction;</li>
                    <li>a reference to a Clause or Schedule is, unless indicated to the contrary, a reference to a clause or schedule to this Agreement;</li>
                    <li>references to this Agreement shall be construed as references also to any separate or independent stipulation or agreement contained in it;</li>
                    <li>the words "other", "or otherwise" and "whatsoever" shall not be construed ejusdem generis or be construed as any limitation upon the generality of any preceding words or matters specifically referred to; and</li>
                    <li>words and abbreviations, which have, well known technical or trade/commercial meanings are used in the Agreement in accordance with such meanings.</li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">3. VALIDITY</h4>
                <div className="space-y-4">
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Any terms and conditions that by their nature or otherwise reasonably should survive a cancellation or termination of this Agreement shall be deemed to survive the cancellation or termination of this Agreement.</li>
                    <li>This Agreement shall be governed by, and construed in accordance with, the laws of India, without regard to the principles of conflict of laws.</li>
                    <li>If any part or any provision of this Agreement is or becomes illegal, invalid, or unenforceable, that part or provision shall be ineffective to the extent of such invalidity or unenforceability only, without in any way affecting the validity or enforceability of the remaining parts of said provision or the remaining provisions of this Agreement. The parties hereby agree to attempt to substitute any invalid or unenforceable provision with a valid or enforceable provision, which achieves to the greatest extent possible the economic, legal, and commercial objectives of the invalid or unenforceable provision.</li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">4. COPIES</h4>
                <div className="space-y-4">
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>This Agreement may be executed and delivered in one or more counterparts, each of which shall be deemed as an original, or by facsimile or other electronic copies, such as by email. The parties agree that such facsimile or electronic execution and shall have the same force and effect as of an original document with original signatures.</li>
                    <li>No variation of this Agreement shall be effective unless it is in writing and signed by the Parties (or their authorized representatives).</li>
                    <li>The Parties agree that that the Parties may entire into one or more written addendums from time to time to supplement, modify, or alter the terms of this Agreement.</li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">5. LIMITATIONS</h4>
                <div className="space-y-4">
                  <p><strong>Idhar Udhar</strong> does neither warrant that You will be able to use <strong>Idhar Udhar</strong>'s application and / or will be able to provide the Vendor Services at all times or locations on <strong>Idhar Udhar</strong> nor it warrants that <strong>Idhar Udhar</strong> will be uninterrupted or error-free or that the defects will be capable of being corrected by <strong>Idhar Udhar</strong> in a timely fashion. The Services, Devices, the output generated there from, and all other technology developed by <strong>Idhar Udhar</strong> are provided to you on an "AS IS" and "AS AVAILABLE" basis and <strong>Idhar Udhar</strong> specifically disclaims all warranties and indemnities, express, implied or statutory, including without limitation any warranty of merchantability, fitness for a particular purpose, accuracy, completeness, any assurance of minimum business guarantee with respect to any Fees or any other warranty arising from the course of performance or course of dealing.</p>
                  <p><strong>Idhar Udhar</strong> shall not be responsible or liable for any loss or damage, how so ever caused or suffered by the Service Provider arising out of the use of the service offered by <strong>Idhar Udhar</strong> or due to the failure of <strong>Idhar Udhar</strong> to provide services to the consignor/consignee for any reason whatsoever including but not limited to any customer's noncompliance with the services offered by <strong>Idhar Udhar</strong>, which includes, but is not limited to any incorrectly placed voice instructions, malfunction, partial or total failure of any network terminal, data processing system, computer tele transmission or telecommunication system or other circumstances whether or not beyond the control of <strong>Idhar Udhar</strong> or any person or any organization involved in the above mentioned systems. The Service provider shall also be liable to <strong>Idhar Udhar</strong> for any loss caused to <strong>Idhar Udhar</strong> due to the negligence of the Service Provider and/or his appointed operators/contractors and or any unlawful act or omission in the performance of the Vendor Services. Without prejudice to the above, <strong>Idhar Udhar</strong> shall not be liable for any direct or indirect loss or damage, which may be suffered by the Service Provider as a result of any failure by a consignor/consignee to show up within any stipulated time even if <strong>Idhar Udhar</strong> has agreed to such timing or even if the customer has advised <strong>Idhar Udhar</strong> of the possibility that he/she may not show up within the stipulated time; <strong>Idhar Udhar</strong> makes available general third-party information and other data from external sources ("Third Party Content"). The provision of Third-Party Content is for general informational purposes only. The Service Provider acknowledges that the Third-Party Content provided is obtained from sources believed to be reliable. <strong>Idhar Udhar</strong> does not provide any guarantee with respect to any Third-Party Content and <strong>Idhar Udhar</strong> shall not be held liable for any loss suffered by the Service Provider based on the reliance placed on or use of Third-Party Content. Further, to the extent that such Third-Party Content is infringing upon some other party's intellectual property rights or proprietary rights, <strong>Idhar Udhar</strong> shall not be held liable for the same at any instances.</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">6. VIOLATIONS / BREACH</h4>
                <div className="space-y-4">
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>All remedies of either party under this Agreement whether provided herein or conferred under statute, civil law, common law, custom or trade usages, are cumulative and not alternative and may be enforced successively or concurrently.</li>
                    <li>Each party shall bear its own costs in connection with its obligations under this Agreement. Further, all charges and expenses including stamp duty or otherwise in relation these presents shall be borne and paid by the Service Provider. The Service Provider shall bear and pay their own advocates' fees.</li>
                    <li>Each party will act in good faith in the performance of its respective responsibilities under this Agreement and will not unreasonably delay, condition, or withhold the giving of any consent, decision or approval that is either requested or reasonably required by the other party to perform its responsibilities.</li>
                    <li>Any violation of any provision hereof, any incomplete or mistaken performance of any obligation provided hereunder, any misrepresentation made hereunder, any material nondisclosure or omission of any material fact, or any failure to perform any covenants provided hereunder by any Party shall constitute a breach of this Agreement. The breaching Party shall be liable for any such breach pursuant to the applicable laws. On breach of covenants of agreement by defaulting party, consequently other party of the agreement will be discharged from all its obligations and liabilities from the moment breach is committed till the time breach is corrected.</li>
                    <li>This Agreement shall be binding and inure to the benefit of the Parties and their respective legal representatives, administrators, executors, and permitted assigns.</li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">7. REPRESENTATIONS AND WARRANTIES</h4>
                <div className="space-y-4">
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>On the Effective Date and as long as this Agreement is effective, the Service Provider hereby represents and warrants that the following representations and warranties are true, correct, valid and subsisting in all respects:</li>
                    <li>The Service Provider is competent and of valid age to enter into the Agreement with <strong>Idhar Udhar</strong> in the Location / territory in which Service Provider will provide the Vendor Services and may or may not be enrolled for any welfare schemes, as provided by any Governmental Authority and must share the requisite documents with <strong>Idhar Udhar</strong>, from time to time, for compliance purposes only.</li>
                    <li>The Service Provider must hold and maintain:
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>a valid rider's license (as applicable) with the appropriate level of certification(s) to operate the Vehicle driven / ridden; and</li>
                        <li>all license(s), permit(s), approval(s) and authority(ies), as applicable to the Vehicle that are necessary to provide the Vendor Services.</li>
                      </ol>
                    </li>
                    <li>You hereby provide consent to <strong>Idhar Udhar</strong> to access, use or share data and information including but not limited to location information, contacts information, transaction information, usage and preference information, device information, call and SMS data and log information related to the application of <strong>Idhar Udhar</strong>;</li>
                    <li>You have not been convicted by any Court, in the Location or the territory in which You are providing the Vendor Services, of any crimes / cases, including but not limited to involving moral turpitude. You are further not a party to any pending litigation, which shall materially affect your obligations under this Agreement;</li>
                    <li>Vendor/ rider as Service Provider hereby agree that their documents may be sent for background verification ("BGV") by <strong>Idhar Udhar</strong> and if there is any discrepancy / issue in the opinion of <strong>Idhar Udhar</strong>, found during or post BGV, this Agreement shall stand null and void with immediate effect at the sole discretion of <strong>Idhar Udhar</strong>.</li>
                    <li>The Service Provider further acknowledges and agrees that:
                      <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Idhar Udhar</strong> neither owns or in any way controls the Vehicles used by the Service Provider rendering the Vendor Services to <strong>Idhar Udhar</strong>, nor it controls the action(s) of the Service Provider providing the Vendor Services to <strong>Idhar Udhar</strong>, in case the Service Provider itself is not the rider.</li>
                        <li>Notwithstanding anything contained herein and in addition to the responsibilities of the Service Provider specifically in the segment of 2 (Two) wheeler Vehicles, the Service Provider who is also the rider of the Vehicles which may or may not be under his ownership as to the right, title and interest on the Vehicle, is responsible and liable for all loss or damages as to any matter arising to and from the Vehicle including the claims, demands, charges, expenses, show cause, detention, litigation and but not limited to objections, etc. as may be raised by a third party, family or related members, appropriate authorities, police functionary, etc. and shall keep <strong>Idhar Udhar</strong> indemnified from all such claims that have arisen during the term of this Agreement.</li>
                      </ol>
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">8. INDEMNITY AND LIABILITY</h4>
                <div className="space-y-4">
                  <p>You shall indemnify <strong>Idhar Udhar</strong> R from and against and in respect of any or all liabilities, losses, charges and expenses (including legal fees and costs on a full indemnity basis) claims in general and any provision which forms a part of this Agreement, demands, actions and proceedings, which <strong>Idhar Udhar</strong> may incur or sustain directly or indirectly from any breach by You of your obligations hereunder or any breach of your representations and warranties, or by any reason, or in real action to the provision or proposed provision of the Vendor Services and You shall forthwith pay all such sums forthwith on demand by <strong>Idhar Udhar</strong> in writing.</p>
                  <p>Notwithstanding any other provisions of this Agreement, You shall be liable to <strong>Idhar Udhar</strong> for indirect, special, or consequential damages arising out of or in connection with the provision of Vendor Services under this Agreement.</p>
                  <p>You agree that except for the reasons of Force Majeure, in the event of any loss or damage to <strong>Idhar Udhar</strong> that arises from the Vendor Services, You shall make good the loss, costs, charges, and expenses that <strong>Idhar Udhar</strong> may suffer or incur.</p>
                  <p>To the extent permissible under Applicable Laws, <strong>Idhar Udhar</strong> is not liable for any civil, criminal, tortious, or any other liability, that may accrue as a consequence of your breach (a) of the Applicable Laws while providing Vendor Services to <strong>Idhar Udhar</strong>; (b) of the terms of the applicable licenses and permits of the Vehicle(s) that are issued by the transport authorities; (c) of the terms of this Agreement.</p>
                  <p><strong>Idhar Udhar</strong>'s maximum liability to You in any event, which includes any failure by <strong>Idhar Udhar</strong> under this Agreement, shall be restricted and limited to a maximum amount of INR 500 (Indian Rupees Fiver Hundred Only) in the aggregate during the Term.</p>
                  <p>There will be no limitation of liability on your part at any point of time due to any indemnity provisions, as contained in this Agreement.</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">9. INTELLECTUAL PROPERTY RIGHTS</h4>
                <div className="space-y-4">
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Except as expressly set forth herein, as between the Parties, <strong>Idhar Udhar</strong> shall remain the owner of all intellectual property that it owns or controls as of the Effective Date or that it develops or acquires thereafter. Nothing in this Agreement will function to transfer any of either Party's intellectual property rights to the other Party and each Party will retain exclusive interest in and ownership of its intellectual property developed before this Agreement or developed outside the scope of this Agreement.</li>
                    <li>Any intellectual property rights created during the course of the Agreement shall be exclusively owned by <strong>Idhar Udhar</strong>.</li>
                    <li>All Intellectual Property Rights in relation to the branding/advertisement shall continue with <strong>Idhar Udhar</strong>. No part of this clause or this Agreement shall imply any license/assignment of the Intellectual Property Rights by <strong>Idhar Udhar</strong> to the Service Provider in respect of the <strong>Idhar Udhar</strong> logo.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Appendix B */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">APPENDIX B - ADDITIONAL TERMS AND CONDITIONS FOR 2W (TWO-WHEELER)</h3>
            <div className="space-y-6 text-gray-300">


              <div>
                <h4 className="font-bold mb-2">1. SCOPE</h4>
                <p>These Additional Terms and Conditions shall apply specifically to two-wheeler vehicles ("2W") used for providing Vendor Services under this Agreement.</p>
              </div>


              <div>
                <h4 className="font-bold mb-2">2. VEHICLE REQUIREMENTS</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">2.1.</span> The 2W shall:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Be registered as a commercial vehicle under the Motor Vehicles Act, 1988;</li>
                    <li>Have a valid fitness certificate;</li>
                    <li>Be less than 10 years old from the date of first registration;</li>
                    <li>Be in good working condition with all necessary safety features;</li>
                    <li>Have a valid pollution under control (PUC) certificate;</li>
                    <li>Have a minimum engine capacity of 100cc;</li>
                    <li>Be equipped with a secure storage box/compartment for goods transportation.</li>
                  </ol>

                  <p><span className="font-semibold">2.2.</span> The Service Provider acknowledges and agrees that the Vehicle shall:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>Operate in compliance with all applicable laws, circulars, and notifications;</li>
                    <li>Be properly registered, insured, and licensed for passenger transport/goods delivery;</li>
                    <li>Maintain engine operation during Vendor Services (except at origin/destination);</li>
                    <li>Adhere to prescribed speed limits;</li>
                    <li>Be maintained in good condition per industry safety standards;</li>
                    <li>Be kept clean and sanitary.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">3. OPERATIONAL REQUIREMENTS</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">3.1.</span> The Service Provider shall:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Ensure the maximum load capacity is not exceeded;</li>
                    <li>Secure all goods to prevent damage/loss;</li>
                    <li>Not carry passengers during Vendor Services;</li>
                    <li>Not transport hazardous/illegal items;</li>
                    <li>Wear a helmet and required safety gear;</li>
                    <li>Carry valid documents (driving license, registration, insurance, PUC).</li>
                  </ol>

                  <p><span className="font-semibold">3.2.</span> Additional obligations:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>Use personal/third-party Vehicles ("Service Provider Vehicle") at their own expense;</li>
                    <li>Ensure Vehicles are well-maintained to avoid service delays;</li>
                    <li>Bear all maintenance/running costs;</li>
                    <li>Possess valid driving licenses and registration (copies to be shared with <strong>Idhar Udhar</strong>).</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">4. INSURANCE</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">4.1.</span> The Service Provider shall maintain:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Personal accident cover (min. ₹5 lakhs for the rider);</li>
                    <li>Goods-in-transit insurance for consignments.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">5. LIABILITY & INDEMNIFICATION</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">5.1.</span> The Service Provider is solely liable for:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>Loss/damages, claims, or legal actions related to the Vehicle;</li>
                    <li>Compliance with laws (e.g., MV Act, traffic rules);</li>
                    <li>Providing Vehicle owner details (per Annexure A).</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">6. PAYMENT TERMS</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">6.1.</span> The Fees for 2W Vendor Services shall be as per the rates specified by <strong>Idhar Udhar</strong> from time to time, which may vary based on:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Distance traveled;</li>
                    <li>Time taken;</li>
                    <li>Weight and dimensions of the consignment;</li>
                    <li>Any additional services requested by the customer.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">7. FRAUD & MISCONDUCT</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">7.1.</span> Service Provider shall not commit any fraud while providing Vendor Services. <strong>Idhar Udhar</strong> reserves the right to:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>Terminate the Agreement for misconduct;</li>
                    <li>Disable Service Provider from undertaking Vendor Services;</li>
                    <li>Deduct undue gains from pay-outs or Security Deposit.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">8. REIMBURSEMENT POLICY</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">8.1.</span> Service Provider is not entitled to claim reimbursement for:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>Hospitalization/hospital bills during Vendor Services;</li>
                    <li>Accidents or illnesses (self or family).</li>
                  </ol>
                  <p><span className="font-semibold">8.2.</span> <strong>Idhar Udhar</strong> may, on a best-effort basis, reimburse limited legal expenses (max ₹5,000) subject to internal verification.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Appendix C */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">APPENDIX C - ADDITIONAL TERMS AND CONDITIONS FOR 3W (THREE-WHEELER) AND 4W (FOUR-WHEELER)</h3>
            <div className="space-y-6 text-gray-300">


              <div>
                <h4 className="font-bold mb-2">1. SCOPE</h4>
                <p>These Additional Terms and Conditions shall apply specifically to three-wheeler ("3W") and four-wheeler ("4W") vehicles used for providing Vendor Services under this Agreement.</p>
              </div>


              <div>
                <h4 className="font-bold mb-2">2. VEHICLE REQUIREMENTS</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">2.1.</span> The 3W/4W shall:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Be registered as a commercial vehicle under the Motor Vehicles Act, 1988;</li>
                    <li>Have a valid fitness certificate;</li>
                    <li>For 3W: Be less than 8 years old from the date of first registration;</li>
                    <li>For 4W: Be less than 10 years old from the date of first registration;</li>
                    <li>Be in good working condition with all necessary safety features;</li>
                    <li>Have a valid pollution under control (PUC) certificate;</li>
                    <li>Have adequate space for goods transportation as per <strong>Idhar Udhar</strong> specifications;</li>
                    <li>Be equipped with rope, ply, and hooks for efficient service;</li>
                    <li>For 4W: Have functioning GPS device (if required by <strong>Idhar Udhar</strong>).</li>
                  </ol>

                  <p><span className="font-semibold">2.2.</span> The Service Provider shall:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>Operate in full compliance with all applicable laws and regulations;</li>
                    <li>Wear seat belts while driving (for 4W);</li>
                    <li>Maintain pollution certifications;</li>
                    <li>Adhere to government-prescribed speed limits;</li>
                    <li>Verify consignment seals before departure and report any tampering immediately with FIR and photographic evidence;</li>
                    <li>Maintain vehicles in clean, sanitary condition meeting industry standards.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">3. OPERATIONAL REQUIREMENTS</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">3.1.</span> The Service Provider shall:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Never exceed maximum load capacity;</li>
                    <li>Properly secure all goods to prevent damage/loss;</li>
                    <li>Not carry unauthorized passengers;</li>
                    <li>Not transport hazardous/illegal items;</li>
                    <li>Carry valid documents (license, registration, insurance, PUC);</li>
                    <li>Conduct services with honesty and discipline per <strong>Idhar Udhar</strong> policies;</li>
                    <li>Never tamper with or open customer consignments.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">4. INSURANCE</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">4.1.</span> The Service Provider shall maintain:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Personal accident cover (min. ₹10 lakhs for rider);</li>
                    <li>Goods-in-transit insurance;</li>
                    <li>For 4W: Comprehensive insurance (third party + own damage);</li>
                    <li>Provide insurance policy copies to <strong>Idhar Udhar</strong>.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">5. LIABILITY & OWNERSHIP</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">5.1.</span> Service Provider acknowledges:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>May use personal/third-party vehicles at own expense;</li>
                    <li>Solely responsible for all vehicle-related expenses/claims;</li>
                    <li>Must provide vehicle owner details (per Annexure A);</li>
                    <li>Fully liable for any losses/damages/legal actions.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">6. PROHIBITED CONDUCT</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">6.1.</span> Service Provider shall not:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>Commit fraud or gain undue advantages;</li>
                    <li>Violate any terms of this Agreement;</li>
                    <li>Misbehave with staff/customers;</li>
                    <li>Engage in criminal activities;</li>
                    <li>Disclose confidential information;</li>
                    <li>Operate under influence of alcohol;</li>
                    <li>Damage <strong>Idhar Udhar</strong>'s reputation/assets;</li>
                    <li>Organize strikes/anti-company activities.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">7. PAYMENT TERMS</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">7.1.</span> Fees shall be based on:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Distance traveled;</li>
                    <li>Time taken;</li>
                    <li>Vehicle type (3W/4W);</li>
                    <li>Consignment weight/dimensions;</li>
                    <li>Additional services requested.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">8. REIMBURSEMENT POLICY</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">8.1.</span> Service Provider is <u>not</u> entitled to:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>Hospitalization/accident reimbursement;</li>
                    <li>Family medical expense claims.</li>
                  </ol>
                  <p><span className="font-semibold">8.2.</span> <strong>Idhar Udhar</strong> may reimburse limited legal expenses (max ₹10,000) subject to:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>Case-by-case verification;</li>
                    <li>Internal investigation approval.</li>
                  </ol>
                </div>
              </div>


              <div>
                <h4 className="font-bold mb-2">9. TERMINATION CLAUSES</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">9.1.</span> <strong>Idhar Udhar</strong> may terminate for:</p>
                  <ol className="list-disc pl-6 space-y-2">
                    <li>Violation of these terms;</li>
                    <li>Negative background checks;</li>
                    <li>Fraud/misconduct;</li>
                    <li>Absconding with company assets;</li>
                    <li>Failure to meet service standards.</li>
                  </ol>
                </div>
              </div>

            </div>
          </div>

          <div className="mb-12 space-y-8">

            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-center">ANNEXURE 1A</h3>
              <h4 className="text-lg font-semibold mb-4 text-center">(Details of Vehicles and riders with No Objection Certificate)</h4>

             
              <div className="mb-6">
                <h5 className="font-bold mb-3 underline">1. VEHICLE DETAILS</h5>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium w-1/3">a. Vehicle Mfg year:</td>
                      <td className="py-2">As per the attached Vehicle documents</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">b. Vehicle Model:</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">c. Vehicle Registration No:</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">d. Vehicle owner:</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-sm">Copy of all documents to be attached</p>
              </div>

              
              <div className="mb-6">
                <h5 className="font-bold mb-3 underline">2. SERVICE PROVIDER DETAILS</h5>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium w-1/3">a. Is owner the service provider?</td>
                      <td className="py-2">Y / N <span className="text-gray-400">[Circle one]</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium align-top">b. If No, provide:</td>
                      <td className="py-2">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Name, address and contact details of service provider</li>
                          <li>No Objection Certificate from vehicle owner (appended)</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              
              <div className="mb-6">
                <h5 className="font-bold mb-3 underline">3. rider DETAILS</h5>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 font-medium bg-gray-800">
                      <th className="py-2 text-left">Particulars</th>
                      <th className="py-2 text-left">Details</th>
                    </tr> 
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">rider's Name</td>
                      <td className="py-2"><span className="text-gray-400">[As per documents attached]</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Contact Number (<strong>Idhar Udhar</strong>)</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Personal Contact Number</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">License Number</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">License Expiration Date</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr>
                      <td className="py-2">Aadhaar No of rider</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              
              <div className="mb-6">
                <h5 className="font-bold mb-3 underline">4. BANK ACCOUNT DETAILS</h5>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 font-medium bg-gray-800">
                      <th className="py-2 text-left w-1/3">Particulars</th>
                      <th className="py-2 text-left">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Bank Name</td>
                      <td className="py-2"><span className="text-gray-400">[As per documents attached]</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Account No.</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Account Holder's Name</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Branch Name & Address</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr>
                      <td className="py-2">IFSC Code</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              
              <div className="mb-6">
                <h5 className="font-bold mb-3 underline">5. STATUTORY DETAILS</h5>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 font-medium bg-gray-800">
                      <th className="py-2 text-left w-1/3">Particulars</th>
                      <th className="py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Permanent Account Number</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">GSTIN (if any)</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Aadhaar No (if any)</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                    <tr>
                      <td className="py-2">CIN (if any)</td>
                      <td className="py-2"><span className="text-gray-400">[To be filled]</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              
              <div>
                <h5 className="font-bold mb-3 underline">6. DOCUMENTS ATTACHED</h5>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Cancelled cheque (Service Provider bank details)</li>
                  <li>Copy of PAN Card (Service Provider)</li>
                  <li>Proof of GSTIN (Service Provider)</li>
                  <li>Copy of Driving License (rider)</li>
                  <li>Copy of Aadhaar Card (Service Provider & rider)</li>
                  <li>Vehicle Registration Certificate</li>
                  <li>PUC Certificate</li>
                  <li>Fitness Certificate</li>
                </ol>
              </div>

              
              <div className="mt-8 p-4 border-t-2 border-gray-200">
                <p className="text-sm italic">For & on behalf of the Service Provider, I declare that the above information is correct. Any changes will be duly informed to <strong>Idhar Udhar</strong> in advance.</p>
              </div>
            </div>

            
            <div className="border border-gray-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-6 text-center">ANNEXURE 1B</h3>
              <h4 className="text-lg font-semibold mb-4 text-center">NO OBJECTION CERTIFICATE</h4>
              <div className="space-y-4">
                <p>TO WHOM IT MAY CONCERN,</p>
                <p>I am the owner of the Vehicle (Details as per Annexure 1A). I hereby authorize the Service Provider to:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Engage my Vehicle under the Service Agreement with <strong>Idhar Udhar</strong>;</li>
                  <li>Collect all payments/compensation for services rendered;</li>
                </ol>
                <p>I confirm no objection to any commercial transactions between the Service Provider and <strong>Idhar Udhar</strong> involving my Vehicle.</p>
                <div className="mt-8">
                  <p>Thanking You,</p>
                  <div className="mt-6">
                    <p className="font-medium">Owner Name: <span className="text-gray-400">[As per document attached]</span></p>
                    <p className="font-medium mt-2">Phone Number: <span className="text-gray-400">[As per document attached]</span></p>
                    <div className="mt-4 pt-4 border-t border-gray-200 w-1/2">
                      <p className="text-sm">Signature</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesAgreement;