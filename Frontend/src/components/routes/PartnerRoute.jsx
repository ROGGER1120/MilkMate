import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * A route component that only allows partners to access
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 */
export default function PartnerRoute({ children }) {
  // This is a simplified implementation - in a real app, you would check authentication status
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userRole = localStorage.getItem('userRole');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (userRole !== 'partner') {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return children;
}