import React, { useEffect } from "react";

const RefundPolicy = () => {
    useEffect(()=>{
      scrollTo(0,0);
    },[])
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
      <div className="max-w-5xl text-start mx-auto bg-white text-gray-800 shadow-lg rounded-2xl p-8 md:p-12">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Future Minds Institute Refund Policy
        </h3>
        <p className="text-sm text-gray-500 text-center mb-8">
          Last updated: September 15, 2025
        </p>

        <p className="mb-6">
          Thank you for choosing <strong>Future Minds Institute</strong>. We are
          committed to providing high-quality educational services, training
          programs, and resources. However, we understand that circumstances may
          arise where a refund request is necessary. This Refund Policy explains
          the terms and conditions for refunds across our various services.
        </p>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Course Enrollment Refunds
            </h3>
            <p className="mb-2">
              Future Minds Institute offers different types of courses (online,
              in-person, and blended). Refund eligibility depends on the course
              type and timing of cancellation:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Online Courses (Self-Paced):</strong> Refunds are
                available if requested within 24 hours of enrollment, provided
                that less than 10% of the course content has been accessed. Once
                more than 10% of the course content has been accessed, no
                refunds will be issued.
              </li>
              <li>
                <strong>Live/Instructor-Led Courses:</strong> Cancellations made
                at least 48 hours before the first session are eligible for a
                50% refund. Cancellations made within 48 hours of the course
                start date are non-refundable. No-shows are not eligible for
                refunds.
              </li>
              <li>
                <strong>Workshops, Seminars, or Special Events:</strong> Refund
                requests made at least 72 hours before the event are eligible
                for a 50% refund. Cancellations within 72 hours are
                non-refundable.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Subscription or Membership Services
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Subscriptions can be canceled anytime from your account
                settings.
              </li>
              <li>
                No refunds will be issued for cancellations made after 24 hours
                of purchase.
              </li>
              <li>
                Annual and monthly subscriptions are non-refundable once
                purchased, except as stated below:
              </li>
            </ul>
            <p className="mt-2">
              <strong>24-Hour Refund Exception:</strong> If a subscription is
              canceled within 24 hours of purchase, you may be eligible for a
              50% refund. If the platform was accessed during this period, a
              prorated amount may be deducted from the refund.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Certification Programs
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Refund requests for certification-based programs must be made
                within 7 days of enrollment and before the participant has
                accessed more than one module.
              </li>
              <li>
                After certification has been issued, no refunds will be granted.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4. Digital Products (E-books, Study Material, Templates)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All digital product purchases are non-refundable once downloaded
                or accessed.
              </li>
              <li>
                If you experience technical issues preventing access, contact
                support for assistance.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5. Technical Issues or Platform Failures
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                If you are unable to access a course due to technical issues on
                our platform (and not due to user error, such as poor internet
                connectivity), you may be eligible for a full refund or course
                credit.
              </li>
              <li>Issues must be reported within 24 hours of occurrence.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6. Process for Requesting a Refund
            </h3>
            <p>
              To request a refund, please email our support team at{" "}
              <a
                href="mailto:support@futuremindsinstitute.com"
                className="text-blue-600 underline"
              >
                support@futuremindsinstitute.com
              </a>{" "}
              with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Your enrollment/order details</li>
              <li>The reason for your refund request</li>
              <li>Any supporting evidence (if applicable)</li>
            </ul>
            <p className="mt-2">
              Refund requests are typically processed within 5–7 business days.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              7. Refund Methods
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credit/Debit Cards: 5–7 business days</li>
              <li>Digital Wallets/UPI: 1–3 business days</li>
              <li>Bank Transfers: 3–5 business days</li>
            </ul>
            <p className="mt-2">
              In some cases, we may offer refunds as{" "}
              <strong>Future Minds Institute Wallet credits</strong>, which can
              be used for future courses or services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              8. Changes to Refund Policy
            </h3>
            <p>
              Future Minds Institute reserves the right to update or modify this
              Refund Policy at any time. Changes will take effect immediately
              upon posting on our website. By continuing to use our services
              after changes are made, you agree to be bound by the revised
              policy.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              9. Contact Us
            </h3>
            <p>
              If you have any questions about our refund policy, please contact
              us:
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
