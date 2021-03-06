import React, { Fragment } from "react";

const SectionTag = ({ title = "اسم القسم" }) => {
  return (
    <a href="section" className="sections-tag">
      <span className="sections-tag_number">25</span>
      <span className="sections-tag_title">{title}</span>
    </a>
  );
};

export default SectionTag;
