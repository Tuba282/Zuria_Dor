import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/store';
import { AuthProvider } from './context/AuthContext';

import UserLayout from './layouts/UserLayout';
import VendorLayout from './layouts/VendorLayout';
import GuestLayout from './layouts/GuestLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './screens/Home/Home';
import About from './screens/About/About';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <Provider store={store} >
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public/Guest Routes */}
            <Route element={<GuestLayout />}>
              <Route path="/login" element={<div>Login Page</div>} />
            </Route>

            {/* User Layout Routes (e-commerce pages) */}
            <Route element={<UserLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>

            {/* Vendor Routes */}
            <Route path="/vendor" element={<VendorLayout />}>
              <Route index element={<div>Vendor Dashboard</div>} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute isAllowed={true} redirectPath="/login">
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<div>Admin Dashboard</div>} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
