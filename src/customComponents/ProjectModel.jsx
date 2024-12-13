import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectIcon from './ProjectIcon';
import logo from '../assets/dp900.png';
import logop1 from '../assets/SalesInsights.png';
import logop2 from '../assets/Hotelbookings.png';
import logop3 from '../assets/InsuranceClaimsAnalysis2.png';
import logop4 from '../assets/alcoholstuss.png';

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
        <ProjectIcon imageurl={logop1} href="https://app.powerbi.com/links/ju7P53m6sr?ctid=96464a8a-f8ed-40b1-99e2-5f6b50a20250&pbi_source=linkShare" heading="Sales Insights Project" text="Developed a dashboard in Power BI for Sales director of Computer Hardware Manufacturer to track sales and get insights of the business."></ProjectIcon>
        <ProjectIcon imageurl={logop2} href= "https://app.powerbi.com/links/DDx082h71L?ctid=96464a8a-f8ed-40b1-99e2-5f6b50a20250&pbi_source=linkShare&bookmarkGuid=fae5ac67-e103-49ef-a030-c73ee0f1c565" heading="Hotel Bookings" text="subheading"></ProjectIcon>
        
        </div>
      </Tab>
      <Tab className='tab-custom' eventKey="sql" title="SQL">
      <div className='project-container'>
      <ProjectIcon imageurl={logop3} href="https://github.com/AparnaD301/InsuranceClaimsAnalysis" heading="Insurance Claims Analysis" text="Analyzing sample insurance data with PostgreSQL to identify trends and optimize claim processing."></ProjectIcon>
      <ProjectIcon imageurl={logop4} heading="Impact of Alcohol Consumption on Student Success" text="Analyze Impact of Alcohol Consumption on student success with MySQL using dataset from Kaggle."></ProjectIcon>
      </div>
      </Tab>
      
    </Tabs>
    </section>
  );
}

export default ProjectModel;