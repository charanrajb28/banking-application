import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {
        $id: "user_002",
        email: "charanrajb282004@gmail.com",
        userId: "charanraj_001",
        dwollaCustomerUrl: "https://api.dwolla.com/customers/charanraj_001",
        dwollaCustomerId: "charanraj_001",
        firstName: "Charan Raj",
        lastName: "B",
        address1: "42 Galaxy Avenue",
        city: "Bengaluru",
        state: "KA",
        postalCode: "560001",
        dateOfBirth: "2004-08-28",
        ssn: "4321"
      }
  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="welcome"
                    user={loggedIn?.firstName|| 'guest'}
                    subtext="Access and manage your account and transactions efficiently"
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={12500000}
                />
            </header>

            <h1>RECENT TRANSACTIONS</h1>
        </div>
        <RightSideBar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance : 123.50 },{currentBalance:500.50}]}
        />
    </section>
  )
}

export default Home
