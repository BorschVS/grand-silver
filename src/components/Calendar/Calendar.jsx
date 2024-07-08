import React, { useState, useEffect, useContext, useMemo } from 'react';
import { DatePickerContext } from '@contexts/DatePickerContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Calendar.module.scss';

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

const Calendar = () => {
  const { year, month } = useContext(DatePickerContext);
  const [calendarDays, setCalendarDays] = useState([]);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);

  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);

  const notify = text =>
    toast(text, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });

  useEffect(() => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    setFirstDayOfMonth(
      new Date(year, month, 1).getDay() - 1 === -1
        ? 6
        : new Date(year, month, 1).getDay() - 1
    );

    const daysArray = Array.from({ length: daysInMonth }, (_, index) => {
      const dayOfMonth = index + 1;
      const dayOfWeek = (firstDayOfMonth + index + 7) % 7;
      return {
        year,
        month,
        day: dayOfMonth,
        dayOfWeek: WEEKDAYS[dayOfWeek],
      };
    });

    setCalendarDays(daysArray);
  }, [year, month]);

  const isDateInPast = (day, month, year) => {
    const today = new Date();
    const selectedDate = new Date(year, month, day);
    return selectedDate < today;
  };

  const handleDayClick = day => {
    const clickedDate = new Date(day.year, day.month, day.day);

    if (isDateInPast(day.day, day.month, day.year)) {
      notify('Оберіть дату у майбутньому');
      return;
    }

    if (!startDay || (startDay && endDay)) {
      setStartDay(day);
      setEndDay(null);
    } else if (startDay && !endDay) {
      const startDate = new Date(startDay.year, startDay.month, startDay.day);
      if (clickedDate < startDate) {
        setStartDay(day);
      } else {
        setEndDay(day);
      }
    }
  };

  const isDayInRange = (day, month) => {
    if (startDay && endDay) {
      const startDate = new Date(startDay.year, startDay.month, startDay.day);
      const endDate = new Date(endDay.year, endDay.month, endDay.day);
      const currentDate = new Date(year, month, day);
      return currentDate >= startDate && currentDate <= endDate;
    }
    return false;
  };

  const isToday = (day, month, year) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const selectedDaysCount = useMemo(() => {
    if (startDay && endDay) {
      const startDate = new Date(startDay.year, startDay.month, startDay.day);
      const endDate = new Date(endDay.year, endDay.month, endDay.day);
      const timeDiff = endDate - startDate;
      const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
      return daysDiff + 1;
    }
    return 0;
  }, [startDay, endDay]);

  const renderCalendarRows = () => {
    const rows = [];
    let cells = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      cells.push(<td key={`empty-${i}`} className={styles.emptyCell}></td>);
    }

    calendarDays.forEach((calendarDay, index) => {
      const isSelected = isDayInRange(calendarDay.day, calendarDay.month);

      const isStart =
        calendarDay.day === startDay?.day &&
        calendarDay.month === startDay?.month && calendarDay.year === startDay?.year;
      const isEnd =
        calendarDay.day === endDay?.day && calendarDay.month === endDay?.month && calendarDay.year === endDay?.year;

      const isCurrentDay = isToday(
        calendarDay.day,
        calendarDay.month,
        calendarDay.year
      );

      const cellStyles = `${styles.day} ${isSelected ? styles.selected : ''} ${
        isStart ? styles.start : ''
      } ${isEnd ? styles.end : ''} ${isCurrentDay ? styles.today : ''}`.trim();

      cells.push(
        <td
          key={index}
          className={cellStyles}
          onClick={() => handleDayClick(calendarDay)}
        >
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
    <section>
      <ToastContainer />
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
    </section>
  );
};

export default Calendar;
