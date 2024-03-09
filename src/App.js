import './App.css';
import Particles from './components/Particles/Paticles';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';

function App() {
  return (
    <div className="App">
      <Particles />
      <Navigation />
      <Rank/>
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
