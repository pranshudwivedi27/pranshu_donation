import React from 'react';

function RefundPolicy() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Cancellation &amp; Refund Policy</h1>
        <p>Last updated: January 2025</p>
      </div>

      <section className="section">
        <div className="prose legal-prose">
          <h2>Refund Eligibility</h2>
          <p>
            Donations made to Community Base Advancement Foundation are generally non-refundable as
            they are immediately allocated towards ongoing programs and campaigns. However, we review
            refund requests on a case-by-case basis.
          </p>

          <h2>Conditions for Refund</h2>
          <ul>
            <li>Duplicate payment made due to a technical error.</li>
            <li>Payment deducted but donation not recorded (please share payment proof).</li>
            <li>Refund request submitted within 7 days of the transaction.</li>
          </ul>

          <h2>How to Request a Refund</h2>
          <p>
            Email us at <strong>info@communityfoundation.in</strong> with your transaction ID,
            amount, date, and reason. We will respond within 3 business days. Approved refunds are
            processed within 7–10 business days.
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

export default RefundPolicy;
