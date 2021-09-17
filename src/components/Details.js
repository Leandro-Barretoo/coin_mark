import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const {
    deaths,
    confirmed,
    recovered,
    critical,
    calculated,
  } = location.state.latest_data;
  const { today } = location.state;

  return (
    <div>
      <div>
        <span>Today stats:</span>
        <span>
          Confirmed:
          { today.confirmed }
        </span>
        <span>
          Deaths:
          { today.deaths }
        </span>
      </div>
      <div>
        <span>Latest data:</span>
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
      <div>
        <span>Country statistics:</span>
        <span>
          Death rate:
          {calculated.death_rate}
        </span>
        <span>
          Recovery rate:
          {calculated.recovery_rate}
        </span>
        <span>
          Recover/Death ratio:
          {calculated.recovered_vs_death_ratio}
        </span>
        <span>
          Cases per million:
          {calculated.cases_per_million_population}
        </span>
      </div>
    </div>
  );
};

export default Details;
