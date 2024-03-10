import React, {Component} from 'react';
import './App.css';
import Particles from './components/Particles/Paticles';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const getRequestOptions = (imageURL) => {
  const PAT = '218fa173358d40d2912f4c1bd4d4d73e';
  const USER_ID = 'clarifai';
  const APP_ID = 'main';
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                      // "base64": IMAGE_BYTES_STRING
                  }
              }
          }
      ]
  });

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  };

  return requestOptions
}

const getFaceLocation = async function (imageURL) {
  const result = fetch("https://api.clarifai.com/v2/models/face-detection/outputs", getRequestOptions(imageURL))
  .then(response => response.json())
  .then(result => {

      const regions = result.outputs[0].data.regions;

      if(regions !== undefined) {
        const arrayOfBoundingBoxes = regions.map(region => {
          const boundingBox = region.region_info.bounding_box;
          const topRow = boundingBox.top_row.toFixed(3);
          const leftCol = boundingBox.left_col.toFixed(3);
          const bottomRow = boundingBox.bottom_row.toFixed(3);
          const rightCol = boundingBox.right_col.toFixed(3);
          return {topRow, leftCol, bottomRow, rightCol};
        });;
  
        return arrayOfBoundingBoxes;
      }
  })
  .catch(error => console.log('This URL is not working\n', error));

  return result;
}

const calculateFaceBorders = (array) => {
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  const arrayOfBoundingBoxes = array.map(box => {
    const {topRow, bottomRow, leftCol, rightCol} = box;
    const top_row = height * topRow;
    const left_col = width * leftCol;
    const bottom_row = height - (height * bottomRow);
    const right_col = width - (width * rightCol);
    return {top_row, left_col, bottom_row, right_col};
  });
  return arrayOfBoundingBoxes;
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
      imageURL: '',
      arrayOfBoundingBoxes: [],
      route: 'signIn',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    if (this.state.input.length > 0) {
      this.setState({imageURL: this.state.input})
      getFaceLocation(this.state.input).then(resp => {if(resp === undefined){resp = []}; this.setState({arrayOfBoundingBoxes: calculateFaceBorders(resp)})});
    }
  }

  changeRoute = (route) => {
    this.setState({route: route})
    if (route === 'signIn' || route === 'register') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
  }

  render () {
    return (
      <div className="App">
        <Particles />
        <Navigation changeRoute={this.changeRoute} isSignedIn={this.state.isSignedIn}/>
        { (() => {
          if (this.state.route === 'signIn') {
            return (
              <SignIn changeRoute={this.changeRoute}/>
            )
          } else if (this.state.route === 'register') {
            return (
              <Register changeRoute={this.changeRoute}/>
            )
          } else if (this.state.route === 'home') {
            return (
              <div>
                <Rank/>
                <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                <FaceRecognition imageURL={this.state.imageURL} arrayOfBoundingBoxes={this.state.arrayOfBoundingBoxes}/>          
              </div>
            )
          }
        })()}
      </div>
    );
  }
}

export default App;
