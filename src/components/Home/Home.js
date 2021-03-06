import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import { Link } from 'react-router-dom';

import './Home.scss';
import scatsData from '../../helpers/data/scatsData';

import ScatCard from '../ScatCard/ScatCard';


class Home extends React.Component {
  state = {
    scats: [],
  }

  getScats = () => {
    const { uid } = firebase.auth().currentUser;
    scatsData.getMyScats(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error(err, 'could not get data from Home'));
  }

  componentDidMount() {
    this.getScats();
  }

  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  }

  deleteScat = (scatId) => {
    scatsData.deleteScat(scatId)
      .then(() => this.getScats())
      .catch(err => console.error(err, 'unable to delete'));
  }

  render() {
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
      key={scat.id}
      scat={scat}
      deleteScat={this.deleteScat}
      />
    ));

    return (
      <div className="Home col">
        <h1>Home</h1>
        <div className="d-flex">
        { makeScatCards }
        </div>
      </div>
    );
  }
}

export default Home;
