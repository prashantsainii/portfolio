import React from 'react'
import {logo} from '../../assets/index'
import {navLinksdata} from '../../constants'
const Navbar = () => {
  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center font-titleFont">
        <div>
            <img src={logo} alt="mylogo" />
        </div>
        <div>
            <ul className='flex items-center gap-10'>
                {
                    navLinksdata.map(({_id,title,link}) => (
                        <li 
                        key={_id}
                        className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-200'
                        > 
                            {title} 
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar