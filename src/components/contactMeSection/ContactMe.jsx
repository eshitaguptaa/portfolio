import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vn6up3f', 'template_2snqbxj', form.current, {
        publicKey: 'QYcHme_W5jrXhDYaI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormData({ from_name: '', from_email: '', message: '' });
          setSuccess(true);
          setTimeout(() => setSuccess(false), 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, type: 'spring', stiffness: 200, damping: 15 }}
      className="min-h-[60vh] bg-darkBrown flex flex-col items-center justify-center py-6 px-4"
    >
      {success && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-cyan text-white px-6 py-3 rounded-full shadow-lg z-50 text-lg font-semibold animate-fadeInOut">
          Message sent!
        </div>
      )}
      <h1 id='contact' className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-orange font-special">
        Let&apos;s <span className="text-cyan">Connect</span>
      </h1>
      <p className="text-sm text-lightGrey text-center mb-10 max-w-xl">
        Have a project, question, or opportunity? I&apos;m all ears — drop me a message and I&apos;ll get back within a day!
      </p>
      <form className="w-full max-w-md bg-white/5 rounded-2xl shadow-cyanShadow p-8 flex flex-col gap-6 border border-brown" ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          className="bg-darkBrown/80 text-white placeholder:text-lightGrey rounded-lg px-4 py-3 outline-none border border-darkGrey focus:border-cyan transition"
          value={formData.from_name}
          onChange={handleChange}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          className="bg-darkBrown/80 text-white placeholder:text-lightGrey rounded-lg px-4 py-3 outline-none border border-darkGrey focus:border-cyan transition"
          value={formData.from_email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="bg-darkBrown/80 text-white placeholder:text-lightGrey rounded-lg px-4 py-3 outline-none border border-darkGrey focus:border-cyan transition resize-none"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-r from-cyan to-orange text-white font-bold text-sm shadow-lg hover:from-orange hover:to-cyan transition-all duration-300 mt-2 hover:shadow-cyanShadow"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactMe; 