import React from "react";
import CV from '../../../../assets/template-2/CV.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Nguyen_Duc_Hieu_CV.pdf" className="btn_2">Dowload CV</a>
      <a href="#contact" className="btn_2 btn-primary_2">Let's Talk</a>
    </div>
  );
};

export default CTA;
