import React from 'react'
import Page1 from '../../../components/services/linkedin/Page1'
import Page2 from '../../../components/services/linkedin/Page2'
import Page3 from '../../../components/services/linkedin/Page3'
import Page4 from '../../../components/services/linkedin/Page4'


export default function Linkedin(){
    return(
        <div className='flex flex-col h-full bg-gradient-to-r from-blue-800 to-purple-600'>
        {/* Page 1 Content */}
        <div className='mt-4'>
            <Page1/>
        </div>
        
      
        <div className=''>
            <Page2/>
        </div>
     
        <div className='mt-[20px]'>
        <Page3/>
        </div>

       
        <div className='mt-[20px]'>
        <Page4/>
        </div>
          {/*
        <div className='mt-[20px]'>
        <Page5/>
        </div> */}
    </div>
    )
}