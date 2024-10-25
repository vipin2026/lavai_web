import React from 'react'
import Page1 from '../../../components/services/orchestration/Page1'
import Page2 from '../../../components/services/orchestration/Page2'
import Page3 from '../../../components/services/orchestration/Page3'
import Page4 from '../../../components/services/orchestration/Page4'
import Page5 from '../../../components/services/orchestration/Page5'
import Page6 from '../../../components/services/orchestration/Page6'

export default function Journey(){
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
        
        <div className='mt-[20px]'>
        <Page5/>
        </div>
        
        <div className='mt-[20px]'>
        <Page6/>
        </div>
    </div>
)
}