/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

import { ExclamationCircleOutlined } from '@ant-design/icons';
import {
  Button, Form, Input, Modal, message
} from 'antd';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Calendar } from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import DatePickerHeader from 'react-multi-date-picker/plugins/date_picker_header';
import Toolbar from 'react-multi-date-picker/plugins/toolbar';
import ApiService from '../../utils/apiService';
import notificationWithIcon from '../../utils/notification';

const { confirm } = Modal;

function OrderPlaceModal({ bookingModal, setBookingModal }) {
  const [selectedDates, setSelectedDates] = useState([]);
  const [form] = Form.useForm();

  // handle date change on date picker
  const handleDateChange = (dates) => {
    const formattedDates = dates.map((date) => dayjs(date).format('YYYY-MM-DD'));
    setSelectedDates(formattedDates);
  };

  const closeModal = () => {
    setBookingModal((prevState) => ({ ...prevState, open: false, roomId: null }));
    setSelectedDates([]);
    form.resetFields();
  };

  // function to handle placed room booking order
  const handlePlacedOrder = () => {
    form.validateFields().then((values) => {
      if (selectedDates.length === 0) {
        notificationWithIcon('error', 'ERROR', 'Please select at least 1 date for your booking.');
        return;
      }
      if (selectedDates.length > 5) {
        notificationWithIcon('error', 'ERROR', 'Maximum 5 days can be selected for a booking.');
        return;
      }

      confirm({
        title: 'Confirm your booking?',
        icon: <ExclamationCircleOutlined />,
        content: `Booking for ${selectedDates.length} date(s) as ${values.guest_name}`,
        okText: 'Confirm',
        cancelText: 'Cancel',
        onOk() {
          return new Promise((resolve, reject) => {
            ApiService.post(`/api/v1/guest-booking-order/${bookingModal?.roomId}`, {
              guest_name: values.guest_name,
              guest_mobile: values.guest_mobile,
              guest_aadhar: values.guest_aadhar || undefined,
              booking_dates: selectedDates
            })
              .then((res) => {
                resolve();
                if (res?.result_code === 0) {
                  notificationWithIcon('success', 'BOOKING PLACED!', 'Your room booking has been placed successfully. We will contact you for confirmation.');
                  closeModal();
                } else {
                  notificationWithIcon('error', 'ERROR', 'Sorry! Something went wrong. Please try again.');
                }
              })
              .catch((err) => {
                notificationWithIcon('error', 'ERROR', (err?.response?.data?.result?.error?.message || err?.message || 'Sorry! Something went wrong.'));
                reject();
              });
          }).catch((err) => message.error(err?.message || 'Oops errors!'));
        }
      });
    }).catch(() => {
      notificationWithIcon('error', 'ERROR', 'Please fill in all required fields correctly.');
    });
  };

  return (
    <Modal
      title='Book This Room'
      open={bookingModal.open}
      onCancel={closeModal}
      closable
      centered
      footer={[
        <div key='custom-footer'>
          <Button onClick={closeModal} type='default' size='middle'>
            Cancel
          </Button>
          <Button onClick={handlePlacedOrder} type='primary' size='middle'>
            Place Booking
          </Button>
        </div>
      ]}
    >
      <Form
        form={form}
        layout='vertical'
        style={{ marginBottom: '16px' }}
      >
        {/* Guest Name */}
        <Form.Item
          label='Full Name'
          name='guest_name'
          rules={[{ required: true, message: 'Please enter your full name.' }]}
        >
          <Input placeholder='Enter your full name' size='large' />
        </Form.Item>

        {/* Mobile Number */}
        <Form.Item
          label='Mobile Number'
          name='guest_mobile'
          rules={[
            { required: true, message: 'Please enter your mobile number.' },
            { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit mobile number.' }
          ]}
        >
          <Input placeholder='Enter 10-digit mobile number' size='large' maxLength={10} />
        </Form.Item>

        {/* Aadhar Card (optional) */}
        <Form.Item
          label='Aadhar Card Number (Optional)'
          name='guest_aadhar'
          rules={[
            {
              pattern: /^[0-9]{12}$/,
              message: 'Aadhar number must be 12 digits.',
              validateTrigger: 'onSubmit'
            }
          ]}
        >
          <Input placeholder='Enter 12-digit Aadhar number (optional)' size='large' maxLength={12} />
        </Form.Item>
      </Form>

      {/* Date Picker */}
      <p style={{ fontWeight: 600, marginBottom: '8px' }}>Select Booking Dates:</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Calendar
          style={{ width: '100%' }}
          plugins={[
            <DatePickerHeader
              key='date-picker-header'
              position='top'
              size='medium'
            />,
            <DatePanel
              style={{ width: '100%' }}
              key='date-panel'
              position='right'
              sort='date'
            />,
            <Toolbar
              key='toolbar'
              position='bottom'
            />
          ]}
          minDate={new Date(new Date()).setDate(new Date().getDate() + 1)}
          maxDate={new Date(new Date()).setDate(new Date().getDate() + 30)}
          onChange={handleDateChange}
          value={selectedDates}
          format='YYYY/MM/DD'
          highlightToday
          multiple
        />
      </div>
    </Modal>
  );
}

OrderPlaceModal.defaultProps = {
  bookingModal: { open: false, roomId: null }
};

OrderPlaceModal.propTypes = {
  bookingModal: PropTypes.object
};

export default OrderPlaceModal;
