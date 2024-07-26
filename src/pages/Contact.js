import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mvgpzdpg");
  if (state.succeeded) {
      return <p className='lead text-center my-5'>Thank you for your message!</p>
  }
  return (
    <div className="container my-5">
      <div className="mx-auto" style={{ maxWidth: "40rem" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-danger"
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={state.submitting}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
