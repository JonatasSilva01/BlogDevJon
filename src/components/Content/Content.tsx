import React from 'react';
import { IContentProps } from '../../interfaces/IContent';
import styled from 'styled-components';
import YoutubeImage from '@assets/Youtube-HD-Wallpapers-Free-Download.png';

const Content: React.FC<IContentProps> = () => {
  return (
    <React.Fragment>
      <ConentBackground>
        <div className='youtube'>
          <h1><strong>Acesse meus videos no youtube</strong> pra ver meus trabalhos!</h1>
          
        </div>
        <ImageBackground>
          <div className='blackTrasparent'></div>
          <img src={YoutubeImage} alt="Youtube" />
          <Button children='JonDev' href='https://www.youtube.com.br'/>
        </ImageBackground>
        
      </ConentBackground>
    </React.Fragment>
  )
}

const ConentBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1050px;

  margin: 1.5vw auto;

  div.youtube {
    width: 27vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3.5rem;
  }

  h1 {
    color: white;
    font-weight: 600;
    font-size: 2rem;

    strong {
      color: red;
      font-size: 2vw;
    }
  }
`;

const ImageBackground = styled.div`
  max-width: 500px;
  z-index: 2;
  width: 100%;


  overflow: hidden;
  height: 300px;
  position: relative;

  .blackTrasparent {
    width: 100%;
    height: 100%;
    background-color: #00000073;
    z-index: 2;
    position: absolute;
  }

  img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button = styled.a`

  & {
    position: relative;
  }

  color: white;
  background-color: red;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.5rem;

  z-index: 3;
  top: 16rem;
  left: 12rem;
  right: 0;
  bottom: 0;
  border-radius: 1rem;
  border: 3px solid #000;
`;

export default Content;