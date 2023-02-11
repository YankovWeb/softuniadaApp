import classes from "./Error.module.css";

const Error = () => {
  return (
    <div className={classes.error}>
      Error
      <h1 className={classes.h1}>404</h1>
      <p className={classes.p}> WE LOST CONNECTION TO SKYNET</p>
    </div>
  );
};

export default Error;
