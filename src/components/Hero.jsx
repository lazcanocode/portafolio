import React from 'react';
import profile from '../assets/statics/Profile@2x.png';
import github from '../assets/statics/Github@2x.png';
import linkedin from '../assets/statics/Linkdein@2x.png';

const githubLink = 'https://github.com/Luis-Lazcano';
const linkedinLink = 'https://www.linkedin.com/in/luis-alberto-lazcano-cruz-9a9845148/';

const Hero = () => {
  return (
    <div className='Hero'>
      <h2 className='Hero__text'>Hola soy Luis Alberto, desarrollador de software especialista en backend</h2>
      <div className='Hero__img'>
        <img className='Hero__img--profile' src={profile} alt='Foto de Perfil' />
        <div className='Hero__img--social'>
          <a target='_blank' href={githubLink}><img className='Hero__img--social--github' src={github} alt='Github' /></a>
          <a target='_blank' href={linkedinLink}><img className='Hero__img--social--linkedin' src={linkedin} alt='Github' /></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
