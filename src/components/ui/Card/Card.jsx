import classes from './Card.module.css';

function CardBody({ children }) {
  return (
    <>
      <div className={classes.body}>
        {children}
      </div>
    </>
  );
}

function CardFooter({ children }) {
  return (
    <>
      <div className={classes.footer}>
        {children}
      </div>
    </>
  );
}

export default function Card({ children }) {
  return (
    <>
      <div className={classes.card}>
        {children}
      </div>
    </>
  );
}

Card.Body = CardBody;
Card.Footer = CardFooter;