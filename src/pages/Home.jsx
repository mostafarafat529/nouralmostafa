import React from 'react'
import History from '../component/History'
import PrayerTimes from '../component/PrayerTimes'
import QuickLinks from '../component/QuickLinks'



const Home = () => {
  return (
    <div className='pb-12'>
      <History/>
      <PrayerTimes/>
      <QuickLinks/>
    </div>
  )
}

export default Home