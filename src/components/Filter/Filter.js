import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.formField}>
    <span className={s.formLabel}>Find contacts by name</span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={s.formInput}
    />
  </label>
);

export default Filter;
