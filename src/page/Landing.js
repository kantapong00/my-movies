import React from 'react'
import { Background, WelcomeText, HyperText } from '../component/style'
import { Link } from 'react-router-dom'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

export default function Landing() {

  return (
    <Background>
      <WelcomeText>
        <Texty>Welcome to My Movies</Texty>
      </WelcomeText>
      <Link to='/main'>
        <HyperText>Go to main page</HyperText>
      </Link>
    </Background>
  )
}