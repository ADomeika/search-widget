import React from 'react';
import './Suggestions.css';

const Suggestions = ({ suggestions }) => {
  const getPlaceType = (typeChar) => {
    switch (typeChar) {
      case 'A':
        return 'Airport';
      case 'C':
        return 'City';
      case 'T':
        return 'Station';
      case 'D':
        return 'District';
      case 'P':
        return 'Region';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className='suggestions'>
      <ul className='suggestions__list'>
        {suggestions.map((suggestion) => {
          if (suggestion.name === 'No results found') {
            return (
              <div className='suggestion__no-results' key='no-results'>No results found</div>
            );
          }
          return (
            <li key={suggestion.placeKey} className='suggestions__list-item'>
              <div className='suggestion'>
                <span
                  className={`suggestion__badge suggestion__badge--${getPlaceType(suggestion.placeType).toLowerCase()}`}
                >
                  {getPlaceType(suggestion.placeType)}
                </span>
                <div className='suggestion__info-holder'>
                  <div className='suggestion__title'>
                    {suggestion.name} {suggestion.iata ? `(${suggestion.iata})` : ''}
                  </div>
                  <div className='suggestion__subtext'>
                    {suggestion.city ? `${suggestion.city}, ` : ''}
                    {suggestion.region ? `${suggestion.region}, ` : ''}
                    {suggestion.country}
                  </div>
                </div>
              </div>
              <hr className='hr' />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Suggestions;
