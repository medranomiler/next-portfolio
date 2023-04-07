import MyModal from "../components/MyModal"
import { useState, useRef } from 'react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all required fields are completed
    if (!nameRef.current?.value || !emailRef.current?.value || !phoneRef.current?.value || !messageRef.current?.value) {
      setIsVisible(true)
      setSuccess(false)
      setMessage("There was an error with your form submission. Make sure all fields are completed correctly")
      return;
    }

    // Check if email is in correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailRef.current!.value)) {
      setIsVisible(true)
      setSuccess(false)
      setMessage("There was an error with your form submission. Make sure all fields are completed correctly")
      return;
    }

    // Check if phone number is in correct format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneRef.current!.value)) {
      setIsVisible(true)
      setSuccess(false)
      setMessage("There was an error with your form submission. Make sure all fields are completed correctly")
      return;
    }
    const newUser = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      phone: phoneRef.current!.value,
      message: messageRef.current!.value,
    };

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      setIsVisible(true)
      setSuccess(true)
      setMessage("Thank you for your submission. I will contact you shortly!")

    } catch (err) {
      setIsVisible(true)
      setSuccess(false)
      setMessage("There was an error with your form submission. Make sure all fields are completed correctly")
    }
    nameRef.current!.value = "";
    emailRef.current!.value = "";
    phoneRef.current!.value = "";
    messageRef.current!.value = "";
  };

  return (
    <>
    <MyModal isVisible={isVisible} isSuccess={success} message={message} onClose={() => setIsVisible(false)} />
    <section className="h-screen bg-white dark:bg-gray-950">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
      <form onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" ref={nameRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
              </div>
              <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="text" ref={emailRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
              </div>
              <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <input ref={phoneRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
              </div>
              <div className="sm:col-span-2">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                  <textarea ref={messageRef} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
              </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ">
              Submit
          </button>
      </form>
  </div>
</section>
    </>
  )
}

export default Home;