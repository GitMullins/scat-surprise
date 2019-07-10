import React from 'react';
import { Link } from 'react-router-dom';

import scatsData from '../../helpers/data/scatsData';

import './SingleScat.scss';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatsData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error(err, 'unable to get single scat'));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    scatsData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error(err, 'unable to delete'));
  }

  render() {
    const { scat } = this.state;
    const editLink = `/edit/${this.props.match.id}`;
    return (
      <div className="SingleScat">
        <h1>{scat.sampleNum}</h1>
        <h2>{scat.location}</h2>
        <h3>{scat.animal}</h3>
        <h4>{scat.color}</h4>
        <h5>{scat.weight}</h5>
        <Link className="btn btn-primary" to={editLink}>Edit</Link>
        <button href="#" className="btn btn-danger" onClick={this.deleteScat}>Delete</button>
      </div>
    );
  }
}

export default SingleScat;
