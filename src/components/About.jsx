import React from 'react'

const About = () => {
  return (
    <div name='about' className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quo magni corporis cum fugiat quaerat tempore eligendi architecto, aut enim molestiae atque, est, laborum itaque. Suscipit amet explicabo beatae quis.
            </p>
            <br />

            <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum consequuntur accusamus vero ut officiis consequatur eum at. Officia recusandae nesciunt numquam? Blanditiis voluptatibus sunt laudantium qui nesciunt cumque molestiae?
        </p>


        </div>
    </div>
  )
}

export default About