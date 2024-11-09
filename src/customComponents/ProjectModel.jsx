import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectIcon from './ProjectIcon';
import logo from '../assets/dp900.png';
function ProjectModel() {
  const [key, setKey] = useState('powerbi');

  return (
    <section className='project-section' id='projects'>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      defaultActiveKey="powerbi"
      onSelect={(k) => setKey(k)}
      className="mb-3 custom-tab"
    >
      <Tab eventKey="powerbi" title="Power BI">
        <div className='project-container'>
        <ProjectIcon imageurl={logo} heading="Sales Insights Project" text="Titan Tek  Hardware a Computer Hardware manufacturer is facing issues in terms of their sales. As the market is growing dynamically the Sales Director is having issues of the business."></ProjectIcon>
        <ProjectIcon imageurl={logo} heading="Title heading2" text="subheading"></ProjectIcon>
        <ProjectIcon imageurl={logo} heading="Title heading3" text="subheading"></ProjectIcon>
        <ProjectIcon imageurl={logo} heading="Title heading4" text="subheading"></ProjectIcon>
        </div>
      </Tab>
      <Tab className='tab-custom' eventKey="sql" title="SQL">
      <div className='project-container'>
      <ProjectIcon imageurl={logo} heading="Title heading" text="subheading"></ProjectIcon>
      <ProjectIcon imageurl={logo} heading="Title heading" text="subheading"></ProjectIcon>
      </div>
      </Tab>
      <Tab className='tab-custom' eventKey="data" title="Data Engineering">
      <div className='project-container'>
      <ProjectIcon imageurl={logo} heading="Title heading" text="subheading"></ProjectIcon>
      </div>
      </Tab>
      <Tab className='tab-custom' eventKey="py" title="Python">
      <div className='project-container'>
      <ProjectIcon imageurl={logo} heading="Title heading" text="subheading"></ProjectIcon>
      </div>
      </Tab>
    </Tabs>
    </section>
  );
}

export default ProjectModel;