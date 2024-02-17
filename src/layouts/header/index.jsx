import React from "react";
import "./style.css";
import Container from "../../components/customContainer";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Down } from "../../assets/icons/down.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container className="header">
      <div className="logo" onClick={() => navigate("/")}>
        Logo
      </div>

      <nav className="header-nav">
        <ul>
          <li>Haqqımızda</li>
          <li>Kitablar</li>
          <li>İmtahanlar</li>
          <li>Bizimlə əlaqə</li>
          <li>
            AZ
            <Down />
          </li>
        </ul>
      </nav>

      <div className="header-buttons">
        <Button variant="primary" text="Daxil ol" />
        <Button variant="secondary" text="Qeydiyyat" />
      </div>
    </Container>
  );
};

export default Header;
