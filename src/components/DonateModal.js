import React, { useEffect, useState } from 'react';
import { PROJECTS } from '../data';

const AMOUNTS = [500, 1000, 2500, 5000, 10000];

function DonateModal({ open, onClose, preselect }) {
  const [project, setProject] = useState(preselect || PROJECTS[0].id);
  const [amount, setAmount] = useState(1000);
  const [custom, setCustom] = useState('');
  const [donor, setDonor] = useState({ name: '', email: '', phone: '' });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open && preselect) setProject(preselect);
    if (open) {
      setDone(false);
    }
  }, [open, preselect]);

  if (!open) return null;

  const finalAmount = custom ? Number(custom) : amount;
  const project_ = PROJECTS.find((p) => p.id === project);

  const submit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {done ? (
          <div className="donate-thank">
            <h2>Thank you 💛</h2>
            <p>
              Your intent to donate <strong>₹{finalAmount.toLocaleString()}</strong> to{' '}
              <strong>{project_.title}</strong> has been recorded.
            </p>
            <p className="muted">
              A payment link will be sent to {donor.email || 'your email'} shortly.
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2>Support a Cause</h2>
            <p className="muted">Pick a project — 100% of your donation goes to it.</p>

            <form className="form" onSubmit={submit}>
              <label>
                Choose project
                <select
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  {PROJECTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </label>

              <div className="amount-grid">
                {AMOUNTS.map((a) => (
                  <button
                    type="button"
                    key={a}
                    className={`amount-btn ${amount === a && !custom ? 'active' : ''}`}
                    onClick={() => {
                      setAmount(a);
                      setCustom('');
                    }}
                  >
                    ₹{a.toLocaleString()}
                  </button>
                ))}
              </div>

              <label>
                Or enter custom amount (₹)
                <input
                  type="number"
                  min="100"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  placeholder="e.g. 750"
                />
              </label>

              <div className="form-row">
                <label>
                  Your name*
                  <input
                    type="text"
                    required
                    value={donor.name}
                    onChange={(e) => setDonor({ ...donor, name: e.target.value })}
                  />
                </label>
                <label>
                  Email*
                  <input
                    type="email"
                    required
                    value={donor.email}
                    onChange={(e) => setDonor({ ...donor, email: e.target.value })}
                  />
                </label>
              </div>

              <label>
                Phone
                <input
                  type="tel"
                  value={donor.phone}
                  onChange={(e) => setDonor({ ...donor, phone: e.target.value })}
                />
              </label>

              <button
                className="btn btn-primary lg"
                type="submit"
                disabled={!finalAmount || finalAmount < 100}
              >
                Donate ₹{finalAmount ? finalAmount.toLocaleString() : 0}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default DonateModal;
