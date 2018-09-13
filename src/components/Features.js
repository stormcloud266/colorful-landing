import React from 'react';
import Sprite from '../images/orion-svg-sprite.svg';

const Features = (props) => {
  return (
    <section className="Features" id="features">
      <div className="Features__inner wrapper">
        <div className="Features__container">
          <svg><use xlinkHref={`${Sprite}#screwdriver-1`}></use></svg>
          <div className="Features__text">
            <p className="Features__title">Tailor Crafted</p>
            <p className="Features__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, odit?</p>
          </div>
        </div>
        <div className="Features__container">
          <svg><use xlinkHref={`${Sprite}#diploma-1`}></use></svg>
          <div className="Features__text">
            <p className="Features__title">Quality Materials</p>
            <p className="Features__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatibus, suscipit maiores?</p>
          </div>
        </div>
        <div className="Features__container">
          <svg><use xlinkHref={`${Sprite}#healthcare-1`}></use></svg>
          <div className="Features__text">
            <p className="Features__title">Custom Sizes</p>
            <p className="Features__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, at, saepe.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;
