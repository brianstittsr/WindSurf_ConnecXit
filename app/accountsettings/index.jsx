import React from "react";
import Layout from "../components/Layout";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const CXTAccountSettings = () => {
  return (
    <Layout title="ConnecXit - Account Settings">
      <Container>
        <div className="py-8 md:py-12">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Account Settings
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Manage your account settings and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Navigation Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <nav className="space-y-1">
                  <a
                    href="#profile"
                    className="block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md"
                  >
                    Profile Information
                  </a>
                  <a
                    href="#security"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Security
                  </a>
                  <a
                    href="#notifications"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Notifications
                  </a>
                  <a
                    href="#billing"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Billing
                  </a>
                </nav>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Section */}
              <Card>
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Profile Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="First name"
                      type="text"
                      defaultValue="John"
                    />
                    <Input
                      label="Last name"
                      type="text"
                      defaultValue="Doe"
                    />
                    <Input
                      label="Email"
                      type="email"
                      defaultValue="john@example.com"
                      className="md:col-span-2"
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="md:col-span-2"
                    />
                  </div>
                  <div className="mt-6">
                    <Button variant="primary">Save Changes</Button>
                  </div>
                </div>
              </Card>

              {/* Security Section */}
              <Card>
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Security
                  </h2>
                  <div className="space-y-6">
                    <Input
                      label="Current Password"
                      type="password"
                      placeholder="Enter current password"
                    />
                    <Input
                      label="New Password"
                      type="password"
                      placeholder="Enter new password"
                    />
                    <Input
                      label="Confirm New Password"
                      type="password"
                      placeholder="Confirm new password"
                    />
                  </div>
                  <div className="mt-6">
                    <Button variant="primary">Update Password</Button>
                  </div>
                </div>
              </Card>

              {/* Notifications Section */}
              <Card>
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Notification Preferences
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="email-notifications"
                          name="email-notifications"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="email-notifications"
                          className="font-medium text-gray-700"
                        >
                          Email Notifications
                        </label>
                        <p className="text-gray-500">
                          Receive email updates about your account activity
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="marketing-emails"
                          name="marketing-emails"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="marketing-emails"
                          className="font-medium text-gray-700"
                        >
                          Marketing Emails
                        </label>
                        <p className="text-gray-500">
                          Receive emails about new features and special offers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button variant="primary">Save Preferences</Button>
                  </div>
                </div>
              </Card>

              {/* Danger Zone */}
              <Card>
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-red-600 mb-4">
                    Danger Zone
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <Button
                    variant="secondary"
                    className="!text-red-600 !border-red-600 hover:!bg-red-50"
                  >
                    Delete Account
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CXTAccountSettings;
