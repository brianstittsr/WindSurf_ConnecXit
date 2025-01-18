import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Link from "next/link";

export default function CXTSignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "individual", // or "business"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement signup logic
  };

  return (
    <Layout title="ConnecXit - Sign Up">
      <Helmet>
        <title>Sign Up for ConnecXit - Event Planning Platform</title>
        <meta
          name="description"
          content="Create your ConnecXit account to start planning events, connecting with vendors, and growing your network."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Container>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="/images/logo.png"
              alt="ConnecXit"
            />
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/CXTLogin"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <Card className="py-8 px-4 sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Account Type Selection */}
                <div className="flex gap-4">
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="accountType"
                      value="individual"
                      checked={formData.accountType === "individual"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`p-4 text-center rounded-lg border-2 cursor-pointer transition-colors ${
                      formData.accountType === "individual"
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}>
                      Individual
                    </div>
                  </label>
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="accountType"
                      value="business"
                      checked={formData.accountType === "business"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`p-4 text-center rounded-lg border-2 cursor-pointer transition-colors ${
                      formData.accountType === "business"
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}>
                      Business
                    </div>
                  </label>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="First name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                  />
                  <Input
                    label="Last name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                  />
                </div>

                {/* Email Field */}
                <Input
                  label="Email address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />

                {/* Password Fields */}
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                />

                <Input
                  label="Confirm password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                />

                {/* Terms and Privacy */}
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-500">
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Create account
                </Button>
              </form>

              {/* Social Sign Up */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => {
                      // TODO: Implement Google signup
                    }}
                  >
                    <span className="sr-only">Sign up with Google</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                    </svg>
                  </Button>

                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => {
                      // TODO: Implement Apple signup
                    }}
                  >
                    <span className="sr-only">Sign up with Apple</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.152,6.896c-0.948,0-2.415-1.078-3.96-1.04c-2.04,0.027-3.91,1.183-4.961,3.014c-2.117,3.675-0.546,9.103,1.519,12.09c1.013,1.454,2.208,3.09,3.792,3.039c1.52-0.065,2.09-0.987,3.935-0.987c1.831,0,2.35,0.987,3.96,0.948c1.637-0.026,2.676-1.48,3.676-2.948c1.156-1.688,1.636-3.325,1.662-3.415c-0.039-0.013-3.182-1.221-3.22-4.857c-0.026-3.04,2.48-4.494,2.597-4.559c-1.429-2.09-3.623-2.324-4.39-2.376C14.979,5.855,13.3,6.896,12.152,6.896z M15.629,3.809c0.837-1.013,1.403-2.427,1.247-3.83c-1.207,0.052-2.662,0.805-3.532,1.818c-0.78,0.896-1.456,2.323-1.273,3.714C13.378,5.587,14.774,4.82,15.629,3.809z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
