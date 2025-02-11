import React from 'react'

import Hero from '../../containers/Hero/Hero'
import Icon from '../../components/Icon/Icon'

import ChatIcon from '../../assets/img/icon-chat.png'
import MoneyIcon from '../../assets/img/icon-money.png'
import SecurityIcon from '../../assets/img/icon-security.png'

const Home = () => {
  return (
      <main className='home__content'>
        <Hero />
        <section className='feature'>
          <Icon
            icon={ChatIcon}
            title='You are our #1 priority'
            text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
          />
          <Icon
            icon={MoneyIcon}
            title='More savings means higher rates'
            text='The more you save with us, the higher your interest rate will be!'
          />
          <Icon
            icon={SecurityIcon}
            title='Security you can trust'
            text='We use top of the line encryption to make sure your data and money is always safe.'
          />
        </section>
      </main>
  )
}

export default Home