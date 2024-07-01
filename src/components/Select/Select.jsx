import { useState } from 'react';

import styles from './Select.module.scss';

const {
  selectСontainer,
  select,
  selectArrow,
  selectOptions,
  selectOption,
} = styles;

const options = [{ label: 'Бунгало' }, { label: 'Котедж' }, { label: 'Номер' }];

const Select = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className={selectСontainer}>
      <div className={select} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : 'Тип розміщення'}
        <span className={selectArrow}>&#9662;</span>
      </div>
      {isOpen && (
        <ul className={selectOptions}>
          {options.map(option => (
            <li
              key={option.label}
              className={selectOption}
              onClick={() => handleOptionClick(option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
