import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  //console.log("Request:", req.body.age)
  //const prompt =  generateBios(req.body.age, req.body.gender, req.body.city, req.body.profession, req.body.personality, req.body.hobbies, req.body.country, req.body.lookingFor)
  //complete.bios

  // const completion = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: prompt,
  //   temperature: 0.9,
  //   max_tokens: 1024,
  //   top_p: 1,
  //   frequency_penalty: 0,
  //   n:5,
  //   presence_penalty: 0.6
  // });
  //console.log("Choices:-->",  completion.data.choices)
  res.status(200).json({ result: "Hello World" });
}

// const generateDatingPrompt(name, age, hobbies, lookingFor)={

//   const prompt = ""
//   prompt = "I am a {age}-year-old living in Bangalore, India. My interests include ${hobbies}. I'm looking for {lr}.\n\n"
//   prompt += "Tell me more about myself.\n"
//   prompt += "Make my bio funny and witty.\n"
//   prompt += "Make my looking_for statement funny and witty.\n"
//   return prompt
// }


const generateBios = (age, gender, city, profession, personality, interests, country, lookingFor) => {
  // if (!LOOKING_FOR_OPTIONS.includes(lookingFor)) {
  //   throw new Error(`Invalid lookingFor value: ${lookingFor}. Must be one of: ${LOOKING_FOR_OPTIONS.join(", ")}`);
  // }
  //console.log("Age", age)
  var prompt = `I am a ${age}-year-old ${gender} living in ${city}, ${country}. I am a ${profession} by profession. My interests include ${interests}. I'm looking for ${lookingFor}\n\n`;
  prompt += "Tell me more about myself\n";
  prompt += "Make my bio funny and witty.\n";
  prompt += "Make my looking_for value funny and witty.\n";
  prompt += "Make it attractive to the opposite gender\n";
  prompt += `Add traits of a ${personality} person in the bio in a subtle way without mentioning the personality type`
  console.log("Prompt:-->",  prompt)
  return prompt
  // return openai
  //   .Completion.create(
  //     engine="text-davinci-002",
  //     prompt=prompt,
  //     max_tokens=1024,
  //     temperature=0.5,
  //     n=5,
  //   )
  //   .then((response) => {
  //     const bios = [];
  //     for (const choice of response["choices"]) {
  //       bios.push(choice["text"]);
  //     }
  //     return bios;
  //   });
};

//generateBios(30, "New York City", "reading, hiking, and trying new restaurants", "USA", "Long term").then(console.log);

// function generatePrompt(animal) {
//   const capitalizedAnimal =
//     animal[0].toUpperCase() + animal.slice(1).toLowerCase();
//   return `The following is a conversation with a Beauty and Makeup product AI assistant. The assistant is helpful, creative, clever, and very friendly.

//   AI: The best foundation for oily skin would be an oil-free, water-based foundation. For the most natural look, opt for a matte finish formula that won\’t look heavy or cakey on the skin. If possible, always test foundations before buying to ensure the right color match and coverage.
// Human: Which are the best brands?
// AI: Some of the most popular and highly rated brands for foundation for oily skin include Maybelline Dream Matte Mousse, L'Oreal Paris True Match Super-Blendable Foundation, Cover FX Natural Finish Oil Free Foundation, and Estée Lauder Double Wear Stay In Place Foundation.
// Human: Which is the best product to remove makeup?
// AI: Makeup remover products vary depending on the type of makeup that needs to be removed. For removing regular facial makeup, a simple micellar water or cleansing oil will do the trick. For waterproof and long-wearing makeup, you might need a heavier formula, such as a cleansing balm or cream. Popular makeup-removing products include Bioderma Sensibio H2O Micellar Water, Garnier SkinActive Micellar Cleansing Water, Clinique Take The Day Off Cleansing Balm, and Neutrogena Eye Makeup Remover.
// Human: Can you recommend some Indian brands?
// AI: Sure. Some of the best Indian brands for makeup removal products include Vaadi Herbals Refreshing Cleansing Milk, Lotus Herbals White Glow Oatmeal and Yogurt Skin Whitening Scrub, Himalaya Herbals Softening & Soothing Rosewater Toner, and Aroma Magic Mineral Glow Scrub.
// AI: ${capitalizedAnimal}
// Names:`;
// }
