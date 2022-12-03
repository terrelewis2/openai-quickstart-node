import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [ageInput, setAgeInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [professionInput, setProfessionInput] = useState("")
  const [hobbiesInput, setHobbiesInput] = useState("")
  const [lookingForInput, setLookingForInput] = useState("")
  const [lookingForValue, setLookingForValue] = useState("");
  const [genderInput, setGenderInput] = useState("")
  const [genderValue, setGenderValue] = useState("")
  const [personalityInput, setPersonalityInput] = useState("")
  const [personalityValue, setPersonalityValue] = useState("")
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState("");


  async function onSubmit(event) {
    event.preventDefault();
    setStatus("Your bio options are being generated...")
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: ageInput,
        city: cityInput,
        gender: genderInput,
        profession: professionInput,
        country: countryInput,
        personality: personalityInput,
        hobbies: hobbiesInput,
        lookingFor: lookingForInput
      }),
    });
    const data = await response.json();
    //console.log("Data-->", data)
    setStatus("Your bio options are ready!")
    setResult([...data.result]);
    //console.log("Result :-->", result);
  }

  return (
    <div>
      <Head>
        <title>Bio Generator</title>
        <link rel="icon" href="/heart-png.webp" />
      </Head>

      <main className={styles.main}>
        <img src="/heart-png.webp" className={styles.icon} />
        <h3>Dating App Bio Generator</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="city"
            placeholder="Which city are you from?"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
          <input
            type="text"
            name="country"
            placeholder="Which country are you from?"
            value={countryInput}
            onChange={(e) => setCountryInput(e.target.value)}
          />

          <input
            type="text"
            name="age"
            placeholder="How old are you?"
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
          />

          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={professionInput}
            onChange={(e) => setProfessionInput(e.target.value)}
          />
          <select
            value={genderValue}
            onChange={(e) => {
              setGenderValue(e.target.value);
              setGenderInput(e.target.value);
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            style={{marginBottom:'6px'}}
            value={personalityValue}
            onChange={(e) => {
              setPersonalityValue(e.target.value);
              setPersonalityInput(e.target.value);
            }}
          >
            <option value="" default selected hidden>What's your personality type?</option>
            <option value="ISTJ">ISTJ</option>
            <option value="ISFJ">ISFJ</option>
            <option value="INFJ">INFJ</option>
            <option value="INTJ">INTJ</option>
            <option value="ISTP">ISTP</option>
            <option value="ISFP">ISFP</option>
            <option value="INFP">INFP</option>
            <option value="INTP">INTP</option>
            <option value="ESTP">ESTP</option>
            <option value="ESFP">ESFP</option>
            <option value="ENFP">ENFP</option>
            <option value="ENTP">ENTP</option>
            <option value="ESTJ">ESTJ</option>
            <option value="ESFJ">ESFJ</option>
            <option value="ENFJ">ENFJ</option>
            <option value="ENTJ">ENTJ</option>
          </select>

          <label>
            <a class="link" href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator#/media/File:MyersBriggsTypes.png" target="_blank">Find your personality type</a>
          </label>


          <select
            value={lookingForValue}
            onChange={(e) => {
              setLookingForValue(e.target.value);
              setLookingForInput(e.target.value);
            }}
          >
            <option value="long term relationship">Long Term Relationship</option>
            <option value="something casual">Something Casual</option>
            <option value="just friends">Just Friends</option>
            <option value="open to anything">Open To Anything</option>
          </select>
          <input
            type="text"
            name="hobbies"
            placeholder="What are your hobbies?"
            value={hobbiesInput}
            onChange={(e) => setHobbiesInput(e.target.value)}
          />
          <input type="submit" value="Genrate my dating bio" />
        </form>
        {<div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold", textAlign:"center" }}>{status}</div>}
        {result.map((el) => {
          return <>
            <div className={styles.result} style={{ width: "70%", marginTop: "0px !important" }}>{el.text}</div>
          </>
        })}

      </main>
    </div>
  );
}
