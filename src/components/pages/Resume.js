import ResumePdf from "../../assets/Eric-Kongkaew.pdf"
import "../../styles/Content.css";

import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
 } from "vertical-timeline-component-react";
 
 const Resume = () => {
  const customTheme = {
   yearColor: '#405b73',
   lineColor: '#d0cdc4',
   dotColor: '#262626',
   borderDotColor: '#d0cdc4',
   titleColor: '#405b73',
   subtitleColor: '#bf9765',
   textColor: '#262626',
  };
 
  return (
    <div className="content">
      <div className="timeline">
   <Timeline theme={customTheme} dateFormat='ll'>
   <Container>
     <YearContent startDate='2021/10' currentYear />
     <BodyContent>
      <Section title='Thermo Fisher Scientific'>
        <Description variant='subtitle' text='Manufacturer Technician I' />
        <Description text='Description' />
      </Section>
      </BodyContent>
      </Container>

    <Container>
    <YearContent startDate='2015/11' endDate='2020/05' />
    <BodyContent>
     <Section title='Walgreens Boots Alliance'>
      <Description variant='subtitle' text='Store Manager' />
      <Description text='Description' />
     </Section>

     <Section>
     <Description variant='subtitle' text='Assistant Manager' />
      <Description text='Description' />
     </Section>
    </BodyContent>
   </Container>

   <Container>
    <YearContent startDate='2007/09' endDate='2015/11' />
    <BodyContent>
     <Section title='Walgreens Co.'>
      <Description variant='subtitle' text='Shift Leader' />
      <Description text='Description' />
     </Section>

     <Section>
     <Description variant='subtitle' text='Customer Service Associate' />
      <Description text='Description' />
     </Section>
    </BodyContent>
   </Container>

   <Container>
    <YearContent startDate='2007/11' endDate='2009/10' />
    <BodyContent>
     <Section title='Genesis Healthcare'>
      <Description variant='subtitle' text='General Maintenance Technician' />
      <Description text='Description' />
     </Section>
    </BodyContent>
   </Container>

   </Timeline>
   <p>
      Download my resume:&nbsp;
    <span>
      <a href={ResumePdf} target="_blank" rel="noopener noreferrer">Here</a>
    </span>
    </p>
  </div>
</div>
  );
 };
  
  export default Resume;