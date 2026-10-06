import React from 'react';

function ShippingPolicy() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Shipping &amp; Delivery Policy</h1>
        <p>Last updated: January 2025</p>
      </div>

      <section className="section">
        <div className="prose legal-prose">
          <h2>Digital Delivery</h2>
          <p>
            Community Base Advancement Foundation primarily provides digital services including
            donation receipts, 80G certificates, impact reports, and newsletter updates. These are
            delivered electronically to your registered email address.
          </p>

          <h2>Donation Receipts</h2>
          <p>
            An automated donation receipt is sent to your email address within 24 hours of a
            successful transaction. If you do not receive it, please check your spam folder or
            contact us.
          </p>

          <h2>80G Certificates</h2>
          <p>
            Annual 80G certificates for tax exemption purposes are issued within 30 days of the end
            of the financial year for all eligible donations.
          </p>

          <h2>Physical Merchandise</h2>
          <p>
            For any physical merchandise or promotional materials ordered through special campaigns,
            delivery timelines will be communicated separately. Standard delivery: 7–14 business days
            within India.
          </p>

          <h2>Contact</h2>
          <ul>
            <li><strong>Email:</strong> info@communityfoundation.in</li>
            <li><strong>Phone:</strong> +91 85297 16474</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ShippingPolicy;
