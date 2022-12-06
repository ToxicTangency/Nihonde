import classes from './style.module.scss';
export default function MyButton({ children, ...props }) {
  let variant = classes.myBtnWht;

  if (props.variant === 'black') {
    variant = classes.myBtnBlc;
  }

  return (
    <button {...props} className={variant}>
      {children}
    </button>
  );
}
