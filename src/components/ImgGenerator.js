import {useState, useEffect} from "react";

import {Configuration, OpenAIApi} from "openai";

import classes from "./ImgGenerator.module.css";

const key = process.env.REACT_APP_API_KEY;

const ImgGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [promt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: key,
  });

  const openai = new OpenAIApi(configuration);
  const generateImg = async () => {
    setLoading(true);
    try {
      const res = await openai.createImage({
        prompt: promt,
        n: 1,
        size: "512x512",
      });
      localStorage.setItem("img", res.data.data[0].url);
      setResult(res.data.data[0].url);
    } catch {
      alert("Something is not working, try again later");
    }

    setLoading(false);
  };

  useEffect(() => {
    setResult(localStorage.getItem("img"));
  }, [result]);

  return (
    <div className={classes.appMain}>
      {loading ? (
        <div className={classes.loader} />
      ) : (
        <button className={classes.button} onClick={generateImg}>
          Generate Img
        </button>
      )}
      <input
        className={classes.appInput}
        placeholder="Type something to Generate an Image.."
        onChange={(e) => setPrompt(e.target.value)}
      />

      {result && (
        <img src={result} alt="generated" className={classes.reusltImg} />
      )}
    </div>
  );
};
export default ImgGenerator;
