import landingImage from '../assets/webp/image_12_4x.webp'

export default function LandingSection() {
  return (
    <div>
      <h1 className='font-heathergreen text-black-custom absolute text-[600px] -mt-40'>ARCHI<span className='text-red-500'>TECH</span>TURE</h1>
      <img src={landingImage} className='min-h-screen' />        
    </div>
  )
}
