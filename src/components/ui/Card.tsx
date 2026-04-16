import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div {...props} className={`bg-surface-container-lowest rounded-xl card-shadow p-6 ${className}`}>
    {children}
  </div>
);
