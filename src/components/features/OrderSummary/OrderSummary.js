import React from 'react';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderSummary = ({ price, options }) => (
  <h2 className={styles.component}>Total $<strong>{calculateTotal(formatPrice(price), options)}</strong></h2>
);

OrderSummary.propTypes = {
  price: PropTypes.node,
  options: PropTypes.object,
};

export default OrderSummary;
