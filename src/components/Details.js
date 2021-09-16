import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const {
    deaths,
    confirmed,
    recovered,
    critical,
  } = location.state.latest_data;

  return (
    <div>
      <div>
        <span>
          Latest data:
        </span>
        <span>
          Confirmed:
          {confirmed}
        </span>
        <span>
          Recovered:
          {recovered}
        </span>
        <span>
          Critical:
          {critical}
        </span>
        <span>
          Deaths:
          {deaths}
        </span>
      </div>
    </div>
  );
};

export default Details;
