import React, { useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <p>Copyright &copy; {year} Connexa Learning</p>
    </footer>
  );
};

export default Footer;