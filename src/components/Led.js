import React from 'react';

function Led({ status,letter,segment }) {
  return (
    <div className={status}>
      <div className={`${segment} segment-${letter}`}>
        <span className="segment-border">{letter}</span>
      </div>
    </div>
  );
}

export default Led;
