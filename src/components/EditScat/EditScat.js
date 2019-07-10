import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import scatData from '../../helpers/data/scatsData';

import './EditScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleNum: 'ABC',
  animal: '',
  uid: '',
};

class EditScat extends React.Component {
  state ={
    newScat: defaultScat,
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ newScat: scatPromise.data }))
      .catch(err => console.error('could not find scat', err));
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[name] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  sampleNumChange = e => this.formFieldStringState('sampleNum', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  animalChange = e => this.formFieldStringState('animal', e);

  locationChange = e => this.formFieldStringState('location', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newScat };
    const scatId = this.props.match.params.id;
    saveMe.uid = firebase.auth().currentUser.uid;
    scatData.putScat(saveMe, scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  render() {
    const { newScat } = this.state;
    return (
      <div className="EditScat">
        <h1>New Scat</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="sampleNum">Sample Num</label>
            <input
            type="text"
            className="form-control"
            id="sampleNum"
            placeholder="sample 1"
            value={ newScat.sampleNum}
            onChange={this.sampleNumChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
          type="text"
          className="form-control"
          id="color"
          placeholder="color"
          value={ newScat.color}
          onChange={this.colorChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Weight</label>
          <input
          type="text"
          className="form-control"
          id="weight"
          placeholder="weight"
          value={ newScat.weight}
          onChange={this.weightChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Animal</label>
          <input
          type="text"
          className="form-control"
          id="animal"
          placeholder="animal"
          value={ newScat.animal}
          onChange={this.animalChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Location</label>
          <input
          type="text"
          className="form-control"
          id="location"
          placeholder="location"
          value={ newScat.location}
          onChange={this.locationChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Edit Scat</button>
      </form>
      </div>

    );
  }
}

export default EditScat;
