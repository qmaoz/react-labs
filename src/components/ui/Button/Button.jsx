import classes from './Button.module.css';
import clsx from 'clsx';

export default function Button({ variant, size, disabled, onClick, ...rest }) {
  return (
    <>
      <button onClick={onClick} className={
        clsx(
          rest.className,
          classes.button,
          variant === 'primary' ? classes.primary : '',
          variant === 'secondary' ? classes.secondary : '',
          size === 'sm' ? classes.sm : '',
          size === 'lg' ? classes.lg : ''
        )}
        type={rest.type || 'button'}
        disabled={`${disabled ? 'disabled' : ''}`}
        id={`${rest.id}`}>
        
        {rest.children}
      </button>
    </>
  );
}