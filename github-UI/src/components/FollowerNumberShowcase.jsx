import React from 'react';
import '../style/followernumbershowcase.css';

export default function FollowerNumberShowcase({ label, value }) {
  return (

    <div className="stat-card">
      <div className="stat-card__label">{label }</div>
      <div className="stat-card__value">{value || 0}</div>
    </div>
  );
}
