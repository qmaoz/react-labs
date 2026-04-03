import classes from './Input.module.css';
import clsx from 'clsx';

export default function Input({ label, placeholder, disabled, ...rest }) {
  return (
    <>
      <label className={classes.label} htmlFor={rest.id}>{label}</label>
      <input
        type={rest.type}
        value={rest.category} 
        onChange={rest.onChange} 
        name={rest.name}
        id={rest.id}
        className={clsx(classes.input, rest.className || '')}
        placeholder={placeholder}
        disabled={disabled ? 'disbled' : ''}
      />
    </>
  );
}