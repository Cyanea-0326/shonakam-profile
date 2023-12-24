import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-900 flex min-h-screen flex-col items-center justify-between p-24">
      <div className='text-white'>
        <p>Hello world!</p>
        <br/>
        <div>
          <p>--showcase</p>
          <a className='hover:text-green-500' href='https://neighbor-cat-cyanea-0326.vercel.app/home'>::NEIGHBOR-CAT</a>
          <br/>
          <a className='hover:text-green-500' href='https://erc-6551-dynamic-pricing-market.vercel.app/DPMarket/Buy'>::DPmarket (requires browser wallet)</a><a className='hover:text-blue-500' href='https://docs.google.com/presentation/d/1ygR1_VGnG2-VOO4FazR4S0lFayPY_kBpDNu91nCsAho/edit?usp=sharing'>::Pitch Deck</a>
          <br/>
          <br/>
        </div>
        <div>
          <p>--profile</p>
          <a className='hover:text-green-500' href='https://twitter.com/Cyaneq'>::Twitter</a>
          <br/>
          <a className='hover:text-green-500' href='https://github.com/Cyanea-0326'>::Github</a>
        </div>
      </div>
    </main>
  )
}
