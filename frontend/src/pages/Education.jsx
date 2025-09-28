import './education.css';
import { Link } from 'react-router-dom';

export default function Education() {
  return (
    <div className="education-root">
      <h2 className="title">KARUNYA DARSI'S PORTFOLIO <br /> Welcome to My Elegant Portfolio People!!</h2>

      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/education">Education</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Info</Link>
      </div>

      <div style={{ height: 80 }} />

      <h2 className="section-heading"><ins>EDUCATIONAL DETAILS:</ins></h2>

      <table className="edu-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Institution</th>
            <th>Passing Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grade 10</td>
            <td>DPS</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Grade 12</td>
            <td>Bhasyam Junior College</td>
            <td>2023</td>
          </tr>
          <tr>
            <td>BTech</td>
            <td>SRM University AP</td>
            <td>2027</td>
          </tr>
        </tbody>
      </table>

      <h2 className="section-heading"><ins>ACHIEVEMENTS:</ins></h2>
      <div className="achievements">
        <p>Developed an Online Restaurant Management website using C++, HTML, CSS, and JavaScript.</p>
        <p>Participated in SDG Hackathon 2025 and my team was in top 20 out of 100 groups</p>
        <p>Finished up to level 8 in Excel Abacus.</p>
        <p>Secured many prizes in district-level Excel Abacus competitions.</p>
        <p>Traffic Light System Simulation in C++ (Using DAA concepts).</p>
        <p>Emerging Contaminants in Water Research (Analytical study on water pollution and solutions).</p>
      </div>
    </div>
  );
}
