'use client'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const form = useRef();

  const notify = () => toast.success('Vielen Dank!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    notify()

    emailjs.sendForm('service_5uu7b5p', 'template_rgvxzi8', form.current, 'LRqHoYdeSwW-6rK6m')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset()
  }

  return (
    <div className="max-w-screen-xl mb-8 mx-auto p-4 md:px-8" id={"contact"}>
    <div className="max-w-md mx-auto space-y-3 sm:text-center">
      <h3 className="text-primary font-semibold">
        Kontakt
      </h3>
      <p className="text-primary text-3xl font-semibold sm:text-4xl">
        Kontakt aufnehmen
      </p>
      <p>
        Ich freue mich von dir zu hören! Bitte fülle das Formular aus.
      </p>
    </div>
    <div className="mt-12 max-w-md lg:max-w-screen-lg mx-auto">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-5"
      >
        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full">
          <div>
            <label htmlFor="sirname" className="font-medium">
              Vorname*
            </label>
            <input
              type="text"
              id="sirname"
              required
              name="sirname"
              className="w-full mt-2 px-3 py-2 bg-transparent outline-none border border-zinc-400 focus:border-primary shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="family-name" className="font-medium">
              Nachname*
            </label>
            <input
              type="text"
              id="family-name"
              required
              name="family_name"
              className="w-full mt-2 px-3 py-2  bg-transparent outline-none border border-zinc-400 focus:border-primary shadow-sm rounded-lg"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="font-medium">
            Email*
          </label>
          <input
            type="email"
            id="email"
            required
            name="mail"
            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border border-zinc-400 focus:border-primary shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="phone" className="font-medium">
            Telefon*
          </label>
          <input
            type="number"
            id="phone"
            required
            name="phone"
            className="w-full mt-2 px-3 py-2  bg-transparent outline-none border border-zinc-400 focus:border-primary shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-medium">
            Nachricht*
          </label>
          <textarea
          required
          id="message"
          name="message" 
          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border border-zinc-400 focus:border-primary shadow-sm rounded-lg"></textarea>
        </div>
        <button
          className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-transparent border border-primary hover:text-primary active:bg-transparent rounded-lg duration-150"
        >
          Kontakt aufnehmen
        </button>
      </form>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </div>
  )
}