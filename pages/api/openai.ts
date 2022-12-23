// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `write this email in business form: ${req.body}`,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    // stop: [" Email:", " AI:"],
  });
  //   console.log(completion, "##");

  //   res.status(200).json({ name: "John Doe" });
  //@ts-ignore
  return res.status(200).json(response.data.choices[0].text);
}
