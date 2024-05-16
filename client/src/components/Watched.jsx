import React from 'react';

const Watched = ({setWatchStatusTab}) => {
return (
<button onClick={()=> {setWatchStatusTab('filterWatched')}}>Watched</button>
);
};

export default Watched;