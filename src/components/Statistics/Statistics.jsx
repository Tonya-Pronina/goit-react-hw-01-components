import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export default function Statistics ({stats, title}) {
    return ( 
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
  {stats.map(({id, label, percentage}) => {
    return (
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}} key={id}>
      <span className={css.label}>{label}</span> 
      <span className={css.percentage}>{percentage}%</span>
    </li>
    );
   })}
  </ul>
</section>
     );
};


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}