import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Nav.css';

const Nav = (props) => {
  const location = useLocation();
  const { name } = location.state || 'World&apos;s CoronaVirus Statistics';
  const { display } = props;
  return (
    <>
      <div className="Navigation">
        <span className={display}>
          <Link to="/" className="Link">
            &lt; Back
          </Link>
        </span>
        <span className="Logo">CoronaWide</span>
      </div>
      <div className="Slogan-Cont">
        <img className="Logo" src={logo} alt="covid logo" />
        {name && (
          <span className="Slogan">{name}</span>
        )}
        {!name && (
          <span className="Slogan">World&apos;s CoronaVirus Statistics</span>
        )}
      </div>
    </>
  );
};

Nav.defaultProps = {
  display: '',
};

Nav.propTypes = {
  display: PropTypes.string,
};

export default Nav;
