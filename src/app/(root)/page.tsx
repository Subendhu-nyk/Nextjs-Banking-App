import HeaderBox from '@/components/header-box'
import TotalBalanceBox from '@/components/total-balance-box'
import React from 'react'

const Home = () => {
  const loggedIn= {firstName:'Sam'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type='greeting' title='Welcome' user={loggedIn?.firstName|| "guest"} subtext="Access and manage your account and transaction efficiently."/>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={5000}/>
        </header>
      </div>
    </section>
  )
}

export default Home