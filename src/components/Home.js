import React from 'react';
import Carousel from './Carousel';
import { PROJECTS } from '../data';

function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="stat-value">{value.toLocaleString()}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Home({ onNavigate, onDonate, onVolunteer }) {
  const totalReached = PROJECTS.reduce((s, p) => s + p.reached, 0);

  return (
    <div className="home">
      <Carousel onDonate={onDonate} onVolunteer={onVolunteer} />

      <section className="section stats-band">
        <Stat value={totalReached} label="Lives Impacted" />
        <Stat value={120} label="Villages Covered" />
        <Stat value={480} label="Active Volunteers" />
        <Stat value={PROJECTS.length} label="Flagship Programmes" />
      </section>

      <section className="section intro-split">
        <div className="intro-media">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=70"
            alt="Volunteers at work in the community"
          />
        </div>
        <div className="intro-copy">
          <span className="eyebrow">Our Story</span>
          <h2>
            Built on Belief,
            <br />
            Driven by Purpose
          </h2>
          <p>
            AANDH Foundation began as a handful of neighbours sharing meals on
            weekends. Today, it is a grassroots collective walking into
            villages, sitting with families, and building lasting change across
            education, livelihoods and the environment.
          </p>
          <p>
            Every rupee, every hour, every meal is guided by one belief — that
            dignity, opportunity and hope belong to everyone.
          </p>
          <button
            className="btn btn-glow"
            onClick={() => onNavigate('about')}
          >
            About Us &rarr;
          </button>
        </div>
      </section>

      <section className="section alt">
        <div className="section-head">
          <span className="eyebrow">Our Approach</span>
          <h2>Four Pillars, One Promise</h2>
          <p>
            Every programme we run is built on these four commitments — from a
            single village camp to a decade-long mission.
          </p>
        </div>
        <div className="approach-grid">
          <div className="approach-card">
            <div
              className="approach-img"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=70)',
              }}
            />
            <div className="approach-body">
              <h3>Building Capacity</h3>
              <p>
                Skilling, mentoring and equipping communities so change lasts
                long after we leave.
              </p>
            </div>
          </div>
          <div className="approach-card">
            <div
              className="approach-img"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=70)',
              }}
            />
            <div className="approach-body">
              <h3>Advancing Opportunity</h3>
              <p>
                Opening doors through education, livelihoods and access —
                especially where they have been closed for generations.
              </p>
            </div>
          </div>
          <div className="approach-card">
            <div
              className="approach-img"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=70)',
              }}
            />
            <div className="approach-body">
              <h3>Supporting Well-being</h3>
              <p>
                Healthcare, nutrition and emotional support delivered right at
                the doorstep of those who need it most.
              </p>
            </div>
          </div>
          <div className="approach-card">
            <div
              className="approach-img"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=70)',
              }}
            />
            <div className="approach-body">
              <h3>Empowering Leaders</h3>
              <p>
                Nurturing the next generation of changemakers from within the
                communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="eyebrow">Our Programmes</span>
          <h2>Where We Work, Every Day</h2>
          <p>Every project below is active and open for your support.</p>
        </div>
        <div className="cards-grid">
          {PROJECTS.map((p) => (
            <div className="card" key={p.id}>
              <div
                className="card-img"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="card-body">
                <h3>{p.title}</h3>
                <p className="card-tag">{p.tagline}</p>
                <div className="card-meta">
                  <span className="chip">
                    {p.reached.toLocaleString()}+ reached
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="center-btn">
          <button className="btn btn-outline" onClick={() => onNavigate('projects')}>
            See all Projects
          </button>
        </div>
      </section>

      <section className="section impact-showcase">
        <div className="section-head">
          <span className="eyebrow">Our Impact</span>
          <h2>Numbers That Tell A Story</h2>
          <p>
            Every figure below is a life touched, a seed sown, a promise kept.
          </p>
        </div>
        <div className="impact-grid">
          <div className="impact-tile large">
            <div className="impact-icon" aria-hidden="true">♥</div>
            <div className="impact-num">
              {totalReached.toLocaleString()}
              <span className="plus">+</span>
            </div>
            <div className="impact-name">Lives Impacted</div>
            <div className="impact-sub">Across three flagship programmes</div>
          </div>
          <div className="impact-tile">
            <div className="impact-icon" aria-hidden="true">✿</div>
            <div className="impact-num">
              25,000<span className="plus">+</span>
            </div>
            <div className="impact-name">Trees Planted</div>
            <div className="impact-sub">Native species, community-led</div>
          </div>
          <div className="impact-tile">
            <div className="impact-icon" aria-hidden="true">✦</div>
            <div className="impact-num">
              3,200<span className="plus">+</span>
            </div>
            <div className="impact-name">Women Empowered</div>
            <div className="impact-sub">Skilled, employed, leading</div>
          </div>
          <div className="impact-tile">
            <div className="impact-icon" aria-hidden="true">✎</div>
            <div className="impact-num">
              12,400<span className="plus">+</span>
            </div>
            <div className="impact-name">Students Educated</div>
            <div className="impact-sub">First-generation learners</div>
          </div>
          <div className="impact-tile">
            <div className="impact-icon" aria-hidden="true">✪</div>
            <div className="impact-num">
              480<span className="plus">+</span>
            </div>
            <div className="impact-name">Active Volunteers</div>
            <div className="impact-sub">The heart of every mission</div>
          </div>
          <div className="impact-tile">
            <div className="impact-icon" aria-hidden="true">◈</div>
            <div className="impact-num">
              18<span className="plus">+</span>
            </div>
            <div className="impact-name">PAN India Presence</div>
            <div className="impact-sub">States and Union Territories</div>
          </div>
        </div>
        <div className="center-btn">
          <button className="btn btn-outline" onClick={() => onNavigate('impact')}>
            See the Full Impact Report
          </button>
        </div>
      </section>

      <section className="section testimonials alt">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>Voices From The Ground</h2>
          <p>
            Stories from the people, partners and volunteers who walk this
            journey with us.
          </p>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial-card">
            <div className="stars" aria-label="5 out of 5">
              {'★★★★★'}
            </div>
            <p className="quote">
              “Through Equal Chance, my daughter got a mentor who sat with her
              every week until she believed she could pass her boards. She’s in
              college now — the first in our family.”
            </p>
            <div className="testimonial-person">
              <div className="avatar" aria-hidden="true">PR</div>
              <div>
                <div className="person-name">Priya R.</div>
                <div className="person-role">Parent, Warangal</div>
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <div className="stars" aria-label="5 out of 5">
              {'★★★★★'}
            </div>
            <p className="quote">
              “I joined Udyam Shakti as a homemaker with a sewing machine.
              Today, I run a small tailoring unit that employs four other women.
              AANDH gave me the first stitch.”
            </p>
            <div className="testimonial-person">
              <div className="avatar" aria-hidden="true">AK</div>
              <div>
                <div className="person-name">Anjali K.</div>
                <div className="person-role">Entrepreneur, Nagpur</div>
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <div className="stars" aria-label="5 out of 5">
              {'★★★★★'}
            </div>
            <p className="quote">
              “Our school eco-club started with one Nurture Nature plantation
              drive. Two years on, the kids run their own composting programme —
              they’re teaching me now.”
            </p>
            <div className="testimonial-person">
              <div className="avatar" aria-hidden="true">SM</div>
              <div>
                <div className="person-name">Sameer M.</div>
                <div className="person-role">Teacher & Volunteer</div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section cta-band">
        <h2>Be the change with us.</h2>
        <p>Every rupee, every hour, every share helps.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={onDonate}>
            Donate Now
          </button>
          <button className="btn btn-outline light" onClick={onVolunteer}>
            Join as Volunteer
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
