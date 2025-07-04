import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Invoice = () => {
  const invoiceData = {
    number: 'CRN31947556073',
    date: '31 May 2025',
    fare: 198.09,
    discount: 0,
    sgst: 0,
    cgst: 0,
    rounding: -0.09,
    netFare: 198,
    consignor: {
      name: 'AZAZKHAN PATHAN',
      company: 'NOT AVAILABLE',
      gstin: 'NOT AVAILABLE',
      address: 'NOT AVAILABLE',
    },
    consignee: 'RAVI KHIMANI & ASSOCIATE',
    goods: 'FMCG / FOOD PRODUCTS',
    packaging: 'LOOSE',
    vehicle: '2 Wheeler | GJ-01-PW-1891',
    pickup: {
      time: '02:12 PM, 31/05/2025',
      address:
        'Kadi Park, 12, Nayi Fatehwadi, Near Fatehwadi Village, Sarkhej, Ahmedabad, Gujarat 382210, India',
    },
    drop: {
      time: '03:52 PM, 31/05/2025',
      address:
        '111, Pink Grapes Fashion Hub, Khodiyar Mandir, Nikol - Naroda Rd, Nicol Gam, Ahmedabad, India',
    },
  };

  const downloadAsPDF = () => {
    const input = document.getElementById('invoice-container');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${invoiceData.number}_invoice.pdf`);
    });
  };

  return (
    <>
      <div
        id="invoice-container"
        className="bg-white max-w-[950px] mx-auto mt-20 p-8 border shadow-md rounded-lg text-black font-sans"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <img src="/images/Idhar Udhar Logo.png" alt="Logo" className="h-20" />
            <div>
              <h1 className="text-2xl font-bold text-sky-700">IDHAR UDHAR</h1>
              <p className="text-sm text-gray-600">Trips Ho Ya Parcels, Ab Sab Kuch Jayega Idhar Se Udhar!</p>
            </div>
          </div>
          <div className="text-sm text-right text-slate-700 space-y-1">
            <div className="flex justify-between gap-2"><strong>Invoice No:</strong><span>{invoiceData.number}</span></div>
            <div className="flex justify-between gap-2"><strong>Date:</strong><span>{invoiceData.date}</span></div>
          </div>
        </div>

        {/* Fare & Consignor */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm space-y-2">
            <h2 className="text-sky-700 font-semibold text-base border-b pb-2 mb-3">Consignor Details</h2>
            <div className="flex justify-between"><span>CONSIGNOR NAME:</span><span>{invoiceData.consignor.name}</span></div>
            <div className="flex justify-between"><span>COMPANY NAME:</span><span>{invoiceData.consignor.company}</span></div>
            <div className="flex justify-between"><span>GSTIN:</span><span>{invoiceData.consignor.gstin}</span></div>
            <div className="flex justify-between"><span>ADDRESS:</span><span className="text-right">{invoiceData.consignor.address}</span></div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm space-y-2">
            <h2 className="text-sky-700 font-semibold text-base border-b pb-2 mb-3">Fare Summary</h2>
            <div className="flex justify-between"><span>Trip Fare:</span><span>₹{invoiceData.fare}</span></div>
            <div className="flex justify-between"><span>Discount:</span><span>₹{invoiceData.discount}</span></div>
            <div className="flex justify-between"><span>SGST:</span><span>₹{invoiceData.sgst}</span></div>
            <div className="flex justify-between"><span>CGST:</span><span>₹{invoiceData.cgst}</span></div>
            <div className="flex justify-between"><span>Rounding:</span><span>₹{invoiceData.rounding}</span></div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-green-700 text-base"><span>Net Fare:</span><span>₹{invoiceData.netFare}</span></div>
            <p className="text-xs text-gray-500 italic mt-2">Fare revised due to loading/unloading time.</p>
          </div>
        </div>

        {/* Goods & Vehicle */}
        <div className="grid md:grid-cols-2 gap-6 text-sm mb-6">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-2">
            <h2 className="text-sky-700 font-semibold text-base border-b pb-2 mb-3">Consignee & Goods</h2>
            <div className="flex justify-between"><span>CONSIGNEE:</span><span>{invoiceData.consignee}</span></div>
            <div className="flex justify-between"><span>NATURE OF GOODS:</span><span>{invoiceData.goods}</span></div>
            <div className="flex justify-between"><span>PACKAGING:</span><span>{invoiceData.packaging}</span></div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-2">
            <h2 className="text-sky-700 font-semibold text-base border-b pb-2 mb-3">Vehicle</h2>
            <div className="flex justify-between"><span>VEHICLE:</span><span>{invoiceData.vehicle}</span></div>
          </div>
        </div>

        {/* Pickup & Drop */}
        <div className="grid md:grid-cols-2 gap-6 text-sm mb-10">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h2 className="text-green-700 font-semibold text-base border-b pb-2 mb-3">Pickup Location</h2>
            <div className="flex justify-between"><span>Time:</span><span>{invoiceData.pickup.time}</span></div>
            <p className="text-xs text-gray-700 mt-2"><strong>Address:</strong><br />{invoiceData.pickup.address}</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h2 className="text-red-700 font-semibold text-base border-b pb-2 mb-3">Drop Location</h2>
            <div className="flex justify-between"><span>Time:</span><span>{invoiceData.drop.time}</span></div>
            <p className="text-xs text-gray-700 mt-2"><strong>Address:</strong><br />{invoiceData.drop.address}</p>
          </div>
        </div>

        {/* Map Image */}
        <div className="rounded-lg overflow-hidden border border-slate-200 mb-10">
          <img src="/Images/route.png" alt="Route Map" className="w-full h-auto object-cover" />
        </div>

        {/* Declaration */}
        <div className="text-xs text-slate-600 leading-relaxed border-t pt-4">
          <p className="mb-2">
            <strong>DECLARATION:</strong> Though our turnover may exceed the limits defined under rule 48(4), we are not required to generate invoices accordingly.
          </p>
          <p>
            All inputs (consignee, goods info, etc.) are provided by the user. We declare no ITC has been claimed on capital goods or services used. Visit{' '}
            <a href="https://idharudhar.in/terms-of-service" className="text-blue-600 underline">idharudhar.in/terms-of-service</a>
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between mt-8 pt-6 border-t text-xs gap-6">
          <div className="flex items-start gap-4">
            <img src="/images/qr.jpg" alt="QR Code" className="w-24 h-auto rounded border" />
            <div>
              <p className="font-bold text-slate-800">Idhar Udhar Logistics Pvt. Ltd.</p>
              <p>304, Sachet-IV, Nr. Satellite, Prernatirth Derasar, Ahmedabad-380015</p>
              <p>GSTIN: 24AAGCR8772D2Z7 | SAC: 996511</p>
              <p>CIN: U74999MH2014PTC306120 | PAN: AAGCR8772D</p>
            </div>
          </div>
          <div className="text-right space-y-1">
            <p className="text-sky-800 font-semibold">help@idharudhar.in</p>
            <p><a href="https://idharudhar.in" className="text-blue-600 underline">idharudhar.in</a></p>
            <p>📞 +91 2244104406</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center mt-10">
        <button
          onClick={downloadAsPDF}
          className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition mb-4"
        >
          Download Invoice as PDF
        </button>
      </div>
    </>
  );
};

export default Invoice;
