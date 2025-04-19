import React, { useState } from 'react';

export default function CdBookingPanel() {
  const [formData, setFormData] = useState({
    customer: '', origin: '', destination: '', boxes: '', length: '', breadth: '', height: '',
    volume: '', weight: '', value: '', contents: '', pickup: false, driver: '',
    remarks: '', awbType: 'Manifest', awbNumber: '', rateType: 'AWB Discount'
  });

  const calculateVolume = () => {
    const { length, breadth, height } = formData;
    const volume = ((+length || 0) * (+breadth || 0) * (+height || 0) * (+formData.boxes || 1)) / 6000;
    return volume.toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Saved');
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6">CD Booking Panel</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="customer" placeholder="Customer Name" onChange={handleChange} className="p-2 border rounded" />
          <input name="origin" placeholder="Origin" onChange={handleChange} className="p-2 border rounded" />
          <input name="destination" placeholder="Destination" onChange={handleChange} className="p-2 border rounded" />
          <input name="boxes" type="number" placeholder="No. of Boxes" onChange={handleChange} className="p-2 border rounded" />
          <input name="length" type="number" placeholder="Length (cm)" onChange={handleChange} className="p-2 border rounded" />
          <input name="breadth" type="number" placeholder="Breadth (cm)" onChange={handleChange} className="p-2 border rounded" />
          <input name="height" type="number" placeholder="Height (cm)" onChange={handleChange} className="p-2 border rounded" />
          <input name="volume" value={calculateVolume()} readOnly className="p-2 border rounded bg-gray-100" />
          <input name="weight" type="number" placeholder="Weight (kg)" onChange={handleChange} className="p-2 border rounded" />
          <input name="value" type="number" placeholder="Declared Value (INR)" onChange={handleChange} className="p-2 border rounded" />
          <input name="contents" placeholder="Contents" onChange={handleChange} className="p-2 border rounded" />
          <div className="flex items-center gap-2">
            <input type="checkbox" name="pickup" onChange={handleChange} className="h-5 w-5" />
            <label>Pickup Required</label>
          </div>
          <input name="driver" placeholder="Driver Assigned" onChange={handleChange} className="p-2 border rounded" />
          <textarea name="remarks" placeholder="Remarks" onChange={handleChange} className="p-2 border rounded col-span-1 md:col-span-2" />

          <select name="awbType" onChange={handleChange} className="p-2 border rounded">
            <option value="Manifest">Manifest</option>
            <option value="Direct">Direct</option>
          </select>

          {formData.awbType === 'Direct' && (
            <input name="awbNumber" placeholder="AWB Number" onChange={handleChange} className="p-2 border rounded" />
          )}

          <select name="rateType" onChange={handleChange} className="p-2 border rounded">
            <option value="AWB Discount">AWB Discount</option>
            <option value="SSP">SSP</option>
            <option value="Flat Rate">Flat Rate</option>
          </select>

          <button type="submit" className="mt-4 p-3 bg-blue-600 text-white rounded hover:bg-blue-700 col-span-1 md:col-span-2">
            Save Booking
          </button>
        </form>
      </div>
    </div>
  );
}