export default function Contact({ emailClick, waClick }) {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   const validatedEmail = validator.isEmail(form.current[1].value);
  //   if (validatedEmail == false) {
  //     alert("Failed to Send Email message.\n Your email is invalid");
  //     return false;
  //   }

  //   emailjs
  //     .sendForm(
  //       import.meta.env.VITE_APP_SERVICE_ID,
  //       import.meta.env.VITE_APP_TEMPLATE_ID,
  //       form.current,
  //       import.meta.env.VITE_APP_PUBLIC_KEY
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert(
  //           `${result.text}. Your message has been sent to Arif\n Thank you for your email. I really appreciate it.`
  //         );
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         alert("Notification: Failed to Send Email message");
  //       }
  //     );

  //   e.target.reset();
  // };
  return (
    <div className="mt-[200px] mb-[200px] bg-[linear-gradient(to_bottom,#4ea0d7,#472ac0)] rounded-[20px] p-[40px] grid grid-cols-6 gap-[20px]">
      <div className="flex flex-col gap-[40px] col-span-2">
        <h3 className="text-[63px]/[63px] font-bold">
          Let’s Work <br /> Together
        </h3>
        <div className="flex gap-[40px]">
          <div className="contact-tools" data-aos="fade-up">
            <a
              className="text-display3 rounded-[20px] text-center p-[20px] bg-[linear-gradient(to_top,#4ea0d7,#472ac0)] shadow-[-2px_4px_12px_#4ea0d7] transition-all ease-in hover:shadow-[-2px_-2px_10px_#472ac0]"
              href="mailto:arif.3ana@gmail.com"
              target="_blank"
              onClick={emailClick}
            >
              <i className="bi bi-envelope-at-fill" />
            </a>
          </div>
          <div className="contact-tools">
            <a
              className="text-display3 rounded-[20px] text-center p-[20px] bg-[linear-gradient(to_top,#4ea0d7,#472ac0)] shadow-[-2px_4px_12px_#4ea0d7] transition-all ease-in hover:shadow-[-2px_-2px_10px_#472ac0]"
              href="https://api.whatsapp.com/send?phone=6285703020296"
              target="_blank"
              onClick={waClick}
            >
              <i className="bi bi-whatsapp" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center col-span-3">
        <p p className="text-heading1">
          Looking for a developer to join your team or build your next idea? I’m
          open to work and freelance gigs!
        </p>
      </div>
      <div className=" text-center h-full flex items-center justify-end">
        <a
          className="border-2 rounded-xl p-[50px] w-full h-full cursor-pointer flex items-center justify-center hover:opacity-[0.6] hover:rounded-[50%] transition-all ease-in"
          href="mailto:arif.3ana@gmail.com"
          target="_blank"
        >
          <svg
            className="w-[50px] h-[50px] text-white"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.95911 13.125L13.2091 1.875M13.2091 1.875H1.95911M13.2091 1.875V13.125"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

{
  /* form email */
}
{
  /* <div className='main-contact'>
          <form className='form-message' ref={form} onSubmit={sendEmail}>
            <div className='mb-2' data-aos='fade-up' data-aos-duration='500'>
              <input
                type='text'
                className='form-input'
                name='user_name'
                placeholder='Name'
                required
              />
            </div>
            <div className='mb-2' data-aos='fade-up' data-aos-duration='500'>
              <input
                type='email'
                id='email'
                className='form-input'
                name='user_email'
                placeholder='Email'
                required
              />
            </div>
            <div data-aos='fade-up' data-aos-duration='500'>
              <textarea
                type='text'
                className='form-input area'
                placeholder='Leave a message here'
                name='message'
                required
                rows='3'></textarea>
            </div>
            <div className='form-botton' data-aos='zoom-in-up'>
              <Button
                type={"submit"}
                className={"btn-send"}
                content={<i className='bi bi-send-fill' />}
              />
            </div>
          </form>
        </div> */
}
