import React from "react";
import "./Terms.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Terms() {
  return (
    <>
      <Navbar />
      <div className="terms-container">
        <div className="terms-card">
          <h1 className="terms-title">📜 Terms & Conditions</h1>
          <p className="terms-subtitle">
            Please read these terms carefully before using our services.
          </p>

          <div className="terms-content">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using our platform, you agree to be bound by these
              Terms & Conditions. If you do not agree, you may not access or use
              our services.
            </p>

            <h2>2. Equipment Rentals & Leasing</h2>
            <p>
              All equipment listed on the platform is available for rent or
              lease under agreed conditions. Farmers and users must comply with
              rental durations, fees, and proper usage guidelines.
            </p>

            <h2>3. Product Certification & Compliance</h2>
            <p>
              Equipment marked with a <strong>"Certified"</strong> label has
              been verified for quality and compliance with agricultural
              industry standards. The platform is not responsible for
              uncertified equipment purchased or leased outside of the
              certification program.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>
              Users are responsible for the safe handling, proper operation, and
              timely return of rented equipment. Damages, misuse, or negligence
              will incur penalties.
            </p>

            <h2>5. Payments & Refunds</h2>
            <p>
              Payments must be made via the platform’s secure system. Refunds
              will only be processed for cancellations made within the permitted
              timeframe and in accordance with our refund policy.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              We strive to ensure accurate information and genuine services but
              shall not be held liable for direct, indirect, or incidental
              losses arising from the use of equipment or services.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We may update these Terms & Conditions from time to time. Users
              will be notified of major changes, and continued use of the
              platform constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="terms-footer">
            By using this platform, you acknowledge that you have read,
            understood, and agree to these Terms & Conditions.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
