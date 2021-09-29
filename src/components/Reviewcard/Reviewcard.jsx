import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Reviewcard.css";
import { Marginer } from "../Marginer/index.jsx";

const Reviewcard = ({ reviewText, username, userImgUrl, city, country }) => {
  return (
    <div>
      <div className="container">
        {/* <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} /> */}

        {/* <Marginer direction="vertical" margin="5em" /> */}
        <img className="user-img" alt={username} src={userImgUrl} />
        <Marginer direction="vertical" margin="1.2em" />
        <p className="review-text">{reviewText}</p>
        <Marginer direction="vertical" margin="4em" />

        <div>
          <span className="user-name"> {username} </span>
          <div>
            <span className="user-name"> {city} </span>,
            <span className="user-name"> {country} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
