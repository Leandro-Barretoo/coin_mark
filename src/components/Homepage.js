import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCovidData } from '../redux/markets/markets';

const Homepage = () => {
  const dispatch = useDispatch();
  const covidList = useSelector((state) => state.covidReducer);

  const getCovidData = () => (dispatch) => {
    fetch('https://corona-api.com/countries')
      .then((response) => response.json())
      .then((data) => data.data.forEach((covid) => {
        dispatch(addCovidData(covid));
      }));
  };

  useEffect(() => {
    if (!covidList.length) {
      dispatch(getCovidData());
    }
  }, []);

  const myCovidData = covidList.map((covid) => (
    <div key={covid.code}>
      <div>
        <Link to={{ pathname: '/details', state: covid }}>
          {covid.name}
        </Link>
      </div>
    </div>
  ));

  return (
    <div>
      { myCovidData }
    </div>
  );
};

export default Homepage;
