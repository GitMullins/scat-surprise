import React from 'react';
import scatShape from '../../helpers/propz/scatShape';

import './ScatCard.scss';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatCardShape,
  }

  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.sampleNum}</h5>
            <p className="card-text">{scat.location}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
