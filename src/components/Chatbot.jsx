import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Prevent multiple script injections
    if (!document.getElementById("chatbase-script")) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script";
      script.async = true;
      script.onload = () => {
        if (!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = (...args) => {
            if (!window.chatbase.q) window.chatbase.q = [];
            window.chatbase.q.push(args);
          };
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if (prop === "q") return target.q;
              return (...args) => target(prop, ...args);
            },
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return null; // This component just loads the script
};

export default Chatbot;
