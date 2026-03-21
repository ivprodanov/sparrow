import React from "react";
import { Thing } from "./Thing";

export const Modal = ({ children, title, isOpen, onClose, variant = "neutral", className = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
      display: 'grid', placeItems: 'center', zIndex: 10000, padding: '1rem'
    }}>
      <Thing 
        description={`medium-sized ${variant} rounded card`} 
        className={`shadow-xl w-full ${className}`}
        style={{ maxWidth: '500px' }}
        cardTitle={title}
      >
        <div className="p-y-400">
          {children}
        </div>
        <div className="row justify-content-end m-t-400" style={{ gap: '12px' }}>
          <Thing description="small neutral rounded button" event={onClose}>Cancel</Thing>
          <Thing description="small primary rounded button" event={onClose}>Confirm</Thing>
        </div>
      </Thing>
    </div>
  );
};