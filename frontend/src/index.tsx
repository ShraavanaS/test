import React from 'react';
import ReactDOM from 'react-dom/client';

export const App = () => {
  return <div>Glanceable Dashboard</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
