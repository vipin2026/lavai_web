import React from 'react'
import Page1 from '../../../components/services/whatsapp/Page1'
import Page2 from '../../../components/services/whatsapp/page2'
import Page3 from '../../../components/services/whatsapp/Page3'

export default function WhatsApp() {
    return(
        <div className='flex flex-col h-full bg-gradient-to-r from-blue-800 to-purple-600'>
            {/* Page 1 Content */}
            <div className='mt-4'>
                <Page1/>
            </div>
            
            {/* Page 2 Content */}
            <div className='mt-[700px] '>
                <Page2/>
            </div>
            {/* page 3 content  */}
            <div className='mt-[20px]'>
            <Page3/>
            </div>
        </div>
    )
}
