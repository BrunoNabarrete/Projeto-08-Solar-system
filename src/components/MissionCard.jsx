import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    // const { missions } = this.props;
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  year: PropTypes.shape({
    year: PropTypes.string,
  }).isRequired,
  country: PropTypes.shape({
    country: PropTypes.string,
  }).isRequired,
  destination: PropTypes.shape({
    destination: PropTypes.string,
  }).isRequired,
};

export default MissionCard;
