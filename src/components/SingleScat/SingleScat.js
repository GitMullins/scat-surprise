import React from 'react';

import './SingleScat.scss';

class SingleScat extends React.Component {
  render() {
    const { scats } = this.props;
    return (
      <div className="SingleScat">
        <div className="card">
        {/* <img src={scat.imageUrl} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <div className="scat-text">
          <h5 className="card-title">{scats.name}</h5>
          {/* <p className="card-text">{scat.favoriteActivity}</p> */}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SingleScat;
