import React from 'react';

import './NewScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleNum: 'ABC',
  animal: '',
};

class NewScat extends React.Component {
  state ={
    newScat: defaultScat,
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

  render() {
    const { newScat } = this.state;
    return (
      <div className="NewScat">
        <h1>New Scat</h1>
        <form>
          <div class="form-group">
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
          <div class="form-group">
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
        <div class="form-group">
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
        <div class="form-group">
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
        <div class="form-group">
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>

    );
  }
}

export default NewScat;
