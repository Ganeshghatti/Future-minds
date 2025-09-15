import React, { useEffect } from "react";

const TermsandConditions = () => {
    useEffect(()=>{
      scrollTo(0,0);
    },[])
  return (
    <div className="bg-gray-50 text-start min-h-screen py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-start bg-white text-black shadow-lg rounded-2xl p-8 md:p-12">
        <div className="w-full text-center mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Terms and Conditions
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Last updated: September 15, 2025
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to [Your Company Name]! These Terms and Conditions outline the
          rules and regulations for the use of our website, products, and
          services. By accessing or using our services, you agree to comply with
          and be bound by these terms. If you disagree with any part of the
          terms, you may not access our services.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          1. Use of Services
        </h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          You agree to use our services only for lawful purposes. You must not
          use our platform in any way that may damage, disable, or impair the
          functionality of our services, or interfere with another user's
          experience.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          2. User Accounts
        </h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          To access certain features, you may be required to create an account.
          You are responsible for maintaining the confidentiality of your login
          information and all activities under your account. We reserve the
          right to suspend or terminate accounts found in violation of these
          terms.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          3. Intellectual Property
        </h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          All content, trademarks, logos, and intellectual property on our
          website are the property of [Your Company Name] unless otherwise
          stated. Unauthorized use, reproduction, or distribution is strictly
          prohibited.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          4. Payments and Refunds
        </h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you purchase any product or service, you agree to provide accurate
          payment information. Payments must be made in full at the time of
          purchase. Refunds will be processed according to our{" "}
          <span className="font-medium">Refund Policy</span>.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          5. Limitation of Liability
        </h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          We are not liable for any damages, losses, or issues arising from your
          use of our services. Our liability is limited to the maximum extent
          permitted by law.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          6. Termination
        </h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          We reserve the right to suspend or terminate access to our services at
          our discretion, without notice, if you violate these Terms and
          Conditions.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          7. Governing Law
        </h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of [Insert Jurisdiction]. Any disputes will
          be subject to the exclusive jurisdiction of the courts in that
          location.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          8. Changes to Terms
        </h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          We reserve the right to update or modify these Terms and Conditions at
          any time. Changes will be effective immediately upon posting on our
          website. Please review this page periodically for updates.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          9. Contact Us
        </h4>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about these Terms and Conditions, please
          contact us at:
        </p>
        <ul className="list-none mt-2">
          <li>
            📧 Email:{" "}
            <a
              href="mailto:support@futuremindsinstitute.com"
              className="text-blue-600 underline"
            >
              support@futuremindsinstitute.com
            </a>
          </li>
          <li>📞 Phone: +91-XXXXXXXXXX</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsandConditions;
