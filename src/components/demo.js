import React from "react";
import "../component styles/demo.css";

function Demo() {
  return (
    <div className="demo-container">
      <h1 className="demo-header">Projektejani</h1>
      <div className="demo-subcontainer">
        <div className="demo-item">
          <h4 className="demo-label">Projekti 1</h4>
          <p className="demo-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            cumque repudiandae labore ullam recusandae iure corrupti architecto
            deleniti blanditiis!
          </p>
        </div>
        <div className="demo-item">
          <h4 className="demo-label">Projekti 2</h4>
          <p className="demo-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            cumque repudiandae labore ullam recusandae iure corrupti architecto
            deleniti blanditiis!
          </p>
        </div>
      </div>
      <div className="demo-subcontainer">
        <div className="demo-item">
          <h4 className="demo-label">Projekti 3</h4>
          <p className="demo-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            cumque repudiandae labore ullam recusandae iure corrupti architecto
            deleniti blanditiis!
          </p>
        </div>
        <div className="demo-item">
          <h4 className="demo-label">Projekti 4</h4>
          <p className="demo-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            cumque repudiandae labore ullam recusandae iure corrupti architecto
            deleniti blanditiis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Demo;
