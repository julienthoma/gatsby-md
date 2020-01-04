import React from 'react';
import 'antd/dist/antd.css';

export default ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <div
      style={{
        padding: 20,
        maxWidth: 624
      }}
    >
      {children}
    </div>
  </div>
);
