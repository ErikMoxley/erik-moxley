import Button from 'react-bootstrap/Button';
import ResumePdf from "../../assets/Eric-Kongkaew-Dev.pdf"

const Contact = () => {
  return (
<div className="content">
  <div className="flex-container">
  <div className="flex-child">
    <h2 className="con-title">Contact</h2>
      <p>Feel free to contact me via social media or through the working contact form built using Netlify forms.</p>
        <ul className="address">
        <a href='https://goo.gl/maps/f3D1vfaadg7MvoC66' alt='' target="_blank" rel="noopener noreferrer">
          <li>Greater Boston, United States</li></a>
          <li><span>
              <a href="tel:+19789358860">Call/Text via Mobile Phone
              </a></span></li>
          <li>
            <span>
              <a
                href="mailto:moxleydev@gmail.com"
                target="_blank"
                rel="noopener noreferrer">Email Me via Gmail
              </a></span></li>

                <li><span><a href="https://erikmoxley.com/" alt='' target="_blank" rel="noopener noreferrer">www.erikmoxley.com
              </a></span></li>
              <li>
              <p>
      Download:&nbsp;
    <span>
      <a href={ResumePdf} target="_blank" rel="noopener noreferrer">Resume PDF</a>
    </span>
    </p>
              </li>
        </ul>
  </div>

<div className="flex-child">
<form name="contact-form" method="POST" data-netlify="true" action="/contacts">
<input type="hidden" name="form-name" value="contact-form" />
<p className="hidden">
  <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
</p>
    <p>
      <label htmlFor="name">
        Your Name:
      </label><br/>
      <input type="text" name="name" id="name" />
    </p>
    <p>
      <label htmlFor="email">
        Your Email:
      </label><br/>
      <input type="email" name="email" id="email" />
    </p>
    <p>
      <label htmlFor="message">
        Message:
      </label><br/>
      <textarea name="message" id="message"></textarea>
    </p>
    <p>
      <Button type="submit" variant="light" value="Submit message">Submit</Button>
    </p>
  </form>
  </div>
  </div>
</div>
  )
}

export default Contact