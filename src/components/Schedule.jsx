import React from 'react';
import PropTypes from 'prop-types'

function Schedule(props) {
  return (
    <div>
      <div>
        <style jsx global>{`
          .day {
            margin-top: 30px;
          }
          .lineWidth {
            width: 300px;
            margin-left: -20px;
          }
        `}</style>
      </div>
      <div className="day">
        <p>Day: {props.day}</p>
        <p>Location: {props.location}</p>
        <p>Hours: {props.hours}</p>
        <p>Booth: {props.booth}</p>
        <hr className="lineWidth"/>
      </div>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
};

export default Schedule;