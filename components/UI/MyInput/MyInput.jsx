import classes from './style.module.scss';
export default function MyInput(props) {
  return <input className={classes.myInput} {...props} />;
}
