import React from 'react';
import About from './About';
import Awards from './Awards';
import Experience from './Experience';
import Interests from './Interests';
import Skills from './Skills';

export default function PageContent() {
    return <>
        <div class="container-fluid p-0">
            <About/>
            
            <hr class="m-0" />
            <Experience/>
          
            <hr class="m-0" />
     
            <Skills/>
           
            <hr class="m-0" />
            <Interests/>
        
            <hr class="m-0" />
            <Awards/>
         
        </div>
    </>;
}
