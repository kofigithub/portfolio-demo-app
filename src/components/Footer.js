
import React from 'react';
import { socialMediaLinks } from "../portfolio.js";
import 'font-awesome/css/font-awesome.min.css';

// styles
import '../App.css';

const Footer = () => {
  return (
    <footer>
	<div  align="right">&nbsp;&nbsp;&nbsp;&nbsp;Follow me on social these media channels:<br /><br />
         </div>
		 <div id="soMedLinks">	
	{socialMediaLinks.reverse().map(socialmed => {
        return(
          <div key={socialmed.id}>
		  
		  <ul>
           <li><a href={socialmed.link}>  <i className={socialmed.fontAwesomeIcon} style={{
		   /*color : socialmed.backgroundColor*/
		   }}></i></a></li>
         </ul>		
          
		  </div>
        );
      })}
		  </div>
		  
	<br clear="all" /><br />
      <div  align="center">
          
         Copyright © 2023 Portfolio Demo App. All Rights Reserved
        
      </div>
	   
	
  
	
    </footer>
  );
};

export default Footer;
