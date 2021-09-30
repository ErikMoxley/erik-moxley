import ResumePdf from "../../assets/Eric-Kongkaew.pdf"

const Resume = () => {
    return (
      <div className="content">
        <header className="title">
          <p>
            Resume: Coming Soon!<br/>
            Download my old resume:&nbsp;
            <span><a href={ResumePdf} target="_blank" rel="noopener noreferrer">Here</a></span>
          </p>
        </header>
      </div>
    );
  }
  
  export default Resume;