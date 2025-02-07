import React from 'react'
import BankTree from '../../assets/img/bank-tree.jpeg'

const Hero = () => {
  return (
      <div className='hero'>
      <section>
          <img src={BankTree} alt='Image de la bannière représentant un arbre avec de la monnaie' className='hero__img' />
          <div className="hero__content">
          <p className='hero__content--title'>No fees.</p>
          <p className='hero__content--title'>No minimum deposit.</p>
          <p className='hero__content--title'>High interest rates.</p>
          <p className='hero__content--subtitle'>Open a savings account with Argent Bank today!</p>
          </div>
      </section>
      </div>
  )
}
 export default Hero