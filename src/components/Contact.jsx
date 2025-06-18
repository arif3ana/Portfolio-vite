import React from "react";

export default function Contact({ emailClick, waClick }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = (number) => {
    setIsClicked(number);
    let time = setTimeout(() => {
      setIsClicked(0);
    }, 500);
    return () => clearTimeout(time);
  };
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
    <div className="mt-[200px] mb-[200px] bg-[linear-gradient(to_bottom,#4ea0d7,#472ac0)] rounded-[20px] p-[40px] grid xs:grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-x-[20px] gap-y-[40px]">
      <div className="flex flex-col gap-[30px] md:col-span-2 xl:col-span-2">
        <h3 className="xs:text-display2/[50px] md:text-display1/[56px] xl:text-[63px]/[63px] font-bold">
          Let’s Work <br /> Together
        </h3>
        <div className="flex gap-[40px]">
          <a
            href="mailto:arif.3ana@gmail.com"
            target="_blank"
            onClick={() => {
              handleClick(1), emailClick;
            }}
          >
            <div
              className={`${
                isClicked == 1 ? "scale-90" : "scale-100"
              } rounded-[20px] text-center xs:w-[60px] xs:h-[60px] xs:text-heading1 lg:w-[70px] lg:h-[70px] lg:text-display4 2xl:w-[80px] 2xl:h-[80px] 2xl:text-display3 flex items-center justify-center bg-[linear-gradient(to_top,#4ea0d7,#472ac0)] shadow-[-2px_4px_12px_#4ea0d7] transition-all ease-in hover:shadow-[-2px_-2px_10px_#472ac0]`}
            >
              <i className="bi bi-envelope-at-fill" />
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6285703020296"
            target="_blank"
            onClick={() => {
              handleClick(2), waClick;
            }}
          >
            <div
              className={`${
                isClicked == 2 ? "scale-90" : "scale-100"
              } rounded-[20px] text-center xs:w-[60px] xs:h-[60px] xs:text-heading1 lg:w-[70px] lg:h-[70px] lg:text-display4  2xl:w-[80px] 2xl:h-[80px] 2xl:text-display3 flex items-center justify-center bg-[linear-gradient(to_top,#4ea0d7,#472ac0)] shadow-[-2px_4px_12px_#4ea0d7] transition-all ease-in hover:shadow-[-2px_-2px_10px_#472ac0]`}
            >
              <i className="bi bi-whatsapp" />
            </div>
          </a>
        </div>
      </div>
      <div className="flex items-center md:col-span-2 xl:col-span-3">
        <p p className="xs:text-heading4 md:text-heading2 2xl:text-heading1">
          Looking for a developer to join your team or build your next idea? I’m
          open to work and freelance gigs!
        </p>
      </div>
      <div className="text-center h-full flex items-center justify-end md:col-span-4 xl:col-span-1">
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
