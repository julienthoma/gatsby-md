import React from 'react';

export default {
  p: props => (
    <p
      {...props}
      style={{
        fontSize: 16,
        lineHeight: '28px',
        color: 'rgb(54, 49, 61)'
      }}
    />
  ),
  a: props => (
    <a
      {...props}
      style={{
        textDecoration: 'none',
        color: '#8a4baf',
        boxShadow: '0 1px 0 0 currentColor'
      }}
    />
  ),
  inlineCode: props => (
    <code
      style={{
        background: 'rgb(251, 242, 233)',
        borderRadius: 3,
        padding: '3px 5px'
      }}
    >
      {props.children}
    </code>
  )
};
