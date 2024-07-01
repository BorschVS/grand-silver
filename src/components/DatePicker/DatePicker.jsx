import Select from '@components/Select';
import styles from './DatePicker.module.scss';
import MonthYearPicker from '@components/MonthYearPicker';
import Calendar from '@components/Calendar/Calendar';

const DatePicker = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>Оберіть дату заїзду та виїзду</h3>
        <div>
          <Select />
          <MonthYearPicker />
          <Calendar />
        </div>
      </div>
    </section>
  );
};

export default DatePicker;
