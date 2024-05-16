import React from 'react';

const ToWatch = ({setWatchStatusTab}) => {
  return (
    <button onClick={()=> {setWatchStatusTab('filterToWatch')}}>To Watch</button>
    );
};

export default ToWatch;