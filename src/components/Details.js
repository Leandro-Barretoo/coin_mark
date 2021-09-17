import { useLocation } from 'react-router-dom';
import './Details.css';

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
        <span className="Stats-Title">Today stats:</span>
        <div className="Stats-Entrie">
          <span>Confirmed:</span>
          <span>{ today.confirmed }</span>
        </div>
        <div className="Stats-Entrie">
          <span>Deaths:</span>
          <span>{ today.deaths }</span>
        </div>
      </div>
      <div>
        <span className="Stats-Title">Latest data:</span>
        <div className="Stats-Entrie">
          <span>Confirmed:</span>
          <span>{confirmed}</span>
        </div>
        <div className="Stats-Entrie">
          <span>Recovered:</span>
          <span>{recovered}</span>
        </div>
        <div className="Stats-Entrie">
          <span>Critical:</span>
          <span>{critical}</span>
        </div>
        <div className="Stats-Entrie">
          <span>Deaths:</span>
          <span>{deaths}</span>
        </div>
      </div>
      <div>
        <span className="Stats-Title">Country statistics:</span>
        <div className="Stats-Entrie">
          <span>Death rate:</span>
          <span>{calculated.death_rate}</span>
        </div>
        <div className="Stats-Entrie">
          <span>Recovery rate:</span>
          <span>{calculated.recovery_rate}</span>
        </div>
        <div className="Stats-Entrie">
          <span>Recover/Death ratio:</span>
          <span>{calculated.recovered_vs_death_ratio}</span>
        </div>
        <div className="Stats-Entrie">
          <span>Cases per million:</span>
          <span>{calculated.cases_per_million_population}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
