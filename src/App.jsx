import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./styles/font.css";
import "./styles/index.css";
import CXTLanding from "./pages/CXTLanding";
import CXTSignUp from "./pages/CXTSignUp";
import CTXEventTickets from "./pages/CTXEventTickets";
import CXTListPage from "./pages/CXTListPage";
import CXTDetailPage from "./pages/CXTDetailPage";
import AdminPage from "./pages/admin";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Switch>
            <Route path="/" element={<CXTLanding />} />
            <Route path="/signup" element={<CXTSignUp />} />
            <Route path="/ctxeventtickets" element={<CTXEventTickets />} />
            <Route path="/cxtlistpage" element={<CXTListPage />} />
            <Route path="/cxtdetailpage" element={<CXTDetailPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFound />} />
          </Switch>
        </Router>
      </React.Suspense>
    </GoogleOAuthProvider>
  );
}

export default App;
