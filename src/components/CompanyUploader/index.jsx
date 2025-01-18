import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useQuery, useMutation } from 'react-query';
import { uploadCSV, searchCompanies } from '../../services/neo4jService';

export const CompanyUploader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // File upload mutation
  const uploadMutation = useMutation(uploadCSV, {
    onSuccess: () => {
      alert('CSV uploaded successfully!');
    },
    onError: (error) => {
      alert(`Error uploading CSV: ${error.message}`);
    },
  });

  // Company search query
  const { data: companies, isLoading } = useQuery(
    ['companies', searchTerm],
    () => searchCompanies(searchTerm),
    {
      enabled: searchTerm.length > 0,
    }
  );

  // File drop handler
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onabort = () => console.log('File reading was aborted');
    reader.onerror = () => console.log('File reading has failed');
    reader.onload = () => {
      uploadMutation.mutate(reader.result);
    };

    reader.readAsText(file);
  }, [uploadMutation]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
    },
    multiple: false,
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Company Data Management</h2>
      
      {/* File Upload Section */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-6 mb-8 text-center cursor-pointer
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the CSV file here...</p>
        ) : (
          <p>Drag and drop a CSV file here, or click to select a file</p>
        )}
      </div>

      {/* Search Section */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search companies..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Results Section */}
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : companies?.length > 0 ? (
          <ul className="space-y-4">
            {companies.map((company, index) => (
              <li key={index} className="p-4 border rounded">
                <h3 className="font-bold">{company.name}</h3>
                <p className="text-gray-600">{company.description}</p>
              </li>
            ))}
          </ul>
        ) : searchTerm && (
          <p>No companies found</p>
        )}
      </div>
    </div>
  );
};
