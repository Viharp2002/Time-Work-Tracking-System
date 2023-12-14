import React from "react";
import { Card } from "antd";
import homeImage from "../assets/homeImage.jpg";
import ceoImage from "../assets/ceoImage.jpg";
import websiteImage from "../assets/wesiteImage.jpg";

const About = () => {
  const cardStyle = {
    width: "45%",
    margin: "10px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    margin: "20px",
  };

  const contentStyle = {
    padding: "16px",
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  const linkStyle = {
    color: "#1890ff",
  };

  return (
    <div style={containerStyle}>
      <Card style={cardStyle} bordered={false}>
        <div style={contentStyle}>
          <h2>Company Details</h2>
          <p>
          <strong>Website:</strong> <a href="http://www.artecosolution.com/" style={linkStyle}>
            www.artecosolution.com
            </a>
            <br/>
          <strong>Domains:</strong> App, Web & Game Dev, 2D-3D Animation,
            UI-UX Design, Python, Node.js<br/>
            <strong>Number of Employee:</strong> 15-20
            <br/>
            <strong>Email:</strong> <a href="mailto:artecosolution@gmail.com">artecosolution@gmail.com</a>
            <br/>
            <strong>Address:</strong> 631-32, Laxmi Enclave 2, opp.gajera
            school, katargam, surat.  
          </p>
        </div>
        <div style={imageContainerStyle}>
          <img src={homeImage} alt="Company" style={imageStyle} />
        </div>
      </Card>

      <Card style={cardStyle} bordered={false}>
        <div style={imageContainerStyle}>
          <img src={ceoImage} alt="CEO" style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <h2>Mr. Shyam Dobariya</h2>
          <p>
            <strong>CEO, Artecho Solution</strong>
          </p>
        </div>
      </Card>

      <Card style={cardStyle} bordered={false}>
        <div style={contentStyle}>
          <h2>Software Functionality</h2>
          <p>
            <strong>• Login Management with different Privillages</strong><br/>
            <strong>• Project Management</strong><br/>
            <strong>• Time Tracking and Daily Progress Submission</strong><br/>
            <strong>• Statistical Analysis</strong><br/>
            <strong>• User Interface and Security</strong><br/>
            <strong>• Ease of Use and Maintenance</strong><br/>
            <strong>• Scalability for Future Growth</strong>
          </p>
        </div>
        <div style={imageContainerStyle}>
          <img src={websiteImage} alt="Website" style={imageStyle} />
        </div>
      </Card>
    </div>
  );
};

export default About;
