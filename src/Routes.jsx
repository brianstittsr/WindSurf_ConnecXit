import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import CXTLanding from "pages/CXTLanding";
import Inbox from "pages/Inbox";
import Account from "pages/Account";
import AccountOne from "pages/AccountOne";
import AccountTwo from "pages/AccountTwo";
import Frame from "pages/Frame";
import FrameOne from "pages/FrameOne";
import FrameTwo from "pages/FrameTwo";
import FrameThree from "pages/FrameThree";
import CXTLogin from "pages/CXTLogin";
import CXTSignUp from "pages/CXTSignUp";
import CXTSignUpWizard from "pages/CXTSignUpWizard";
import CXTSignUpProfileInfo from "pages/CXTSignUpProfileInfo";
import CXTSignUpProfileInfoOne from "pages/CXTSignUpProfileInfoOne";
import CXTAccountSettings from "pages/CXTAccountSettings";
import CXTBilling from "pages/CXTBilling";
import CXTListPage from "pages/CXTListPage";
import CXTDetailPage from "pages/CXTDetailPage";
import Search from "pages/Search";
import ResultList from "pages/ResultList";
import CXTInbox from "pages/CXTInbox";
import AdminPage from "pages/admin";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <CXTLanding />,
    },
    {
      path: "inbox",
      element: <Inbox />,
    },
    {
      path: "account",
      element: <Account />,
    },
    {
      path: "accountone",
      element: <AccountOne />,
    },
    {
      path: "accounttwo",
      element: <AccountTwo />,
    },
    {
      path: "frame",
      element: <Frame />,
    },
    {
      path: "frameone",
      element: <FrameOne />,
    },
    {
      path: "frametwo",
      element: <FrameTwo />,
    },
    {
      path: "framethree",
      element: <FrameThree />,
    },
    {
      path: "cxtlogin",
      element: <CXTLogin />,
    },
    {
      path: "cxtsignup",
      element: <CXTSignUp />,
    },
    {
      path: "cxtsignupwizard",
      element: <CXTSignUpWizard />,
    },
    {
      path: "cxtsignupprofileinfo",
      element: <CXTSignUpProfileInfo />,
    },
    {
      path: "cxtsignupprofileinfoone",
      element: <CXTSignUpProfileInfoOne />,
    },
    {
      path: "cxtaccountsettings",
      element: <CXTAccountSettings />,
    },
    {
      path: "cxtbilling",
      element: <CXTBilling />,
    },
    {
      path: "cxtlistpage",
      element: <CXTListPage />,
    },
    {
      path: "cxtdetailpage",
      element: <CXTDetailPage />,
    },
    {
      path: "search",
      element: <Search />,
    },
    {
      path: "resultlist",
      element: <ResultList />,
    },
    {
      path: "cxtinbox",
      element: <CXTInbox />,
    },
    {
      path: "admin",
      element: <AdminPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
