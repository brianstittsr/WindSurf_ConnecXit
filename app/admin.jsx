import React, { useState } from 'react';

const AdminPage = () => {
  const [uploadStats, setUploadStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUploadCSV = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/upload-csv', {
        method: 'POST',
      });
      const data = await response.json();
      console.log('CSV Upload Response:', data);
      setUploadStats(data);
      alert('CSV data uploaded successfully!');
    } catch (error) {
      console.error('Error uploading CSV:', error);
      alert('Error uploading CSV data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <button 
        onClick={handleUploadCSV}
        disabled={loading}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Uploading...' : 'Upload CSV to Neo4j'}
      </button>

      {uploadStats && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold mb-2">Upload Statistics</h2>
          <ul className="space-y-2">
            <li>Total Records in CSV: {uploadStats.totalRecords}</li>
            <li>Successfully Uploaded: {uploadStats.successfullyUploaded}</li>
            <li>Final Database Count: {uploadStats.finalDatabaseCount}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
