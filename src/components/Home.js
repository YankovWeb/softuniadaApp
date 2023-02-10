import classes from "./Home.module.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className={classes.home}>
      <header className={classes.Appheader}>
        <h1>Image Generator</h1>

        <Link to="/generator" className={classes.Appbutton}>
          Get started
        </Link>

        <h1>Chat with Ai</h1>

        <Link to="/chat" className={classes.Appbutton}>
          Get started
        </Link>
      </header>
    </div>
  );
}

export default Home;
