import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Homepage.css';
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
    <div className="Country-Data" key={covid.code}>
      <div className="Country-Card">
        <Link className="Country-Link" to={{ pathname: `/details/${covid.name}`, state: covid }}>
          {covid.name}
        </Link>
      </div>
      <div className="Population">
        Pop:&nbsp;
        {covid.population}
      </div>
    </div>
  ));

  const findCountry = () => {
    let textData = '';
    const input = document.getElementById('myCountry');
    const filter = input.value.toUpperCase();
    const list = document.getElementsByClassName('Country-Data');

    [...list].forEach((country) => {
      const temp = country;
      textData = temp.textContent || temp.innerText;
      if (textData.toUpperCase().indexOf(filter) > -1) {
        temp.style.display = '';
      } else {
        temp.style.display = 'none';
      }
    });
  };

  return (
    <>
      <div className="Country-Nav">STATS BY COUNTRY</div>
      <input className="Search" type="text" id="myCountry" onKeyUp={findCountry} placeholder="Search country.." />
      <div className="Countries-Cont">
        { myCovidData }
      </div>
    </>
  );
};

export default Homepage;
