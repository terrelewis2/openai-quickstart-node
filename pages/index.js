import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [hobbiesInput, setHobbiesInput] = useState("")
  const [lookingForInput, setLookingForInput] = useState("")
  const [result, setResult] = useState([]);

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput,
      age: ageInput,
      hobbies: hobbiesInput,
      lookingFor: lookingForInput
      }),
    });
    const data = await response.json();
    console.log("Data-->", data)
    setResult([...data.result]);
    console.log("Result :-->", result);
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Dating Expert</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="What's your name?"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input
            type="text"
            name="age"
            placeholder="How old are you?"
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
          />
          <label for="cars">Choose a car:</label>
<select id="cars" name="carlist" form="carform">
  <option value="male">Male</option>
  <option value="femal">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
          <input
            type="text"
            name="hobbies"
            placeholder="What are your hobbies?"
            value={hobbiesInput}
            onChange={(e) => setHobbiesInput(e.target.value)}
          />
          <input
            type="text"
            name="looking_for"
            placeholder="What are you looking for?"
            value={lookingForInput}
            onChange={(e) => setLookingForInput(e.target.value)}
          />
          <input type="submit" value="Ask Love Guru" />
        </form>
        {result.length == 0 ?  <div style={{ marginTop:"20px", fontSize: "20px", fontWeight: "bold"}}>Please Wait... </div> :  <div style={{ marginTop:"20px", fontSize: "20px", fontWeight: "bold"}}>Your bio is ready</div> }
        {result.map((el)=>{
          return <>
           <div className={styles.result} style={{width: "70%", marginTop: "0px !important"}}>{el.text}</div>
          </>
        })}
        
      </main>
    </div>
  );
}
