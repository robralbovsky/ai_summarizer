import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center felx-col'>
        <nav className='flex justify-center items-center flex-col'>
            <img src={logo} alt='logo' className='w-28 object-contain' />
        </nav>
    </header>
  )
}

export default Hero;