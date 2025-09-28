import './portfolio.css';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div className="portfolio-root">
      <h2 className="title">KARUNYA DARSI'S PORTFOLIO <br /> Welcome to My Elegant Portfolio People!!</h2>

      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/education">Education</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Info</Link>
      </div>

      <h4 className="section-heading">ABOUT ME:</h4>
      <h3><strong>Hello, and welcome to my portfolio people!!!</strong></h3>
      <p>
        I'm <strong>KARUNYA DARSI</strong>, a third-year Computer Science and Engineering student at SRM University AP. I am passionate about technology,
        particularly in areas like web development and AI & ML. My goal is to become a software engineer and contribute to tech innovations. This portfolio is a reflection of my academic journey,
        showcasing the projects and work I’ve undertaken, as well as my passion for technology and problem-solving. As I continue to expand my knowledge and expertise in computer science,
        my ultimate goal is to pursue higher education abroad to gain a global perspective on the tech industry. I believe that immersing myself in diverse cultures and learning from experts worldwide
        will equip me with the skills and insights needed to make a meaningful impact in the field.
      </p>

      <h4 className="section-heading">HOBBIES:</h4>
      <ul>
        <li>Dancing</li>
        <li>Listening to music</li>
        <li>Cooking</li>
      </ul>

      <h4 className="section-heading">TECHNICAL SKILLS:</h4>
      <ul>
        <li><b>Programming Languages:</b> C, C++, Python</li>
        <li>
          <b>Web Development:</b>
          <ul>
            <li><b>Front-End:</b> HTML, CSS, Bootstrap, JavaScript</li>
            <li><b>Backend:</b> PHP, MySQL, node.js, MongoDB</li>
          </ul>
        </li>
        <li><b>Data Structures and DAA</b></li>
      </ul>
    </div>
  );
}
