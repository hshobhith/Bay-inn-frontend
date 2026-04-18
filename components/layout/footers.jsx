/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';

function Footers() {
  return (
    <footer className='footer'>
      <div className='footer-grid'>

        {/* Hotel Info */}
        <div className='footer-col'>
          <h3 className='footer-brand'>Bay Inn Conforts</h3>
          <p className='footer-tagline'>Your comfort is our priority. Experience luxury and warmth at every stay.</p>
        </div>

        {/* Contact Details */}
        <div className='footer-col'>
          <h4 className='footer-col-title'>Contact Us</h4>
          <p className='footer-detail'>
            <FaPhone className='footer-icon' />
            <a href='tel:+918792508322'>+91 8792508322</a>
          </p>
          <p className='footer-detail'>
            <FaWhatsapp className='footer-icon' />
            <a href='https://wa.me/919945302194' target='_blank' rel='noreferrer'>+91 9945302194</a>
          </p>
        </div>

        {/* Address & Map */}
        <div className='footer-col'>
          <h4 className='footer-col-title'>Find Us</h4>
          <p className='footer-detail'>
            <FaMapMarkerAlt className='footer-icon' />
            <span>H9GC+HCC Balale, Karnataka</span>
          </p>
          <a
            className='footer-map-link'
            href='https://maps.app.goo.gl/NBVe7LsKhPMYmy6z5'
            target='_blank'
            rel='noreferrer'
          >
            View on Google Maps →
          </a>
        </div>

        {/* Quick Links */}
        <div className='footer-col'>
          <h4 className='footer-col-title'>Quick Links</h4>
          <ul className='footer-links'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/rooms'>Rooms</Link></li>
            <li><Link href='/auth/login'>Login</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className='footer-bottom'>
        <p>©2026 Bay Inn Conforts. All rights reserved.</p>
        <p>
          {'Powered by '}
          <img
            src='/images/jpeg/companyLogo.jpeg'
            alt='Nexode Solutions'
            className='footer-logo'
          />
          <a href='mailto:Contact@nexodesolutions.com'>
            {' Contact@nexodesolutions.com'}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footers;
