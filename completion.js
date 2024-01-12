const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const endpoint = "https://sunhackathon18.openai.azure.com"
const azureApiKey = "6dfa1da1a2ad4165b1ba1e7b0d60b6fe"

userInput = "Hello, what is azure?" // Input text ở đây 
const messages = [
  { role: "user", content: userInput },
];  

async function main() {
  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentId = "GPT35TURBO";
  const result = await client.getChatCompletions(deploymentId, messages);

  
  for (const choice of result.choices) {
    console.log(choice.message.content); // xuất choice.mesage.content ra file ở đây
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };