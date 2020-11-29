import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import "./ChatScreen.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function ChatScreen() {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "",
      message: "what's up ❤️!",
    },
    {
      name: "Ellen",
      image: "",
      message: "How's it going",
    },
    {
      message: "Hi! How're you Ellen?",
    },
  ]);

  const addMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatscreen">
      <p className="chatscreen__timestamp">
        YOU MATCHED WITH ELLEN ON 23/11/20
      </p>
      <div className="chatscreen__messages">
        {messages.map((message) =>
          message.name ? (
            <div className="chatscreen__message" key={message.message}>
              <Avatar
                className={classes.small}
                fontSize="small"
                src={message.image}>
                {message.name[0]}
              </Avatar>
              <p className="chatscreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatscreen__message" key={message.message}>
              <p className="chatscreen__textUser">{message.message}</p>
            </div>
          )
        )}
      </div>
      <form className="chatscreen__input" action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatscreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          onClick={addMessage}
          className="chatscreen__inputButton">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
