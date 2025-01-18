import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Link from "next/link";

export default function VerifyEmailPage() {
  const [verificationStatus, setVerificationStatus] = useState("pending"); // pending, success, error
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    // Start countdown timer
    if (timer > 0 && verificationStatus === "pending") {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, verificationStatus]);

  const handleResendVerification = () => {
    // TODO: Implement resend verification logic
    setTimer(60);
  };

  return (
    <Layout title="ConnecXit - Verify Email">
      <Helmet>
        <title>Verify Your Email - ConnecXit</title>
        <meta
          name="description"
          content="Verify your email address to complete your ConnecXit account registration."
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
              Verify your email
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              We've sent a verification link to your email address
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <Card className="py-8 px-4 sm:px-10">
              <div className="space-y-6">
                {verificationStatus === "pending" && (
                  <>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
                        <svg
                          className="w-8 h-8 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h2 className="mt-4 text-lg font-medium text-gray-900">
                        Check your inbox
                      </h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Click the link in the email we sent you to verify your account
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-sm text-center text-gray-500">
                        Didn't receive the email?{" "}
                        {timer > 0 ? (
                          <span>Resend in {timer}s</span>
                        ) : (
                          <button
                            onClick={handleResendVerification}
                            className="text-blue-600 hover:text-blue-500 font-medium"
                          >
                            Click to resend
                          </button>
                        )}
                      </p>
                    </div>
                  </>
                )}

                {verificationStatus === "success" && (
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="mt-4 text-lg font-medium text-gray-900">
                      Email verified successfully!
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Your email has been verified. You can now access all features.
                    </p>
                    <div className="mt-6">
                      <Button
                        variant="primary"
                        className="w-full"
                        onClick={() => {
                          // TODO: Redirect to dashboard
                        }}
                      >
                        Go to Dashboard
                      </Button>
                    </div>
                  </div>
                )}

                {verificationStatus === "error" && (
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
                      <svg
                        className="w-8 h-8 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <h2 className="mt-4 text-lg font-medium text-gray-900">
                      Verification failed
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      The verification link may have expired or is invalid.
                    </p>
                    <div className="mt-6">
                      <Button
                        variant="primary"
                        className="w-full"
                        onClick={handleResendVerification}
                      >
                        Resend Verification Email
                      </Button>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <Link
                    href="/help"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Need help?
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
