import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ProjectIcon(props) {
  return (<>
  
  <div className='project-icon' style={ {backgroundImage: "url(" + props.imageurl + ")"} }>
  <a className="a-link" href="#">
  <div className='project-container-icon' >
    <h4 className='project-title projecttext'>{props.heading}</h4>
    <p className='project-subtitle projecttext'>{props.text}</p>
    </div>
    </a>
    </div>
    
  </>);
}

export default ProjectIcon;