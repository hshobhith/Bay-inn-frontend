/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

import {
  FaBeer, FaCocktail, FaHiking, FaShuttleVan
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCocktail />,
    title: 'free cocktails',
    info: 'Enjoy a welcome drink on us! Our guests receive complimentary cocktails at check-in and during happy hours at the hotel lounge.'
  },
  {
    icon: <FaHiking />,
    title: 'nature hiking',
    info: 'Explore the scenic trails around the resort with our guided hiking tours, available daily for guests of all fitness levels.'
  },
  {
    icon: <FaShuttleVan />,
    title: 'free shuttle',
    info: 'We offer free airport and city centre shuttle service for all our guests. Just let us know your schedule and we will handle the rest.'
  },
  {
    icon: <FaBeer />,
    title: 'refreshing drinks',
    info: 'Our in-house bar is stocked with a wide selection of beverages. Relax and enjoy chilled drinks at any time of the day.'
  }
];

export default services;
