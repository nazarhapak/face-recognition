import React, {Component} from 'react';
import ParticlesBg from 'particles-bg'

class Particles extends Component {
    render () {
      return (<ParticlesBg color="#ffffff"num={50} type="cobweb" bg={true}/>)
    }
  }

export default Particles;