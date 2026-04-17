/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

import React from 'react';

function Footers() {
  return (
    <footer className="footer">
      <h2>Bay Inn Conforts | Hotel Room Booking System</h2>
      <p>©2026 Bay Inn Conforts</p>
      <p>
        Powered by{" "}
        <img
          src="/images/svg/logo.svg"
          alt="Nexode Solutions"
          className="footer-logo"
        />
        <a href="mailto:Contact@nexodesolutions.com">
          {" "}Contact@nexodesolutions.com
        </a>
      </p>
    </footer>
  );
}
export default Footers;
