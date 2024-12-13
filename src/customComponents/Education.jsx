import Accordion from 'react-bootstrap/Accordion';
function Education() {
  return (<>
    <section className='custom-accordian education-section' id="education">
      <h3 className='custom-accordian-title'>Education</h3>
      <Accordion defaultActiveKey={['0','1']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>University at Buffalo</Accordion.Header>
          <Accordion.Body><p>
            Master of Science in Management Information Systems (MIS)</p>
            <p>GPA: 3.8 | June 2024</p>
            <p>At University at Buffalo, I pursued a comprehensive MIS program with a strong focus on data analytics, data engineering, and business intelligence.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Anna University</Accordion.Header>
          <Accordion.Body>
          <p>Bachelor of Engineering in Computer Science</p>
          <p>GPA: 3.7 | June 2021</p>
          <p>Studies at RMK Engineering College laid the foundation for her career in data and technology. The Computer Science program provided a solid grounding in database management systems, algorithms, programming, and data structures, essential for a career in data analysis and engineering.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  </>);
}
export default Education