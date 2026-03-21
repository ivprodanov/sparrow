import React, { useState } from 'react';

const FileUpload = ({
  label = 'Choose a file',
  variant = 'primary',
  size = 'md',
  className = '',
  onChange
}) => {
  // Local state to show the user what file they selected
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
    if (onChange) onChange(e);
  };

  const baseClassNames = `file-upload file-upload-${variant} file-upload-${size}`;
  const combinedClasses = `${baseClassNames} ${className}`.trim();

  return (
    <div className="file-upload-wrapper">
      <label className={combinedClasses}>
        {/* We visually hide the actual input, but it remains clickable via the label */}
        <input 
          type="file" 
          className="file-upload-input visually-hidden" 
          onChange={handleFileChange} 
        />
        <span className="file-upload-text">
          {fileName ? fileName : label}
        </span>
      </label>
    </div>
  );
};

export default FileUpload;