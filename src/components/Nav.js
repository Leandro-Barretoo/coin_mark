import PropTypes from 'prop-types';

const Nav = (props) => {
  const { display } = props;
  return (
    <>
      <div>
        <span className={display}>&lt; Back</span>
        <span>CoronaWide</span>
      </div>
      <div>
        <span>World&apos;s CoronaVirus Statistics</span>
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
