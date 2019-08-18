import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({ values, required, setOptionValue }) => (
  <div className={styles.container}>
    {required ? '' : (
      <div key='null' value=''></div>
    )}
    {values.map(value => (
      <div className={styles.icon} key={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon} />{value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
