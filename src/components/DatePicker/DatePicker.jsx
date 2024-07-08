import Select from '@components/Select';
import styles from './DatePicker.module.scss';
import MonthYearPicker from '@components/MonthYearPicker';
import Calendar from '@components/Calendar/Calendar';
import { useEffect, useState } from 'react';

const DatePicker = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSelectOpen = isOpen => {
    setIsSelectOpen(isOpen);
  };

  const datePickerBoxClasses = isSelectOpen
    ? `${styles.box} ${styles.blur}`
    : styles.box;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>Оберіть дату заїзду та виїзду</h3>
        <div>
          <Select isSelectOpen={handleSelectOpen} />
          <div className={datePickerBoxClasses}>
            <MonthYearPicker />
            <Calendar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatePicker;
