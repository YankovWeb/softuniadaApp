import {useState, useEffect} from "react";
import classes from "./ChatAi.module.css";
const {Configuration, OpenAIApi} = require("openai");

const ChatAi = () => {
  const [input, setInput] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createCompletion({
        model: "code-davinci-002",
        prompt: `You: ${input}\nJavaScript chatbot`,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
      });
      localStorage.setItem("text", response.data.choices[0].text);
      setGeneratedText(response.data.choices[0].text);
    } catch (error) {
      alert(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    setGeneratedText(localStorage.getItem("text"));
  }, [generatedText]);

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>AI for JavaScript</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes.input}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter your prompt"
        />
        <button className={classes.button} type="submit">
          Generate Text
        </button>
      </form>
      {loading && <div className={classes.loader}></div>}
      {generatedText && (
        <div className={classes.generatedText}>
          <p>{` Answer${generatedText}`}</p>
        </div>
      )}
    </div>
  );
};

export default ChatAi;
