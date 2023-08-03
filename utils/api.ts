import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey:"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" ,
  // apiKey:process.env.NEXT_OPENAI_API_KEY ,

});

const openai = new OpenAIApi(configuration);

export const chatCompletion = async (prompt: string) => {
  if (prompt !== undefined) {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 3000,
    });
    console.log("completion", completion);
    return completion.data.choices[0].text;
  } else {
  }
};
