import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

const mission = 'Missões';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline={ mission } />
        {missions.map((task) => (
          <MissionCard
            key={ task.name }
            name={ task.name }
            year={ task.year }
            country={ task.country }
            destinatio={ task.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
