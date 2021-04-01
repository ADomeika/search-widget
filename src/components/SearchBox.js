import React, { useState } from 'react';
import './SearchBox.css';

import Suggestions from './Suggestions';
import Loader from './Loader';
import useApi from '../hooks/useApi';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { fetchData, data, setData, loading } = useApi();

  const onValueChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length > 1) {
      fetchData(term);
    } else {
      setData([]);
    }
  };

  return (
    <div className='search-box'>
      <h3 className='search-box__heading'>Where are you going?</h3>
      <div className='search-box__input-holder'>
        <div className='input-group'>
          <label
            className='input-group__label'
            htmlFor='pick-up-location'
          >
            Pick-up Location
          </label>
          <div className='input-group__text-holder'>
            <input
              className='input-group__text-input'
              id='pick-up-location'
              type='text'
              placeholder='city, airport, station, region, district…'
              name='Pick-up Location Input'
              value={searchTerm}
              onChange={onValueChange}
            />
            {loading && (
              <div className='loader-holder'>
                <Loader />
              </div>
            )}
          </div>
        </div>
        {data.length > 0 && <Suggestions suggestions={data} />}
      </div>
    </div>
  );
};

export default SearchBox;
