/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

import Head from 'next/head';
import React from 'react';
import Footers from './footers';
import FloatingContact from './FloatingContact';
import Navbar from './navbar';

function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || 'Bay Inn Conforts – Book Your Room'}</title>

        {/* SEO */}
        <meta name='description' content='Bay Inn Hotel – 4 floors of comfortable rooms by the bay. Book Standard, Bay View, Deluxe, or Sky Suite rooms starting from ₹299/night.' />
        <meta name='keywords' content='Bay Inn Conforts, hotel booking, bay view hotel, seaside hotel, hotel rooms, Karnataka hotel' />
        <meta name='robots' content='index, follow' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />

        {/* Open Graph – shows nicely on WhatsApp / Facebook share */}
        <meta property='og:title' content='Bay Inn Conforts – Book Your Room' />
        <meta property='og:description' content='Comfortable rooms by the bay. 4 floors, great prices, easy booking.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://bayinnconforts.com' />

        {/* Schema.org structured data for Google */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Hotel',
              name: 'Bay Inn Conforts',
              description: '4 floors of comfortable seaside rooms by the bay.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'H9GC+HCC Balale',
                addressRegion: 'Karnataka',
                addressCountry: 'IN'
              },
              telephone: '+91-8792508322',
              priceRange: '₹299 - ₹5000'
            })
          }}
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <main style={{ overflow: 'auto' }}>
        {children}
      </main>
      <Footers />
      <FloatingContact />
    </>
  );
}

export default MainLayout;
