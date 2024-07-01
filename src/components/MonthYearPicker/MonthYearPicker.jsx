import { useContext } from 'react';

import styles from './MonthYearPicker.module.scss';

import Prev from '@img/icons/left.svg?react';
import Next from '@img/icons/right.svg?react';
import { DatePickerContext } from '@contexts/DatePickerContext';

const MONTHS = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

const MonthYearPicker = () => {
  const { year, setYear, month, setMonth } = useContext(DatePickerContext);

  const handlePreviousMonth = () => {
    const newMonth = month - 1 < 0 ? 11 : month - 1;
    setMonth(newMonth);
    if (newMonth === 11) {
      setYear(year - 1);
    }
  };

  const handleNextMonth = () => {
    const newMonth = month + 1 > 11 ? 0 : month + 1;
    setMonth(newMonth);
    if (newMonth === 0) {
      setYear(year + 1);
    }
  };

  const handlePreviousYear = () => {
    setYear(year - 1);
  };

  const handleNextYear = () => {
    setYear(year + 1);
  };
  return (
    <div className={styles.monthYearPicker}>
      <div className={styles.date}>
        <span onClick={handlePreviousMonth}>
          <Prev />
        </span>{' '}
        {MONTHS[month]}{' '}
        <span onClick={handleNextMonth}>
          <Next />
        </span>
      </div>
      <div className={styles.date}>
        <span onClick={handlePreviousYear}>
          <Prev />
        </span>{' '}
        {year}{' '}
        <span onClick={handleNextYear}>
          <Next />
        </span>
      </div>
    </div>
  );
};

export default MonthYearPicker;
