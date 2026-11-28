import image from '../assets/webp/image_14_4x.webp'

export default function Architecture() {
  return (
    <section className='h-svh w-full overflow-hidden flex flex-col justify-start items-start'>
      <h1 className='text-red-500 font-heathergreen tracking-wide left-10 relative -mt-20 leading-none whitespace-nowrap text-[800px] '>
        ARCHITECHTURE
      </h1>
      <div className='grid grid-cols-2 w-full relative text-white px-10'>
        <p className='text-white z-20 font-readex text-2xl tracking-wider leading-10'>Architecture is more than the process of designing buildings. It is the art of shaping spaces that connect human experiences, functionality, and visual identity. Every structure carries its own character, expressed through its proportions, materials, textures, and relationship with the surrounding environment. From minimalist residences to monumental structures, architecture reflects the way people think,</p>
        <img src={image} className='absolute w-1/2 grid- right-0 -bottom-30 h-189.75 object-cover overflow-hidden' />         
      </div>
    </section>
  )
}
