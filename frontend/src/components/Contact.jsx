import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./contact.css";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://eventmastery-com.onrender.com/api/v1/message/send",
        { name, email, subject, message },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(response.data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://eventmastery-com.onrender.com/api/v1/subscribe/send",
        {  subscribeEmail },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(response.data.message);
      setSubscribeEmail("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact container">
        <div className="contact-item">
          <h4>Address</h4>
          <p>Prayagraj, Uttar Pradesh</p>
        </div>
        <div className="contact-item">
          <h4>Call Us</h4>
          <p>+91-9870656643</p>
        </div>
        <div className="contact-item">
          <h4>Mail Us</h4>
          <p>kandarialok207@gmail.com</p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3482.229155720704!2d78.9725002!3d29.2168134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDEzJzAwLjUiTiA3OMKwNTgnMjEuMCJF!5e0!3m2!1sen!2sin!4v1719939364171!5m2!1sen!2sin"
          style={{ border: 0, width: "100%", height: "450px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="form-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows={5}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
