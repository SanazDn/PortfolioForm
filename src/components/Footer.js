import Card from "./UI/Card";
import { SocialIcon } from "react-social-icons";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Card>
      <div className={classes.row}>
        <div className={classes.column} font="3">
          Sanaz Dehghannayyeri
        </div>
        <div className="column">
          <SocialIcon
            className={classes.socialIcon}
            url="https://www.linkedin.com/in/sanadehghannayyeri/"
            bgColor="purple"
          />
          <SocialIcon
            className={classes.socialIcon}
            url="https://github.com/"
            bgColor="purple"
          />
        </div>
        <div className={classes.column}>Made with React, CSS/JS, Bootstrap</div>
      </div>
    </Card>
  );
};

export default Footer;
