import React, { useState } from "react";
import { motion } from "framer-motion";
import { db, addDoc, collection } from "../../Firebase/firebase";
import Modal from "../../components/Modal/Modal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState({ isError: false, error: "" });
  const [emailError, setEmailError] = useState({ isError: false, error: "" });
  const [messageError, setMessageError] = useState({
    isError: false,
    error: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const validateName = () => {
    if (name.length <= 4) {
      setNameError({
        isError: true,
        error: "Name must be more than 4 characters.",
      });
      return false;
    } else {
      setNameError({ isError: false, error: "" });
      return true;
    }
  };

  // Validate email: should be a valid email format
  const validateEmail = () => {
    const tempEmail = email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(tempEmail)) {
      setEmailError({
        isError: true,
        error: "Please enter a valid email address.",
      });
      return false;
    } else {
      setEmailError({ isError: false, error: "" });
      return true;
    }
  };

  // Validate message: should be at least 200 characters
  const validateMessage = () => {
    if (message.length < 20) {
      setMessageError({
        isError: true,
        error: "Message must be at least 200 characters long.",
      });
      return false;
    } else {
      setMessageError({ isError: false, error: "" });
      return true;
    }
  };

  const onButtonSubmit = async (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    if (isEmailValid && isNameValid && isMessageValid) {
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          name: name,
          email: email,
          message: message,
          timestamp: new Date(),
        });
        openModal();
      } catch (e) {
        console.log(e);
      }

      // Clear the form
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div style={styles.page}>
      {/* HERO */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Success"
        content="Thanks for reaching out! I’ve received your message and will get back to you soon."
        buttonText="Close"
      />
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.hero}
      >
        <h1 style={styles.heroTitle}>Let’s Build Something Amazing 🚀</h1>
        <p style={styles.heroSub}>
          Got an idea, project, or opportunity? Let’s talk.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div style={styles.container}>
        {/* LEFT CARD */}
        <motion.div whileHover={{ scale: 1.03 }} style={styles.card}>
          <h2>Contact Info</h2>

          <div style={styles.item}>
            📧{"  "}
            <a style={styles.linkItem} href="mailto:imbiseks26@gmail.com">
              imbiseks26@gmail.com
            </a>
          </div>

          <div style={styles.item}>
            📞{"  "}
            <a style={styles.linkItem} href="tel:+917978218668">
              +91 7978218668
            </a>
          </div>

          <div style={styles.item}>
            💼{"  "}
            <a
              style={styles.linkItem}
              href="https://linkedin.com"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>

          <div style={styles.item}>{"🏠  Kendrapara, Odisha"}</div>
          <div style={styles.item}>{"🏢  Pune, Maharashtra"}</div>
        </motion.div>

        {/* FORM */}
        <motion.div whileHover={{ scale: 1.03 }} style={styles.form}>
          <h2>Send Message</h2>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            style={styles.input}
          />
          {nameError.isError && (
            <p style={styles.errorText}>{nameError.error}</p>
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            style={styles.input}
          />
          {emailError.isError && (
            <p style={styles.errorText}>{emailError.error}</p>
          )}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            style={styles.textArea}
            maxLength={500}
          />
          {
            <div style={styles.messageHelper}>
              <p style={styles.messageErrorText}>
                {messageError.error ? messageError.error : ""}
              </p>
              <p>{`${message.length} / 500`}</p>
            </div>
          }

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.button}
            onClick={onButtonSubmit}
          >
            Send Message ✉️
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "auto",
    paddingTop: "100px",
    paddingBottom: "100px",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
    color: "#fff",
    // fontFamily: "Inter, sans-serif",
  },

  hero: {
    textAlign: "center",
    marginBottom: "50px",
  },

  heroTitle: {
    fontSize: "40px",
    fontWeight: "bold",
  },

  heroSub: {
    color: "#bbb",
    marginTop: "10px",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },

  card: {
    width: "320px",
    padding: "25px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: "0.3s",
  },

  form: {
    width: "320px",
    padding: "25px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  item: {
    marginBottom: "15px",
  },

  linkItem: {
    textDecoration: "none",
    color: "inherit",
  },

  input: {
    boxSizing: "border-box",
    width: "100%",
    padding: "12px 14px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
    transition: "all 0.3s ease",
  },
  textArea: {
    boxSizing: "border-box",
    width: "100%",
    padding: "12px 14px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
    transition: "all 0.3s ease",
    height: "120px",
    lineHeight: "20px",
  },
  //   input: {
  //     boxSizing: "contet-box",
  //     width: "100%",
  //     padding: "12px",
  //     marginBottom: "12px",
  //     borderRadius: "8px",
  //     border: "none",
  //     outline: "none",
  //   },

  textarea: {
    width: "100%",
    padding: "12px",
    height: "110px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #00c6ff, #0072ff)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  errorText: {
    color: "red",
    marginTop: "-12px",
    paddingLeft: "4px",
  },

  messageHelper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "-28px",
    marginBottom: "14px",
  },

  messageErrorText: {
    color: "red",
    paddingLeft: "4px",
  },
};

export default Contact;
