import React, { useEffect, useState } from 'react';
import { HIGHLIGHTS } from '../data';

function Carousel({ onDonate, onVolunteer }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % HIGHLIGHTS.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const go = (i) => setIndex((i + HIGHLIGHTS.length) % HIGHLIGHTS.length);

  return (
    <section className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {HIGHLIGHTS.map((slide, i) => (
          <div className="carousel-slide" key={i}>
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-overlay" />
            <div className="carousel-content">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <div className="carousel-cta">
                <button className="btn btn-primary" onClick={onDonate}>
                  Donate Now
                </button>
                <button className="btn btn-outline light" onClick={onVolunteer}>
                  Join as Volunteer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow left" onClick={() => go(index - 1)}>
        &#8249;
      </button>
      <button className="carousel-arrow right" onClick={() => go(index + 1)}>
        &#8250;
      </button>

      <div className="carousel-dots">
        {HIGHLIGHTS.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
