import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div style={styles.page}>
      {/* HERO */}
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

          <input placeholder="Your Name" style={styles.input} />
          <input placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.input} />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.button}
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
};

export default Contact;
