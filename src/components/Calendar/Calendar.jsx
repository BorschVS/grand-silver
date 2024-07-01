import React, { useState, useEffect, useContext } from 'react';
import { DatePickerContext } from '@contexts/DatePickerContext';

import styles from './Calendar.module.scss';

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

const Calendar = () => {
  const { year, month } = useContext(DatePickerContext);
  const [calendarDays, setCalendarDays] = useState([]);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);

  useEffect(() => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    setFirstDayOfMonth(
      new Date(year, month, 1).getDay() - 1 === -1
        ? 6
        : new Date(year, month, 1).getDay() - 1
    );
    console.log(firstDayOfMonth);

    const daysArray = Array.from({ length: daysInMonth }, (_, index) => {
      const dayOfMonth = index + 1;
      const dayOfWeek = (firstDayOfMonth + index + 7) % 7;
      return {
        day: dayOfMonth,
        dayOfWeek: WEEKDAYS[dayOfWeek],
      };
    });

    setCalendarDays(daysArray);
  }, [year, month]);

  const renderCalendarRows = () => {
    const rows = [];
    let cells = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      cells.push(<td key={`empty-${i}`} className={styles.emptyCell}></td>);
    }

    calendarDays.forEach((calendarDay, index) => {
      cells.push(
        <td key={index} className={styles.day}>
          {calendarDay.day}
        </td>
      );

      if (
        (firstDayOfMonth + index + 1) % 7 === 0 ||
        index === calendarDays.length - 1
      ) {
        rows.push(<tr key={rows.length}>{cells}</tr>);
        cells = [];
      }
    });

    return rows;
  };

  return (
    <table className={styles.calendar}>
      <thead>
        <tr>
          {WEEKDAYS.map((weekday, index) => (
            <th key={index} className={styles.weekday}>
              {weekday}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{renderCalendarRows()}</tbody>
    </table>
  );
};

export default Calendar;
