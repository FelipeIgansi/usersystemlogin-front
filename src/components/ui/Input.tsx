// components/ui/Input.tsx
import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  required = false
}) => {
  return (
    <div className="mb-3">
      <label className="form-label visually-hidden">{placeholder}</label>
      <div className="input-group">
        {icon && <span className="input-group-text">{icon}</span>}
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          required={required}
        />
      </div>
    </div>
  );
};