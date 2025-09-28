import './gallery.css';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const imagesTop = ['Me.jpg', '2.jpg', '3.jpg', '5.jpg', '6.jpg'];
  const imagesBottom = ['j9.jpg', 'j4.png', '1.jpg', 'j5.jpeg', 'mee.jpg'];

  return (
    <div className="gallery-root">
      <h2 className="title">KARUNYA DARSI'S PORTFOLIO <br /> Welcome to My Elegant Portfolio People!!</h2>

      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/education">Education</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Info</Link>
      </div>

      <marquee direction="right">
        <h1 className="font-effect-shadow-multiple">MEMORIES FROM 2024-2025</h1>
      </marquee>

      <h3 className="font-effect-shadow-multiple" style={{ color: 'chocolate' }}>
        <b> Gallery:</b>
      </h3>

      <div className="gallery-grid">
        {imagesTop.map((src) => (
          <img key={src} src={`/${src}`} alt={src} className="gallery-img" />
        ))}
      </div>
      <br />
      <div className="gallery-grid">
        {imagesBottom.map((src) => (
          <img key={src} src={`/${src}`} alt={src} className="gallery-img" />
        ))}
      </div>
    </div>
  );
}
