import React from 'react';
import styles from './OrderOption.scss';
import  OrderOptionCheckboxes  from './OrderOptionCheckboxes';
import  OrderOptionDropdown  from './OrderOptionDropdown';
import  OrderOptionNumber  from './OrderOptionNumber';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';

const optionTypes = {
  icons: OrderOptionIcons,
  dropdown: OrderOptionDropdown,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOption = ({ name, type, id, setOrderOption, ...otherProps }) => {
  const OptionComponent = optionTypes[type];
  if (!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent setOptionValue={value => setOrderOption({ [id]: value })}
          {...otherProps}
        />
      </div>
    );
  }
};

export default OrderOption;
