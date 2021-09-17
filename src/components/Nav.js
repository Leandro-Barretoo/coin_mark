import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Nav.css';

const Nav = (props) => {
  const { display } = props;
  return (
    <>
      <div className="Navigation">
        <span className={display}><Link to="/" className="Link">&lt; Back</Link></span>
        <span className="Logo">CoronaWide</span>
      </div>
      <div className="Slogan-Cont">
        <img className="Logo" src={logo} alt="covid logo" />
        <span className="Slogan">World&apos;s CoronaVirus Statistics</span>
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
