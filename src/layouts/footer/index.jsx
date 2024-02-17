import React from "react";
import "./style.css";
import Container from "../../components/customContainer";
import Button from "../../components/button";
import { ReactComponent as Down } from "../../assets/icons/down.svg";
import { ReactComponent as Call } from "../../assets/icons/call.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container className="footer-container">
      <div className="footer">
        <div className="head">
          <div className="logo" onClick={() => navigate("/")}>Logo</div>
          <nav className="footer-nav">
            <ul>
              <li>Haqqımızda</li>
              <li>Kitablar</li>
              <li>İmtahanlar</li>
              <li>Bizimlə əlaqə</li>
              <Button
                variant="category-button"
                text="AZ"
                height="40px"
                margin="0 0 0 12px"
                iconPosition="right"
                icon={<Down />}
              />
            </ul>
          </nav>
        </div>

        <div className="communication">
          <div className="communication-item">
            <Call /> <span>Nümunə@gmail.com</span>
          </div>
          <div className="communication-item">
            <Mail /> <span>000 000 00 00</span>
          </div>
        </div>
        <div className="social-media">
          <Instagram />
          <Facebook />
          <Whatsapp />
          <Telegram />
        </div>

        <div className="line" />

        <p className="copyright">© 2024, şirkərin adı. Bütün hüquqlar qorunur</p>
      </div>
    </Container>
  );
};

export default Footer;
