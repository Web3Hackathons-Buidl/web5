import Navbar from "@/components/layout/Navbar";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



export default function Home() {
  return (
    <main className="bg-[url('/images/home/base_l.jpg')] bg-center bg-cover bg-fixed">
      <div className='md:px-20 px-8 space-y-4 md:space-y-0 md:flex justify-between items-center py-12 w-full fixed'>
        <Link href={'/'} className='relative w-32'>
          <img src={'/images/logo_l.svg'} alt='logo' />
        </Link>
        <div className='flex gap-x-8 items-center'>
          <button>
            <FontAwesomeIcon
              icon={faMoon}
              className={'h-6 w-6 text-teal-500'}
            />
          </button>
          <button className='rounded-xl py-2.5 font-semibold bg-white px-5 hover:scale-[0.99] duration-200 transition'>Claim Drop</button>
          <button className='rounded-xl py-2.5 font-semibold greenToPurple px-3 hover:scale-[0.99] duration-200 transition'>Login</button>
        </div>
      </div>
      <div className="md:px-32 px-8 space-y-8 md:pt-40 pt-48">
        <p className="font-extralight">
          360NFT is currently invite-only
          <br />
          Here&apos;s how to <span><Link href={'/'} className="text-cyanSky">skip the waitlist now</Link></span>
        </p>
        <h1 className="text-5xl font-druk text-corbeau/80">
          GET ON
          <br />
          THE <span className="text-cyanSky">LIST</span>
        </h1>
        <h3 className="text-4xl font-light text-corbeau">
          Welcome Friend,
          <br />
          please log in
        </h3>
        <div className="rounded-3xl shadow-lg greenToPurple p-6 max-w-xl ">
          <h3 className="text-4xl font-black mb-5">Get early access</h3>
          <input type="email" name="" id="" className="bg-white py-2.5 rounded-lg px-4 w-full mb-5" placeholder="Email" />
          <div className="w-full">
            <button className="bg-black w-full text-sm py-2 rounded-lg">Register</button>
            <button className="text-gray-300 text-sm mt-4">Signed Up before? Check your status</button>
          </div>
        </div>
      </div>
      <footer className="md:px-40 px-10 flex justify-between text-sm mt-20 pb-8">
        <p>© 2021 360NFT</p>
        <Link href={'/'} className="text-blue-500 hover:text-blue-600">Terms & conditions</Link>
      </footer>
    </main>
  )
}
