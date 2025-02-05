import React from "react";
import styles from "./style.module.scss";
import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

import visa from "../../components/icons/Visa.png";
import mastercard from "../../components/icons/Mastercard.png";
import AmercanExpress from "../../components/icons/AmericanExpress.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sections}>
          <div className={styles.column}>
            <h3>Our Products</h3>
            <ul>
              <li>Our menus</li>
              <li>Our burgers</li>
              <li>Our times sides</li>
              <li>Our naandwiches</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Legal Information</h3>
            <ul>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Contact Us</h3>
            <ul>
              <li>Contacts</li>
              <li>Our addresses</li>
              <li>Become a Times Square franchisee</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>We Accept</h3>
            <div className={styles.paymentIcons}>
              <img src={mastercard} alt="Mastercard" />
              <img src={visa} alt="Visa" />
              <img src={AmercanExpress} alt="American Express" />
            </div>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.footerBottom}>
          <div className={styles.socialIcons}>
            <Facebook size={30} color="white" className={styles.icon} />
            <Twitter size={30} color="white" className={styles.icon} />
            <MessageCircle size={30} color="white" className={styles.icon} />
            <Linkedin size={30} color="white" className={styles.icon} />
          </div>
          <p>© 2024 Nayef. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
